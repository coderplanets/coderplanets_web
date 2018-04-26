import React from 'react'

import Tabber from '../../components/Tabber'

import {
  BannerContainer,
  TabberWrapper,
  BannerContentWrapper,
} from './styles/communities_root_banner'

const communitiesTaber = [
  {
    title: '编程语言',
    raw: 'languages',
  },
  {
    title: 'web 框架',
    raw: 'web frameworks',
  },
  {
    title: '后端框架',
    raw: 'web frameworks',
  },
  {
    title: '移动端',
    raw: 'phone frameworks',
  },
  {
    title: '设计',
    raw: 'design',
  },
  {
    title: '人工智能',
    raw: 'ai frameworks',
  },
  {
    title: '其他',
    raw: 'others',
  },
]

const CommunitiesRootBanner = ({ onChange }) => (
  <BannerContainer>
    <BannerContentWrapper>
      <h2>this is all communities</h2>
      <TabberWrapper>
        <Tabber source={communitiesTaber} onChange={onChange} />
      </TabberWrapper>
    </BannerContentWrapper>
  </BannerContainer>
)

export default CommunitiesRootBanner
