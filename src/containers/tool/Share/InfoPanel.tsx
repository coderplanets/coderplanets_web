import { FC, memo } from 'react'

import LinkBoard from './LinkBoard'
import IFrameBoard from './IFrameBoard'
import WechatBoard from './WechatBoard'

import { Wrapper } from './styles/info_panel'

const InfoPanel: FC = () => {
  return (
    <Wrapper>
      {/* <LinkBoard /> */}
      {/* <WechatBoard /> */}
      <IFrameBoard />
    </Wrapper>
  )
}

export default memo(InfoPanel)
