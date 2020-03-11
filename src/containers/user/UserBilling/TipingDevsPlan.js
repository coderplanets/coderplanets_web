import React from 'react'
import { Button } from 'antd'

import {
  Wrapper,
  PlanTitle,
  PlanDesc,
  PurchaseButton,
  DescLine,
  MoreLink,
  BadPrice,
  GoodPrice,
} from './styles/xxx_plan'

import { sponsorHepler } from './logic'

const TipingDevsPlan = () => (
  <Wrapper>
    <PlanTitle>打赏开发者</PlanTitle>
    <PlanDesc>
      <DescLine>
        <BadPrice>￥15</BadPrice> / <GoodPrice>￥10.24 </GoodPrice>起
      </DescLine>
      <DescLine>打赏任意金额可解锁全部主题</DescLine>
      <DescLine>
        <MoreLink>关于打赏细则...</MoreLink>
      </DescLine>
    </PlanDesc>
    <PurchaseButton>
      <Button type="primary" ghost onClick={sponsorHepler}>
        打赏一下
      </Button>
    </PurchaseButton>
  </Wrapper>
)

export default React.memo(TipingDevsPlan)
