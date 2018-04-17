/*
*
* Banner
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

import Tabber from '../../components/Tabber'

import { makeDebugger, storeSelector, getSVGIconPath } from '../../utils'

import * as logic from './logic'

import {
  CommunityBanner,
  CheatsheetBanner,
  Title,
  Desc,
  CommunityLogo,
  CommunityInfo,
  TabberWrapper,
  CheatsheetWrapper,
  CheatsheetTitle,
  CheatsheetDesc,
  BannerContentWrapper,
  CommunityWrapper,
  NumbersWrapper,
  NumberSection,
  NumberDivider,
  NumberTitle,
  NumberItem,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Banner')
/* eslint-enable no-unused-vars */

const onChange = e => {
  logic.tabberChange(e)
}

const CommunityBrief = ({ curCommunity, curRoute }) => {
  const defaultIcon = 'js'
  const { header } = curCommunity
  const { title, desc } = header
  const { mainQuery } = curRoute
  // TODO: move logic to logic
  const iconKey = mainQuery.length > 1 ? mainQuery : defaultIcon

  return (
    <CommunityWrapper>
      <CommunityLogo path={getSVGIconPath(iconKey)} />
      <CommunityInfo>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </CommunityInfo>
    </CommunityWrapper>
  )
}

const NumbersInfo = () => (
  <NumbersWrapper>
    <NumberSection>
      <NumberTitle>成员</NumberTitle>
      <NumberItem>18</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>内容</NumberTitle>
      <NumberItem>184</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>编辑</NumberTitle>
      <NumberItem>5</NumberItem>
    </NumberSection>
  </NumbersWrapper>
)

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
const BannerContent = ({ banner, curRoute }) => {
  const { mainQuery } = curRoute
  // console.log('mainQuery --> ', mainQuery)
  switch (mainQuery) {
    case 'cheatsheet': {
      return (
        <CheatsheetBanner>
          <CheatsheetWrapper>
            <CheatsheetTitle>cheatsheet</CheatsheetTitle>
            <CheatsheetDesc>所有的cheeatsheet都在这里了</CheatsheetDesc>
          </CheatsheetWrapper>
        </CheatsheetBanner>
      )
    }
    case 'communities': {
      return (
        <CommunityBanner>
          <BannerContentWrapper>
            <h2>this is all communities</h2>
            <TabberWrapper>
              <Tabber source={communitiesTaber} onChange={onChange} />
            </TabberWrapper>
          </BannerContentWrapper>
        </CommunityBanner>
      )
    }
    default:
      return (
        <CommunityBanner>
          <CommonCommunity banner={banner} />
        </CommunityBanner>
      )
  }
}

const CommonCommunity = ({ banner }) => {
  const { curRoute, curCommunity } = banner

  debug('CommonCommunity banner', banner.curCommunity)

  return (
    <BannerContentWrapper>
      <CommunityBrief curCommunity={curCommunity} curRoute={curRoute} />
      <NumbersInfo />
      <TabberWrapper>
        <Tabber source={curCommunity.threads} onChange={onChange} />
      </TabberWrapper>
    </BannerContentWrapper>
  )
}

class BannerContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.banner)
  }

  render() {
    const { banner } = this.props
    const { curRoute } = banner
    //     const { mainQuery } = curRoute
    debug('curCommunity', banner.curCommunity)

    return <BannerContent curRoute={curRoute} banner={banner} />
  }
}

export default inject(storeSelector('banner'))(observer(BannerContainer))
