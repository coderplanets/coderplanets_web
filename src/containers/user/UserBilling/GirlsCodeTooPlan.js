import React from 'react'

// import { ICON_CMD } from '@/config'
// import { Wrapper } from './styles'
import {
  Wrapper,
  GirlTitle,
  TitleDesc,
  PlanDesc,
  PurchaseButton,
  PinkButton,
  DescLine,
} from './styles/xxx_plan'

import { girlVerifier } from './logic'

const GirlsCodeTooPlan = ({ joined }) => {
  if (joined) return null

  return (
    <Wrapper>
      <GirlTitle>
        <div>我是程序媛</div>
        <TitleDesc pink>(限女生)</TitleDesc>
      </GirlTitle>
      <PlanDesc>
        <DescLine green>￥0 永久免费</DescLine>
        <DescLine>CPS会员的所有功能，以及个人项目推广等</DescLine>
      </PlanDesc>
      <PurchaseButton onClick={girlVerifier}>
        <PinkButton>无理由升级</PinkButton>
      </PurchaseButton>
    </Wrapper>
  )
}

export default React.memo(GirlsCodeTooPlan)
