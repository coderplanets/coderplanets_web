import React from 'react'
import { Button } from 'antd'

import { ICON_CMD, SPONSOR_AMOUNT_THRESHOLD } from '@config'

import {
  Wrapper,
  PlanTitle,
  PlanDesc,
  PurchaseButton,
  DescLine,
  MoreLink,
  BadPrice,
  GoodPrice,
  BadgeWrapper,
  BadgeIcon,
} from './styles/xxx_plan'

import { upgradeHepler } from './logic'

const SponsorPlan = ({ joined }) => {
  if (joined) {
    return (
      <Wrapper>
        <PlanTitle>
          <div>赞助商</div>
        </PlanTitle>
        <PlanDesc>
          <DescLine>
            <GoodPrice>您已成为 CPS 赞助商 </GoodPrice>
          </DescLine>
          <DescLine>
            如果有新 问题/意见/需求 请随时联系， 您的反馈会被优先处理
          </DescLine>
        </PlanDesc>
        <BadgeWrapper>
          <BadgeIcon src={`${ICON_CMD}/member_sponsor.svg`} />
        </BadgeWrapper>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <PlanTitle>赞助商</PlanTitle>
      <PlanDesc>
        <DescLine>
          <BadPrice>￥8999起</BadPrice> /{' '}
          <GoodPrice>￥{SPONSOR_AMOUNT_THRESHOLD}起 </GoodPrice>
          每年
        </DescLine>
        <DescLine>CPS会员所有功能，每年的企业/产品推广等</DescLine>
        <DescLine>
          <MoreLink>更多赞助商服务详情..</MoreLink>
        </DescLine>
      </PlanDesc>
      <PurchaseButton>
        <Button type="primary" ghost onClick={upgradeHepler}>
          升级成赞助商
        </Button>
      </PurchaseButton>
    </Wrapper>
  )
}

export default SponsorPlan
