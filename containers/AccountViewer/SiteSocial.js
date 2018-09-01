import React from 'react'

import { ICON_ASSETS } from '../../config'

import { FocusLine } from '../../components'
import NumSection from './NumSection'
import {
  Wrapper,
  LeftPart,
  RightPart,
  RightWrapper,
  NumberDivider,
  AchieveWrapper,
} from './styles/site_social'

const NumbersDashboard = () => (
  <RightWrapper>
    <NumSection title="声望" num={568} />
    <NumberDivider />
    <NumSection title="关注者" num={230} />
    <NumberDivider />
    <NumSection title="关注中" num={100} />
  </RightWrapper>
)

const AcieveDashboard = () => (
  <AchieveWrapper>
    <FocusLine
      before="共获得"
      iconSrc={`${ICON_ASSETS}/cmd/likev2.svg`}
      focus={18}
      after="赞"
    />
    <FocusLine
      before="创作的内容被收藏"
      iconSrc={`${ICON_ASSETS}/cmd/favoritev2.svg`}
      focus={187}
      after="次"
    />
  </AchieveWrapper>
)

/* const SiteSocial = ({user}) => { */
const SiteSocial = () => {
  return (
    <Wrapper>
      <LeftPart>
        <NumbersDashboard />
      </LeftPart>
      <RightPart>
        <AcieveDashboard />
      </RightPart>
    </Wrapper>
  )
}

export default SiteSocial
