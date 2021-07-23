import { SITE_SHARE_TYPE } from '../constant'

//
export const getInfoPanelHeight = (type: string): string => {
  switch (type) {
    case SITE_SHARE_TYPE.WECHAT: {
      return '160px'
    }

    case SITE_SHARE_TYPE.EMBED: {
      return '160px'
    }

    default: {
      return '110px'
    }
  }
}

export const holder = 1
