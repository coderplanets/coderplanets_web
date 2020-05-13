import React from 'react'

import { ICON_CMD } from '@/config'

import { Wrapper, SocialWrapper, Icon } from './styles/social_list'

const SocialList = () => {
  return (
    <Wrapper>
      <SocialWrapper>
        <Icon src={`${ICON_CMD}/navi/readme.svg`} />
        <div>项目介绍</div>
      </SocialWrapper>
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
    </Wrapper>
  )
}

export default React.memo(SocialList)
