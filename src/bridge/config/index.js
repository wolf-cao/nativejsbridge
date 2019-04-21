// 配置基础信息
const CONST_xxxxxxxxxx = 'xxxxxxxxxx'
const CONST_yyyyyy = 'yyyyyy'
const CONST_IOS = 'ios'
const CONST_ANDROID = 'android'
const __UA = navigator.userAgent
const __VD = navigator.vendor
const __PF = navigator.platform

// 配置UA信息
const UA_CONFIG = {
  xxxxxxxxxx_ios: /xxxxxxxxxx_ios/i.test(__UA),
  xxxxxxxxxx_android: /xxxxxxxxxx_android/i.test(__UA),
  yyyyyy: /yyyyyy/i.test(__UA)
}

// 浏览器集合
const BROWSE_CONFIG = [
  {
    string: __UA,
    subString: 'Chrome',
    identity: 'Chrome'
  },
  {
    string: __UA,
    subString: 'OmniWeb',
    versionSearch: 'OmniWeb/',
    identity: 'OmniWeb'
  },
  {
    string: __VD,
    subString: 'Apple',
    identity: 'Safari',
    versionSearch: 'Version'
  },
  {
    prop: window.opera,
    identity: 'Opera',
    versionSearch: 'Version'
  },
  {
    string: __VD,
    subString: 'iCab',
    identity: 'iCab'
  },
  {
    string: __VD,
    subString: 'KDE',
    identity: 'Konqueror'
  },
  {
    string: __UA,
    subString: 'Firefox',
    identity: 'Firefox'
  },
  {
    string: __VD,
    subString: 'Camino',
    identity: 'Camino'
  },
  {
    subString: 'Netscape',
    identity: 'Netscape'
  }, // for newer Netscapes (6+)string: navigator.userAgent,
  {
    string: __UA,
    subString: 'MSIE',
    identity: 'Explorer',
    versionSearch: 'MSIE'
  },
  {
    string: __UA,
    subString: 'Gecko',
    identity: 'Mozilla',
    versionSearch: 'rv'
  },
  {
    string: __UA,
    subString: 'Mozilla',
    identity: 'Netscape',
    versionSearch: 'Mozilla'
  }
]

// 系统集合
const PLATFORM_CONFIG = [
  {
    string: __PF,
    subString: 'Win',
    identity: 'Windows'
  },
  {
    string: __PF,
    subString: 'Mac',
    identity: 'Mac'
  },
  {
    string: __UA,
    subString: 'iPhone',
    identity: 'iPhone/iPod'
  },
  {
    string: __PF,
    subString: 'Linux',
    identity: 'Linux'
  }
]

export {
  CONST_xxxxxxxxxx,
  CONST_yyyyyy,
  CONST_IOS,
  CONST_ANDROID,
  UA_CONFIG,
  PLATFORM_CONFIG,
  BROWSE_CONFIG
}
