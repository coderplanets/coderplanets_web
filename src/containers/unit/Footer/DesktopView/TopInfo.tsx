import React from 'react'

import {
  Wrapper,
  SiteInfo,
  SiteTitle,
  SiteDesc,
  SiteLogo,
} from '../styles/desktop_view/top_info'

type TProps = {
  title?: string
}

const DigestView: React.FC<TProps> = ({ title = 'CoderPlanets' }) => {
  return (
    <Wrapper>
      <SiteInfo>
        <SiteLogo />
      </SiteInfo>
      <SiteTitle>{title}</SiteTitle>
      <SiteDesc>关于</SiteDesc>
      <SiteDesc>创建社区</SiteDesc>
      <SiteDesc>加入我们</SiteDesc>
      <SiteDesc>OpenSource</SiteDesc>
      <SiteDesc>特别感谢</SiteDesc>
    </Wrapper>
  )
}

export default React.memo(DigestView)
