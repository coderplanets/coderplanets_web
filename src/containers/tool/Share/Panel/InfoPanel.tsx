import { FC, memo } from 'react'

import { SITE_SHARE_TYPE } from '../constant'

import type { TLinksData } from '../spec'

import LinkBoard from './LinkBoard'
import IFrameBoard from './IFrameBoard'
import WechatBoard from './WechatBoard'

import { Wrapper } from '../styles/panel/info_panel'

type TProps = {
  type: string
  linksData: TLinksData
}

const InfoPanel: FC<TProps> = ({ type, linksData }) => {
  switch (type) {
    case SITE_SHARE_TYPE.EMBED: {
      return (
        <Wrapper type={type}>
          <IFrameBoard />
        </Wrapper>
      )
    }
    case SITE_SHARE_TYPE.WECHAT: {
      return (
        <Wrapper type={type}>
          <WechatBoard />
        </Wrapper>
      )
    }
    default: {
      return (
        <Wrapper type={type}>
          <LinkBoard linksData={linksData} />
        </Wrapper>
      )
    }
  }
}

export default memo(InfoPanel)
