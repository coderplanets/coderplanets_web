/*
 *
 * UserBilling
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ICON_CMD } from '../../config'

import { SectionLabel, Button } from '../../components'
import {
  Wrapper,
  PlanWrapper,
  PlanDivider,
  PlanTitle,
  PlanDesc,
  PurchaseButton,
  DescLine,
  BadPrice,
  GoodPrice,
} from './styles'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserBilling')
/* eslint-enable no-unused-vars */

class UserBillingContainer extends React.Component {
  componentWillMount() {
    const { userBilling } = this.props
    logic.init(userBilling)
  }

  render() {
    return (
      <Wrapper>
        <SectionLabel
          title="账单概况"
          iconSrc={`${ICON_CMD}/bill.svg`}
          desc="当前账户为免费账户，欢迎升级账户以获得更好的体验/服务, 同时支持社区的发展。"
        />

        <PlanWrapper>
          <PlanTitle>高级用户</PlanTitle>
          <PlanDesc>
            <DescLine>
              <BadPrice>￥102.4</BadPrice> / <GoodPrice>￥69 </GoodPrice>
              无限期有效
            </DescLine>
            <DescLine>将获得区别于免费用户的 10+ 项功能/服务</DescLine>
          </PlanDesc>
          <PurchaseButton>
            <Button type="primary" ghost onClick={logic.upgradeHepler}>
              升级成高级用户
            </Button>
          </PurchaseButton>
        </PlanWrapper>
        <PlanDivider />
        <PlanWrapper>
          <PlanTitle>赞助商</PlanTitle>
          <PlanDesc>
            <DescLine>
              <BadPrice>￥2999起</BadPrice> / <GoodPrice>￥1999起 </GoodPrice>
              无限期有效
            </DescLine>
            <DescLine>高级用户所有功能，以及企业/产品推广等</DescLine>
          </PlanDesc>
          <PurchaseButton>
            <Button type="primary" ghost onClick={logic.upgradeHepler}>
              升级成赞助商
            </Button>
          </PurchaseButton>
        </PlanWrapper>
        <PlanDivider />
        <PlanWrapper>
          <PlanTitle>打赏用户</PlanTitle>
          <PlanDesc>
            <DescLine>
              <BadPrice>￥15</BadPrice> / <GoodPrice>￥10.24 </GoodPrice>
              无限期有效
            </DescLine>
            <DescLine>打赏任意金额可解锁全部主题</DescLine>
          </PlanDesc>
          <PurchaseButton>
            <Button type="primary" ghost onClick={logic.sponsorHepler}>
              打赏一下
            </Button>
          </PurchaseButton>
        </PlanWrapper>

        <br />
        <SectionLabel
          title="付费历史"
          iconSrc={`${ICON_CMD}/bill_history.svg`}
          desc="没有查询到付费记录, 欢迎升级体验。"
        />
      </Wrapper>
    )
  }
}

export default inject(storePlug('userBilling'))(observer(UserBillingContainer))
