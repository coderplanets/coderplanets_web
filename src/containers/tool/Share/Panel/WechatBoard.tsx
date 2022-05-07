import { FC, memo } from 'react'
import QRCode from 'qrcode.react'

import {
  Wrapper,
  QRCodeWrapper,
  DescTitle,
  DescWrapper,
} from '../styles/panel/wechat_board'

const WechatBoard: FC = () => {
  return (
    <Wrapper>
      <QRCodeWrapper>
        <QRCode value="hello world" size={100} />
      </QRCodeWrapper>
      <DescWrapper>
        <DescTitle>分享到微信</DescTitle>
        <div>打开微信 &gt; 发现 &gt; 扫一扫</div>
        <div>即可将本文分享到微信。</div>
      </DescWrapper>
    </Wrapper>
  )
}

export default memo(WechatBoard)
