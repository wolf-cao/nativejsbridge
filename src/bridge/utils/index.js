import {
  CONST_xxxxxxxxxx,
  CONST_yyyyyy,
  CONST_IOS,
  CONST_ANDROID,
  UA_CONFIG,
  PLATFORM_CONFIG,
  BROWSE_CONFIG
} from '../config/index'

function noop() {}

// 判断webview的环境
const getCurrentEnv = () => {
  const currEnv = {
    app: 'wap',
    env: 'wap'
  }

  // 判断ios
  if (UA_CONFIG.xxxxxxxxxx_ios) {
    currEnv.env = CONST_IOS
  }

  // 判断android
  if (UA_CONFIG.xxxxxxxxxx_android) {
    currEnv.env = CONST_ANDROID
  }

  // 判断私募
  if (UA_CONFIG.yyyyyy) {
    currEnv.app = CONST_yyyyyy
    return currEnv
  }

  // 如果env被赋值，说明就是主包
  if (currEnv.env !== 'wap') {
    currEnv.app = CONST_xxxxxxxxxx
  }

  return currEnv
}

const jsonParse = str => {
  if (typeof str === 'object') {
    return str
  }
  str = str.replace(/\n/g, '\\\\n').replace(/\r/g, '\\\\r')
  try {
    return JSON.parse(str)
  } catch (e) {
    try {
      return eval2('(' + str + ')')
    } catch (e1) {
      return {}
    }
  }
}

/**
 * 执行原生方法
 * @param {*} methodName 交互方法名
 * @param {*} jsonStr 参数
 * @param {*} handleCallback1
 * @param {*} handleCallback2
 * @param {*} callback 回调配置
 * @param {*} special 预留内置参数
 */
const runNativeApi = (
  methodName,
  jsonStr,
  handleCallback1,
  handleCallback2,
  callback,
  special
) => {
  let eventCallback1 = handleCallback1 || noop
  let eventCallback2 = handleCallback2 || noop
  if (typeof jsonStr === 'function') {
    eventCallback2 = eventCallback1
    eventCallback1 = jsonStr || noop
    jsonStr = {}
  }
  const currentEnvConfig = getCurrentEnv()

  let tmpJson = jsonStr

  // 当ios和android使用的参数和方法名完全不一样的时候
  // 使用special
  if (special) {
    if (special.filter) {
      special.value = special.value.replace(/\|#_#\|/g, tmpJson[special.filter])
    }
    tmpJson = special.value
  }

  if (callback && callback.length > 0) {
    callback.map((item, index) => {
      if (index === 0) {
        // 如果有多个回调参数
        if (item.isMoreParam) {
          window[item.name] = function() {
            eventCallback1.apply(this, arguments)
            if (item.feedback && item.feedback !== 'forever') {
              window[item.name] = noop
            }
          }
          return
        }
        window[item.name] = value => {
          eventCallback1.apply(this, [(value && jsonParse(value)) || ''])
          if (item.feedback && item.feedback !== 'forever') {
            window[item.name] = noop
          }
        }
      }

      if (index === 1) {
        if (item.isMoreParam) {
          window[item.name] = function() {
            eventCallback2.apply(this, arguments)
            if (item.feedback && item.feedback !== 'forever') {
              window[item.name] = noop
            }
          }
          return
        }
        window[item.name] = value => {
          eventCallback2.apply(this, [(value && jsonParse(value)) || ''])
          if (item.feedback && item.feedback !== 'forever') {
            window[item.name] = noop
          }
        }
      }

      if (item.key) {
        tmpJson[item.key] = item.name
      }
    })
  }

  if (tmpJson && JSON.stringify(tmpJson) !== '{}') {
    if (typeof tmpJson === 'object') {
      tmpJson = JSON.stringify(tmpJson)
    }
  } else {
    tmpJson = ''
  }

  // ios-app包
  if (currentEnvConfig.env === CONST_IOS) {
    runCommandForIos(methodName, tmpJson)
  }

  // android-app包
  if (currentEnvConfig.env === CONST_ANDROID) {
    prompt(methodName, tmpJson)
  }
}

// 根据当前环境获取原生方法的配置
const mapping = (method, maps) => {
  const currentEnvConfig = getCurrentEnv()
  const currentApp = currentEnvConfig.app
  const currentEnv = currentEnvConfig.env

  const mappingMethod = maps[method]

  if (
    !mappingMethod[currentApp] ||
    !mappingMethod[currentApp][currentEnv] ||
    mappingMethod[currentApp] === 'wap'
  ) {
    return null
  }

  return {
    name: mappingMethod[currentApp][currentEnv].methodName,
    callback: mappingMethod[currentApp][currentEnv].callback || '',
    special: mappingMethod[currentApp][currentEnv].params || ''
  }
}

// WAP获取浏览器基础信息
const getBrowserInfo = () => {
  let versionSearchString = ''
  const searchString = data => {
    for (let i = 0; i < data.length; i++) {
      let { string: dataString, prop: dataProp } = data[i]
      versionSearchString = data[i].versionSearch || data[i].identity
      if (dataString) {
        if (dataString.indexOf(data[i].subString) !== -1) {
          return data[i].identity
        }
      } else if (dataProp) {
        return data[i].identity
      }
    }
  }

  const searchVersion = dataString => {
    let index = dataString.indexOf(versionSearchString)
    if (index == -1) return
    return parseFloat(
      dataString.substring(index + versionSearchString.length + 1)
    )
  }

  return {
    name: searchString(BROWSE_CONFIG) || 'An unknown browser',
    version:
      searchVersion(navigator.userAgent) ||
      searchVersion(navigator.appVersion) ||
      'an unknown version',
    os: searchString(PLATFORM_CONFIG) || 'an unknown OS'
  }
}

// 调用原生交互方法 - ios
const runCommandForIos = (command, params = '', isUrl = false) => {
  const frame = document.createElement('iframe')
  frame.src = isUrl ? command : `${command}:${params}`
  frame.style.display = 'none'
  frame.width = 1
  frame.height = 1

  document.body.appendChild(frame)

  frame.remove()
}

export { mapping, runNativeApi, runCommandForIos, getBrowserInfo }
