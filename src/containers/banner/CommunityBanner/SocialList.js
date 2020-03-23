import React from 'react'

import { ICON_CMD } from '@config'

import {
  Wrapper,
  SocialWrapper,
  Icon,
  VerifiedIcon,
  VerifiedText,
} from './styles/social_list'

const SocialList = () => {
  return (
    <Wrapper>
      <SocialWrapper>
        <Icon src={`${ICON_CMD}/navi/location.svg`} />
        <div>成都</div>
      </SocialWrapper>
      <SocialWrapper>
        <Icon src={`${ICON_CMD}/navi/space_in.svg`} />
        <div>官网</div>
      </SocialWrapper>
      <SocialWrapper>
        <Icon src={`${ICON_CMD}/github.svg`} />
        <div>zeit</div>
      </SocialWrapper>
      <SocialWrapper>
        <Icon src={`${ICON_CMD}/navi/twitter.svg`} />
        <div>twitter</div>
      </SocialWrapper>
      <SocialWrapper>
        <Icon src={`${ICON_CMD}/drink/zhihu.svg`} />
        <div>mydearxym</div>
      </SocialWrapper>

      <SocialWrapper>
        <VerifiedIcon src={`${ICON_CMD}/verified.svg`} />
        <VerifiedText>已认证</VerifiedText>
      </SocialWrapper>
    </Wrapper>
  )
}

export default React.memo(SocialList)
