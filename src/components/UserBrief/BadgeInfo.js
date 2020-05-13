import React from 'react'

import { ICON_CMD } from '@/config'

import {
  Wrapper,
  BadgeWrapper,
  BadgeIcon,
  BadgeTitle,
} from './styles/badge_info'

const BadgeInfo = ({ user: { achievement } }) => {
  const { seniorMember, donateMember, sponsorMember } = achievement

  return (
    <Wrapper>
      {seniorMember && (
        <BadgeWrapper>
          <BadgeIcon src={`${ICON_CMD}/member_senior.svg`} />
          <BadgeTitle>CPS会员</BadgeTitle>
        </BadgeWrapper>
      )}
      {donateMember && (
        <BadgeWrapper>
          <BadgeIcon src={`${ICON_CMD}/member_donor.svg`} />
          <BadgeTitle>热心打赏</BadgeTitle>
        </BadgeWrapper>
      )}
      {sponsorMember && (
        <BadgeWrapper>
          <BadgeIcon src={`${ICON_CMD}/member_sponsor.svg`} />
          <BadgeTitle>赞助商</BadgeTitle>
        </BadgeWrapper>
      )}
    </Wrapper>
  )
}

export default React.memo(BadgeInfo)
