import React from 'react'

import { ICON_CMD, SENIOR_AMOUNT_THRESHOLD } from '@config'
import { Button } from '@components/Buttons'

import {
  Wrapper,
  PlanTitle,
  TitleDesc,
  PlanDesc,
  PurchaseButton,
  DescLine,
  MoreLink,
  BadPrice,
  GoodPrice,
  BadgeWrapper,
  BadgeIcon,
} from './styles/xxx_plan'

import { seniorOnPay } from './logic'

const SeniorPlan = ({ joined }) => {
  if (joined) {
    return (
      <Wrapper>
        <PlanTitle>
          <div>CPS会员</div>
        </PlanTitle>
        <PlanDesc>
          <DescLine>
            <GoodPrice>您已成为 CPS 会员 </GoodPrice>
          </DescLine>
          <DescLine>
            如果有新 问题/需求 请随时联系， 您的反馈会被优先处理
          </DescLine>
        </PlanDesc>
        <BadgeWrapper>
          <BadgeIcon src={`${ICON_CMD}/member_senior.svg`} />
        </BadgeWrapper>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <PlanTitle>
        <div>CPS会员</div>
        <TitleDesc>(推荐)</TitleDesc>
      </PlanTitle>
      <PlanDesc>
        <DescLine>
          <BadPrice>￥102.4</BadPrice> /{' '}
          <GoodPrice>￥{SENIOR_AMOUNT_THRESHOLD} </GoodPrice>
          无限期有效
        </DescLine>
        <DescLine>将获得区别于免费用户的 10+ 项功能/服务</DescLine>
        <DescLine>
          <MoreLink>更多CPS会员详情..</MoreLink>
        </DescLine>
      </PlanDesc>
      <PurchaseButton>
        <Button type="primary" ghost onClick={seniorOnPay}>
          成为 CPS会员
        </Button>
      </PurchaseButton>
    </Wrapper>
  )
}

export default React.memo(SeniorPlan)
