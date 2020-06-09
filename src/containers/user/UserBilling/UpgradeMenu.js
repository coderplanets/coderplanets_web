import React from 'react'
import dynamic from 'next/dynamic'

import SectionLabel from '@/components/SectionLabel'

import { ICON_CMD } from '@/config'

import SeniorPlan from './SeniorPlan'
import SponsorPlan from './SponsorPlan'
import GirlsCodeTooPlan from './GirlsCodeTooPlan'
import TipsForDeveloperPlan from './TipsForDeveloperPlan'

import { PlanDivider } from './styles/upgrade_menu'

const DynamicGirlVerifier = dynamic({
  loader: () => import('@/containers/GirlVerifier'),
})

const labelText = (isSeniorMember) => {
  if (isSeniorMember) {
    return '您的资助已被用于 coderplanets.com 的发展中，感谢参与！'
  }
  return '当前账户为免费账户，欢迎升级账户以获得更好的体验/服务, 同时支持社区的发展。'
}

const UpgradeMenu = ({ achievement }) => (
  <React.Fragment>
    <DynamicGirlVerifier />
    <SectionLabel
      title="账单概况"
      iconSrc={`${ICON_CMD}/bill.svg`}
      desc={labelText(achievement.seniorMember)}
    />

    <SeniorPlan joined={achievement.seniorMember} />
    <PlanDivider />
    <SponsorPlan joined={achievement.sponsorMember} />
    <PlanDivider />
    <GirlsCodeTooPlan joined={achievement.seniorMember} />
    <PlanDivider hide={achievement.seniorMember} />
    <TipsForDeveloperPlan />
  </React.Fragment>
)

export default React.memo(UpgradeMenu)
