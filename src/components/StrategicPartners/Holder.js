import React from 'react'

import { ICON_CMD } from '@/config'

import {
  Wrapper,
  BannerWrapper,
  Logo,
  PartnerInfo,
  Title,
  Desc,
} from './styles/holder'

const Holder = () => (
  <Wrapper>
    <BannerWrapper>
      <PartnerInfo>
        <Title>空缺中</Title>
        <Desc>联系我们</Desc>
      </PartnerInfo>
      <Logo src={`${ICON_CMD}/for_sale.svg`} />
    </BannerWrapper>
  </Wrapper>
)

export default React.memo(Holder)
