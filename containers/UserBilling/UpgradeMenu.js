import React from 'react'
import dynamic from 'next/dynamic'
import R from 'ramda'

import { SectionLabel } from '../../components'

import { ICON_CMD } from '../../config'

import SeniorPlan from './SeniorPlan'
import SponsorPlan from './SponsorPlan'
import GirlsCodeTooPlan from './GirlsCodeTooPlan'
import TipingDevsPlan from './TipingDevsPlan'

import { PlanDivider } from './styles/upgrade_menu'

const DynamicGirlVerifier = dynamic({
  loader: () => import('../GirlVerifier'),
})

const labelText = isSeniorMember => {
  if (isSeniorMember)
    return '您的资助已被用于 coderplanets.com 的发展中，感谢参与！'
  return '当前账户为免费账户，欢迎升级账户以获得更好的体验/服务, 同时支持社区的发展。'
}

const UpgradeMenu = ({ achievement }) => {
  // more safe, should mv logic to server, fix later
  const userAchievement = R.merge(
    {
      seniorMember: false,
      donateMember: false,
      sponsorMember: false,
    },
    achievement
  )

  return (
    <React.Fragment>
      <DynamicGirlVerifier />
      <SectionLabel
        title="账单概况"
        iconSrc={`${ICON_CMD}/bill.svg`}
        desc={labelText(userAchievement.seniorMember)}
      />

      <SeniorPlan joined={userAchievement.seniorMember} />
      <PlanDivider />
      <SponsorPlan joined={userAchievement.sponsorMember} />
      <PlanDivider />
      <GirlsCodeTooPlan joined={userAchievement.seniorMember} />
      <PlanDivider hide={userAchievement.seniorMember} />
      <TipingDevsPlan />
    </React.Fragment>
  )
}

export default UpgradeMenu
