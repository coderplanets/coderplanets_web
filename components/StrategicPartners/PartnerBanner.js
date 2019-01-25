import React from 'react'

import { ICON_CMD } from 'config'
import {
  Wrapper,
  BannerWrapper,
  PartnerInfo,
  Logo,
  Title,
  Desc,
} from './styles/partner_banner'

const PartnerBanner = () => (
  <Wrapper>
    <BannerWrapper>
      <Logo src={`${ICON_CMD}/test_ad.jpg`} />
      <PartnerInfo>
        <Title>拉勾网</Title>
        <Desc>一个找工作的网站</Desc>
      </PartnerInfo>
    </BannerWrapper>

    <BannerWrapper>
      <Logo src={`${ICON_CMD}/test_ad.jpg`} />
      <PartnerInfo>
        <Title>拉勾网</Title>
        <Desc>一个找工作的网站</Desc>
      </PartnerInfo>
    </BannerWrapper>
  </Wrapper>
)

export default PartnerBanner
