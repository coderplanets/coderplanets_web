import React from 'react'

import { ICON_ASSETS } from '../../config'

import NumSection from './NumSection'
import {
  Wrapper,
  LeftPart,
  RightPart,
  RightWrapper,
  NumberDivider,
  AchieveWrapper,
  AchieveLine,
  AchieveText,
  AchieveIcon,
  AcheveNumber,
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
    <AchieveLine>
      <AchieveIcon src={`${ICON_ASSETS}/cmd/likev2.svg`} />
      <AchieveText>
        共获得 <AcheveNumber>18</AcheveNumber> 赞
      </AchieveText>
    </AchieveLine>
    <AchieveLine>
      <AchieveIcon src={`${ICON_ASSETS}/cmd/favoritev2.svg`} />
      <AchieveText>
        创作的内容被收藏 <AcheveNumber>222</AcheveNumber> 次
      </AchieveText>
    </AchieveLine>
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
