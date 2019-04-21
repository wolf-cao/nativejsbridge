import BridgeApi from './bridge/api/index'
import { mapping, runNativeApi, runCommandForIos } from './bridge/utils/index'
import Utils from './bridge/api/utils'

function noop() {}

//
;(self => {
  // global config
  const __JS_BRIDGE_NAME = 'xxxxxxxxxxJSBridge'
  const __JS_BRIDGE = (self[__JS_BRIDGE_NAME] = {})

  const callMethod = (
    methodName,
    params,
    handleCallback1 = noop,
    handleCallback2 = noop
  ) => {
    const methodMap = mapping(methodName, BridgeApi)
    if (!methodMap) {
      return
    }

    runNativeApi(
      methodMap.name,
      params,
      handleCallback1,
      handleCallback2,
      methodMap.callback,
      methodMap.special
    )
  }

  return {
    init: () => {
      // 调用交互方法
      Object.keys(BridgeApi).map(item => {
        __JS_BRIDGE[item] = function() {
          callMethod(item, ...arguments)
        }
      })

      // 判断是否在APP环境内(bool)
      __JS_BRIDGE.inApp = Utils.isInApp

      // android环境
      __JS_BRIDGE.isAndroid = Utils.isAndroid

      // ios环境
      __JS_BRIDGE.isIos = Utils.isIos

      // wap环境获取浏览器基础信息
      __JS_BRIDGE.browser = Utils.browser

      // =================================
      // =================================
      // 为了使用的方便性，需要增加一些兼容的方法:
      // =================================
      // 1.设置标题 - 兼容主包和私募包的交易容器
      __JS_BRIDGE['setTitleCommon'] = function() {
        __JS_BRIDGE['setTitleForTrade'](...arguments)
        __JS_BRIDGE['setTitle'](...arguments)
      }

      // 2.右上角分享 - 调用方法简化
      __JS_BRIDGE['setOptionShare'] = function() {
        const __arguments = [...arguments][0]
        __JS_BRIDGE['shareInAppTop'](__arguments, function() {
          __JS_BRIDGE['onShareClicked'](__arguments)
        })
        __JS_BRIDGE['showRightBtn']()
      }

      // 3.图片上传 - 主包的交易容器需要用另外一个上传方法，且接受的参数特殊，返回的参数也不一致
      __JS_BRIDGE['uploadPhotoCommon'] = function() {
        if (Utils.isIos && navigator.userAgent.indexOf('yyyyyy') < 0) {
          const __arguments = [...arguments]
          const imageParams = [
            __arguments[0].openType,
            __arguments[0].username,
            __arguments[0].hashcode,
            __arguments[0].photoURL,
            __arguments[0].ocrPhotoURL
          ]
          __JS_BRIDGE['uploadPhotoForTrade'](
            imageParams.join(','),
            __arguments[1],
            __arguments[2]
          )
          return
        }
        __JS_BRIDGE['uploadPhoto'](...arguments)
      }

      // 4.新开webview
      __JS_BRIDGE['pushWindow'] = function(jumpUrl) {
        // 主包
        if (Utils.isInApp && navigator.userAgent.indexOf('yyyyyy') < 0) {
          // android
          if (Utils.isAndroid) {
            location.href = `xcvb://quicktrade?tradeflag=webh5&url=${encodeURIComponent(
              jumpUrl
            )}`
            return
          }

          // ios
          if (Utils.isIos) {
            runCommandForIos(
              `xxxxxxxxxx://wireless/txtrade/withoutLoginH5?url=${jumpUrl}`,
              '',
              true
            )
            return
          }
          return
        }

        // 私募环境
        // android
        if (Utils.isAndroid) {
          location.href = `xcvb://webh5?xythemetype=d&url=${encodeURIComponent(
            jumpUrl
          )}`
          return
        }

        // ios
        if (Utils.isIos) {
          runCommandForIos(
            `yyyyyy://wireless/h5/url=${encodeURIComponent(jumpUrl)}`,
            '',
            true
          )
          return
        }

        // wap
        location.href = jumpUrl
      }

      self.est = __JS_BRIDGE
    }
  }
})(window).init()
