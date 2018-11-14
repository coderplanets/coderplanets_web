import React from 'react'
import dynamic from 'next/dynamic'

import { SectionLabel, Button } from '../../components'

import { ICON_CMD } from '../../config'

import {
  PlanWrapper,
  PlanDivider,
  PlanTitle,
  GirlTitle,
  TitleDesc,
  PlanDesc,
  PurchaseButton,
  PinkButton,
  DescLine,
  MoreLink,
  BadPrice,
  GoodPrice,
} from './styles/upgrade_menu'

import { upgradeHepler, sponsorHepler, girlVerifier } from './logic'

const DynamicGirlVerifier = dynamic({
  loader: () => import('../GirlVerifier'),
})

const UpgradeMenu = () => (
  <React.Fragment>
    <DynamicGirlVerifier />
    <SectionLabel
      title="账单概况"
      iconSrc={`${ICON_CMD}/bill.svg`}
      desc="当前账户为免费账户，欢迎升级账户以获得更好的体验/服务, 同时支持社区的发展。"
    />

    <PlanWrapper>
      <PlanTitle>
        <div>付费用户</div>
        <TitleDesc>(推荐)</TitleDesc>
      </PlanTitle>
      <PlanDesc>
        <DescLine>
          <BadPrice>￥102.4</BadPrice> / <GoodPrice>￥69 </GoodPrice>
          无限期有效
        </DescLine>
        <DescLine>将获得区别于免费用户的 10+ 项功能/服务</DescLine>
        <DescLine>
          <MoreLink>更多付费用户详情..</MoreLink>
        </DescLine>
      </PlanDesc>
      <PurchaseButton>
        <Button type="primary" ghost onClick={upgradeHepler}>
          升级付费用户
        </Button>
      </PurchaseButton>
    </PlanWrapper>
    <PlanDivider />
    <PlanWrapper>
      <PlanTitle>赞助商</PlanTitle>
      <PlanDesc>
        <DescLine>
          <BadPrice>￥2999起</BadPrice> / <GoodPrice>￥1999起 </GoodPrice>
          每年
        </DescLine>
        <DescLine>付费用户所有功能，每年的企业/产品推广等</DescLine>
        <DescLine>
          <MoreLink>更多赞助商服务详情..</MoreLink>
        </DescLine>
      </PlanDesc>
      <PurchaseButton>
        <Button type="primary" ghost onClick={upgradeHepler}>
          升级赞助商
        </Button>
      </PurchaseButton>
    </PlanWrapper>
    <PlanDivider />
    <PlanWrapper>
      <GirlTitle>
        <div>我是程序媛</div>
        <TitleDesc pink>(限女生)</TitleDesc>
      </GirlTitle>
      <PlanDesc>
        <DescLine green>￥0 永久免费</DescLine>
        <DescLine>付费用户的所有功能，以及个人项目推广等</DescLine>
        <DescLine>
          <MoreLink>程序媛用户细则...</MoreLink>
        </DescLine>
      </PlanDesc>
      <PurchaseButton onClick={girlVerifier}>
        <PinkButton>无理由升级</PinkButton>
      </PurchaseButton>
    </PlanWrapper>
    <PlanDivider />
    <PlanWrapper>
      <PlanTitle>打赏用户</PlanTitle>
      <PlanDesc>
        <DescLine>
          <BadPrice>￥15</BadPrice> / <GoodPrice>￥10.24 </GoodPrice>
          每年
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
    </PlanWrapper>
  </React.Fragment>
)

export default UpgradeMenu
