import { UA_CONFIG } from '../config/index'
import { getBrowserInfo } from '../utils/index'

const Utils = {
  isInApp: UA_CONFIG.xxxxxxxxxx_ios || UA_CONFIG.xxxxxxxxxx_android,
  isAndroid: UA_CONFIG.xxxxxxxxxx_android,
  isIos: UA_CONFIG.xxxxxxxxxx_ios,
  browser: getBrowserInfo()
}

export default Utils
