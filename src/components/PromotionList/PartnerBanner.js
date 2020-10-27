import React from 'react'

import { ICON_CMD } from '@/config'
import {
  Wrapper,
  ItemWrapper,
  PartnerInfo,
  Logo,
  Title,
  Desc,
} from './styles/partner_banner'

const PartnerBanner = () => (
  <Wrapper>
    <ItemWrapper>
      <Logo src={`${ICON_CMD}/test_ad.jpg`} />
      <PartnerInfo>
        <Title>拉勾网</Title>
        <Desc>一个找工作的网站</Desc>
      </PartnerInfo>
    </ItemWrapper>

    <ItemWrapper>
      <Logo src={`${ICON_CMD}/test_ad.jpg`} />
      <PartnerInfo>
        <Title>xaudiopro</Title>
        <Desc>音频剪辑，格式转换</Desc>
      </PartnerInfo>
    </ItemWrapper>
  </Wrapper>
)

export default React.memo(PartnerBanner)
