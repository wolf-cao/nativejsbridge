// 交互api
// >= ios9
// >= android4.3
const BRIDGEAPI = {
  // 关闭当前webview
  // xxxxxxxxxx - ios: done
  // xxxxxxxxxx - android: done
  // yyyyyy - ios: done
  // yyyyyy - android: done
  // 主包下存在关闭两次的bug
  closeWebView: {
    yyyyyy: {
      ios: {
        methodName: 'goWhere'
      },
      android: {
        methodName: 'goWhere'
      }
    },
    xxxxxxxxxx: {
      ios: {
        methodName: 'goWhere'
      },
      android: {
        methodName: 'goWhere'
      }
    }
  },

  // 设置webview标题 - 交易容器
  // xxxxxxxxxx - ios: done
  setTitleForTrade: {
    xxxxxxxxxx: {
      ios: {
        methodName: 'inittitlebartext',
        params: {
          value: '|#_#|',
          filter: 'title1'
        }
      }
    }
  },

  // 设置webview标题 - 普通容器
  // xxxxxxxxxx - ios: done
  // xxxxxxxxxx - android: done
  // yyyyyy - ios: done
  // yyyyyy - android: done
  setTitle: {
    yyyyyy: {
      ios: {
        methodName: 'xyh5title'
      },
      android: {
        methodName: 'xyH5Title'
      }
    },
    xxxxxxxxxx: {
      ios: {
        methodName: 'xyH5Title'
      },
      android: {
        methodName: 'xyH5Title'
      }
    }
  },

  // webview右上角设置分享按钮
  // xxxxxxxxxx - ios: done
  // xxxxxxxxxx - android: done
  // yyyyyy - ios: done
  // yyyyyy - android: done
  shareInAppTop: {
    xxxxxxxxxx: {
      ios: {
        methodName: 'xySendPageInfoToAPP',
        callback: [
          {
            key: '',
            name: 'xyH5ShareInfo',
            feedback: 'forever'
          }
        ]
      },
      android: {
        methodName: 'xySendPageInfoToAPP',
        callback: [
          {
            key: '',
            name: 'xyH5ShareInfo',
            feedback: 'forever'
          }
        ]
      }
    },
    yyyyyy: {
      ios: {
        methodName: 'xySendPageInfoToAPP',
        callback: [
          {
            key: '',
            name: 'xyH5ShareInfo',
            feedback: 'forever'
          }
        ]
      },
      android: {
        methodName: 'xySendPageInfoToAPP',
        callback: [
          {
            key: '',
            name: 'xyH5ShareInfo',
            feedback: 'forever'
          }
        ]
      }
    }
  },

  // 页面分享点击事件
  // xxxxxxxxxx - ios: done
  // xxxxxxxxxx - android: done
  // yyyyyy - ios: done
  // yyyyyy - android: done
  onShareClicked: {
    xxxxxxxxxx: {
      ios: {
        methodName: 'onwebshareclicked',
        callback: [
          {
            key: 'callbackname',
            name: 'shareclick_callback',
            feedback: 'forever'
          }
        ]
      },
      android: {
        methodName: 'onShareClicked',
        callback: [
          {
            key: 'callbackname',
            name: 'shareclick_callback',
            feedback: 'forever'
          }
        ]
      }
    },
    yyyyyy: {
      ios: {
        methodName: 'onwebshareclicked',
        callback: [
          {
            key: 'callbackname',
            name: 'shareclick_callback',
            feedback: 'forever'
          }
        ]
      },
      android: {
        methodName: 'onShareClicked',
        callback: [
          {
            key: 'callbackname',
            name: 'shareclick_callback',
            feedback: 'forever'
          }
        ]
      }
    }
  },

  // 隐藏webview右上角分享按钮
  // xxxxxxxxxx - ios: done
  // xxxxxxxxxx - android: done
  // yyyyyy - ios: done
  // yyyyyy - android: done
  hideRightBtn: {
    xxxxxxxxxx: {
      ios: {
        methodName: 'xyH5ShareNeed',
        params: {
          value: 0
        }
      },
      android: {
        methodName: 'xySetTitleRightBtn',
        params: {
          value: {
            type: 'share',
            enable: 0
          }
        }
      }
    },
    yyyyyy: {
      ios: {
        methodName: 'xyH5ShareNeed',
        params: {
          value: 0
        }
      },
      android: {
        methodName: 'xySetTitleRightBtn',
        params: {
          value: {
            type: 'share',
            enable: 0
          }
        }
      }
    }
  },

  // webview右上角分享按钮显示
  // xxxxxxxxxx - ios: done
  // xxxxxxxxxx - android: done
  // yyyyyy - ios: done
  // yyyyyy - android: done
  showRightBtn: {
    xxxxxxxxxx: {
      ios: {
        methodName: 'xyH5ShareNeed',
        params: {
          value: 1
        }
      },
      android: {
        methodName: 'xySetTitleRightBtn',
        params: {
          value: {
            type: 'share',
            enable: 1
          }
        }
      }
    },
    yyyyyy: {
      ios: {
        methodName: 'xyH5ShareNeed',
        params: {
          value: 1
        }
      },
      android: {
        methodName: 'xySetTitleRightBtn',
        params: {
          value: {
            type: 'share',
            enable: 1
          }
        }
      }
    }
  },

  // 获取设备信息
  // xxxxxxxxxx - ios: done
  // xxxxxxxxxx - android: done
  // yyyyyy - ios: done
  // yyyyyy - android: done
  getModuleInfo: {
    xxxxxxxxxx: {
      ios: {
        methodName: 'h5GetModuleInfo',
        callback: [
          {
            key: 'callbackname',
            name: 'getModuleInfo_callback'
          }
        ]
      },
      android: {
        methodName: 'h5GetModuleInfo',
        callback: [
          {
            key: 'callbackname',
            name: 'getModuleInfo_callback'
          }
        ]
      }
    },
    yyyyyy: {
      ios: {
        methodName: 'h5GetModuleInfo',
        callback: [
          {
            key: 'callbackname',
            name: 'getModuleInfo_callback'
          }
        ]
      },
      android: {
        methodName: 'h5GetModuleInfo',
        callback: [
          {
            key: 'callbackname',
            name: 'getModuleInfo_callback'
          }
        ]
      }
    }
  },

  // 股吧回帖
  // xxxxxxxxxx - ios: done
  // xxxxxxxxxx - android: done
  // yyyyyy - ios: done
  // yyyyyy - android: done
  gubaReplyComment: {
    xxxxxxxxxx: {
      ios: {
        methodName: 'xyH5ReplyTieZi',
        callbackname: [
          {
            key: 'callbackname',
            name: 'replyComment_callback'
          }
        ]
      },
      android: {
        methodName: 'xyH5ReplyTieZi',
        callbackname: [
          {
            key: 'callbackname',
            name: 'replyComment_callback'
          }
        ]
      }
    },
    yyyyyy: {
      ios: {
        methodName: 'xyH5ReplyTieZi',
        callbackname: [
          {
            key: 'callbackname',
            name: 'replyComment_callback'
          }
        ]
      },
      android: {
        methodName: 'xyH5ReplyTieZi',
        callbackname: [
          {
            key: 'callbackname',
            name: 'replyComment_callback'
          }
        ]
      }
    }
  },

  // 股吧发帖
  // xxxxxxxxxx - ios: done
  // xxxxxxxxxx - android: done
  // yyyyyy - ios: done
  // yyyyyy - android: done
  gubaPostComment: {
    xxxxxxxxxx: {
      ios: {
        methodName: 'xyH5PostTieZi',
        callback: [
          {
            key: 'callbackname',
            name: 'postComment_callback'
          }
        ]
      },
      android: {
        methodName: 'xyH5PostTieZi',
        callback: [
          {
            key: 'callbackname',
            name: 'postComment_callback'
          }
        ]
      }
    },
    yyyyyy: {
      ios: {
        methodName: 'xyH5PostTieZi',
        callback: [
          {
            key: 'callbackname',
            name: 'postComment_callback'
          }
        ]
      },
      android: {
        methodName: 'xyH5PostTieZi',
        callback: [
          {
            key: 'callbackname',
            name: 'postComment_callback'
          }
        ]
      }
    }
  },

  // 获取用户登录信息
  // xxxxxxxxxx - ios: done
  // xxxxxxxxxx - android: done
  // yyyyyy - ios: done
  // yyyyyy - android: done
  getUserLoginInfo: {
    xxxxxxxxxx: {
      ios: {
        methodName: 'xyH5GetLoginStatus',
        callback: [
          {
            key: 'callbackname',
            name: 'getLoginStatus_callback'
          }
        ]
      },
      android: {
        methodName: 'xyH5GetLoginStatus',
        callback: [
          {
            key: 'callbackname',
            name: 'getLoginStatus_callback'
          }
        ]
      }
    },
    yyyyyy: {
      ios: {
        methodName: 'xyH5GetLoginStatus',
        callback: [
          {
            key: 'callbackname',
            name: 'getLoginStatus_callback'
          }
        ]
      },
      android: {
        methodName: 'xyH5GetLoginStatus',
        callback: [
          {
            key: 'callbackname',
            name: 'getLoginStatus_callback'
          }
        ]
      }
    }
  },

  // 触发登录
  // xxxxxxxxxx - ios: done
  // xxxxxxxxxx - android: done
  // yyyyyy - ios: done
  // yyyyyy - android: done
  eventLogin: {
    xxxxxxxxxx: {
      ios: {
        methodName: 'xyH5NativeLogin',
        callback: [
          {
            key: 'callbackname',
            name: 'doLogin_callback'
          }
        ]
      },
      android: {
        methodName: 'xyH5NativeLogin',
        callback: [
          {
            key: 'callbackname',
            name: 'doLogin_callback'
          }
        ]
      }
    },
    yyyyyy: {
      ios: {
        methodName: 'xyH5NativeLogin',
        callback: [
          {
            key: 'callbackname',
            name: 'doLogin_callback'
          }
        ]
      },
      android: {
        methodName: 'xyH5NativeLogin',
        callback: [
          {
            key: 'callbackname',
            name: 'doLogin_callback'
          }
        ]
      }
    }
  },

  // 弹窗
  // yyyyyy - ios: done
  // yyyyyy - android: done
  nativeAlert: {
    yyyyyy: {
      ios: {
        methodName: 'xyToast'
      },
      android: {
        methodName: 'xyToast'
      }
    }
  },

  // 获取资金账号登录信息
  // xxxxxxxxxx - ios: done
  // xxxxxxxxxx - android: done
  // yyyyyy - ios: done
  // yyyyyy - android: done
  getLocalCurrentFuncid: {
    xxxxxxxxxx: {
      ios: {
        methodName: 'getLocalCurrentFuncidV2',
        callback: [
          {
            key: '',
            name: 'getCurrentAccountsV2'
          }
        ]
      },
      android: {
        methodName: 'getLocalCurrentFuncidV2',
        callback: [
          {
            key: '',
            name: 'getCurrentAccountsV2'
          }
        ]
      }
    },
    yyyyyy: {
      ios: {
        methodName: 'getLocalCurrentFuncidV2',
        callback: [
          {
            key: '',
            name: 'getCurrentAccountsV2'
          }
        ]
      },
      android: {
        methodName: 'getLocalCurrentFuncidV2',
        callback: [
          {
            key: '',
            name: 'getCurrentAccountsV2'
          }
        ]
      }
    }
  },

  // android拨打电话
  // xxxxxxxxxx - android: done
  // yyyyyy - android: done
  callTelForAndroid: {
    xxxxxxxxxx: {
      android: {
        methodName: 'callTel'
      }
    },
    yyyyyy: {
      android: {
        methodName: 'callTel'
      }
    }
  },

  // 获取终端设备信息
  // xxxxxxxxxx - ios: done
  // xxxxxxxxxx - android: done
  // yyyyyy - ios: done
  // yyyyyy - android: done
  getDeviceInfo: {
    xxxxxxxxxx: {
      ios: {
        methodName: 'getDeviceInfo',
        callback: [
          {
            key: 'callbackname',
            name: 'getDeviceInfo_callback'
          }
        ]
      },
      android: {
        methodName: 'getDeviceInfo',
        callback: [
          {
            key: 'callbackname',
            name: 'getDeviceInfo_callback'
          }
        ]
      }
    },
    yyyyyy: {
      ios: {
        methodName: 'getDeviceInfo',
        callback: [
          {
            key: 'callbackname',
            name: 'getDeviceInfo_callback'
          }
        ]
      },
      android: {
        methodName: 'getDeviceInfo',
        callback: [
          {
            key: 'callbackname',
            name: 'getDeviceInfo_callback'
          }
        ]
      }
    }
  },

  // 唤起资金账户登录带跳转链接
  // xxxxxxxxxx - ios: done
  // xxxxxxxxxx - android: nodone
  // yyyyyy - ios: done
  // yyyyyy - android: nodone
  eventTradeLoginWithJumpUrl: {
    xxxxxxxxxx: {
      ios: {
        methodName: 'opennativejumpurllogin',
        params: {
          value: '|#_#|',
          filter: 'targetUrl'
        }
      },
      android: {
        methodName: 'opennativejumpurllogin',
        params: {
          value: '|#_#|',
          filter: 'targetUrl'
        }
      }
    },
    yyyyyy: {
      ios: {
        methodName: 'openTradeLogin',
        callback: [
          {
            key: 'callbackname',
            name: 'eventTradeLoginWithJumpUrl_callback'
          }
        ]
      },
      android: {
        methodName: 'openTradeLogin',
        callback: [
          {
            key: 'callbackname',
            name: 'eventTradeLoginWithJumpUrl_callback'
          }
        ]
      }
    }
  },

  // 唤醒资金账号登录
  // xxxxxxxxxx - ios: done
  // yyyyyy - ios: done
  // yyyyyy - android: done
  eventTradeLogin: {
    xxxxxxxxxx: {
      ios: {
        methodName: 'openNativeLoginV2',
        callback: [
          {
            key: '',
            name: 'getCurrentAccountsV2'
          }
        ]
      },
      android: {
        methodName: 'openNativeLoginV2',
        callback: [
          {
            key: '',
            name: 'getCurrentAccountsV2'
          }
        ]
      }
    },
    yyyyyy: {
      ios: {
        methodName: 'openNativeLoginV2',
        callback: [
          {
            key: '',
            name: 'getCurrentAccountsV2'
          }
        ]
      },
      android: {
        methodName: 'openNativeLoginV2',
        callback: [
          {
            key: '',
            name: 'getCurrentAccountsV2'
          }
        ]
      }
    }
  },

  // 唤起相机/相册上传图片
  // xxxxxxxxxx - ios: done
  uploadPhotoForTrade: {
    xxxxxxxxxx: {
      ios: {
        methodName: 'regsuccess',
        callback: [
          {
            key: '',
            name: 'chosePhoto'
          },
          {
            key: '',
            name: 'getphoto',
            isMoreParam: true
          }
        ]
      }
    }
  },

  // 唤起相机上传图片，或打开相册上传图片
  // yyyyyy - ios: done
  // yyyyyy - android: done
  // xxxxxxxxxx - android: done
  uploadPhoto: {
    xxxxxxxxxx: {
      android: {
        methodName: 'xyH5UploadPhoto',
        callback: [
          {
            key: '',
            name: 'onPreExecute'
          },
          {
            key: 'callback',
            name: 'runjs'
          }
        ]
      }
    },
    yyyyyy: {
      ios: {
        methodName: 'xyH5UploadPhoto',
        callback: [
          {
            key: '',
            name: 'onPreExecute'
          },
          {
            key: 'callback',
            name: 'runjs'
          }
        ]
      },
      android: {
        methodName: 'xyH5UploadPhoto',
        callback: [
          {
            key: '',
            name: 'onPreExecute'
          },
          {
            key: 'callback',
            name: 'runjs'
          }
        ]
      }
    }
  },

  // 图片放大
  // xxxxxxxxxx - ios: done
  // xxxxxxxxxx - android: done
  // yyyyyy - ios: done
  // yyyyyy - android: done
  imagePreview: {
    yyyyyy: {
      ios: {
        methodName: 'topicImageWith'
      },
      android: {
        methodName: 'xyOpenImages'
      }
    },
    xxxxxxxxxx: {
      ios: {
        methodName: 'xyOpenImages'
      },
      android: {
        methodName: 'xyOpenImages'
      }
    }
  },

  // 风险评测
  // yyyyyy - ios: done
  // yyyyyy - android: done
  showInvestorVerify: {
    yyyyyy: {
      ios: {
        methodName: 'showInvestorVerifyDialog',
        callback: [
          {
            key: 'goVerifyCallBackName',
            name: 'xxgoverify'
          },
          {
            key: 'closeCallBackName',
            name: 'xxclose'
          }
        ]
      },
      android: {
        methodName: 'showInvestorVerifyDialog',
        callback: [
          {
            key: 'goVerifyCallBackName',
            name: 'xxgoverify'
          },
          {
            key: 'closeCallBackName',
            name: 'xxclose'
          }
        ]
      }
    }
  },

  //刷新用户信息交互
  // yyyyyy - ios: done
  // yyyyyy - android: done
  reloadUserInfo: {
    xxxxxxxxxx: {
      ios: {
        methodName: 'xyH5ReloadData'
      },
      android: {
        methodName: 'xyH5ReloadData'
      }
    },
    yyyyyy: {
      ios: {
        methodName: 'xyH5ReloadData'
      },
      android: {
        methodName: 'xyH5ReloadData'
      }
    }
  },

  // 播放视频
  // yyyyyy - ios: done
  // yyyyyy - android: done
  playVideo: {
    yyyyyy: {
      ios: {
        methodName: 'triggerPageAction'
      },
      android: {
        methodName: 'triggerPageAction'
      }
    }
  },

  // 容器被再激活
  // yyyyyy - ios: done
  // yyyyyy - android: done
  // xxxxxxxxxx - android: done
  onResume: {
    yyyyyy: {
      ios: {
        methodName: 'xySendPageInfoToAPP',
        params: {
          value: {
            pagxyethods: {
              webviewGoBack: 'onResume_callback'
            }
          }
        },
        callback: [
          {
            key: '',
            name: 'onResume_callback',
            feedback: 'forever'
          }
        ]
      },
      android: {
        methodName: 'xySendPageInfoToAPP',
        params: {
          value: {
            pagxyethods: {
              webviewGoBack: 'onResume_callback'
            }
          }
        },
        callback: [
          {
            key: '',
            name: 'onResume_callback',
            feedback: 'forever'
          }
        ]
      }
    },
    xxxxxxxxxx: {
      android: {
        methodName: 'xySendPageInfoToAPP',
        params: {
          value: {
            pagxyethods: {
              webviewGoBack: 'onResume_callback'
            }
          }
        },
        callback: [
          {
            key: '',
            name: 'onResume_callback',
            feedback: 'forever'
          }
        ]
      }
    }
  }
}

export default BRIDGEAPI
