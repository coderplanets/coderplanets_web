import React from 'react'

import { ICON_BASE } from '@config'
import { Wrapper, QRCodePic, Title, DescWrapper } from './styles/footer_wechat'

const FooterWechat = () => {
  return (
    <Wrapper>
      <QRCodePic src={`${ICON_BASE}/cps_wechat_group.png`} />
      <DescWrapper>
        <Title>温馨提示：</Title>
        <p>
          感谢你对 coderplanets 的关注，本群内主要讨论 coderplanets
          项目的产品设计，技术细节以及相关问题的反馈。
          欢迎感兴趣的朋友加入讨论。本群谢绝广告推广，为保证活跃度会不定期清人，望谅解。如遇入群上限请先加
          vx: mydearxym。
        </p>
      </DescWrapper>
    </Wrapper>
  )
}

export default React.memo(FooterWechat)
