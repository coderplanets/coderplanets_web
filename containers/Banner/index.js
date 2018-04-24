/*
 *
 * Banner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Tabber from '../../components/Tabber'

import { DEFAULT_ICON } from '../../config/assets'
import { makeDebugger, storeSelector, prettyNum } from '../../utils'

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

const CommunityBrief = ({ content }) => {
  return (
    <CommunityWrapper>
      {content.logo ? (
        <CommunityLogo path={content.logo || DEFAULT_ICON} />
      ) : (
        <div />
      )}
      <CommunityInfo>
        <Title>{content.title}</Title>
        <Desc>{content.desc}</Desc>
      </CommunityInfo>
    </CommunityWrapper>
  )
}

const NumbersInfo = ({
  content: { subscribersCount, editorsCount, postsCount },
}) => (
  <NumbersWrapper>
    <NumberSection>
      <NumberTitle>关注</NumberTitle>
      <NumberItem>{prettyNum(subscribersCount)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>内容</NumberTitle>
      <NumberItem>{prettyNum(postsCount)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>编辑</NumberTitle>
      <NumberItem>{prettyNum(editorsCount)}</NumberItem>
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

const BannerContent = ({ detail: { type, content } }) => {
  console.log('BannerContent --> ', content)
  console.log('BannerContent --> ', type)
  switch (type) {
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
          <CommonCommunity content={content} />
        </CommunityBanner>
      )
  }
}

const CommonCommunity = ({ content }) => {
  return (
    <BannerContentWrapper>
      <CommunityBrief content={content} />
      <NumbersInfo content={content} />
      <TabberWrapper>
        <Tabber source={content.threads} onChange={onChange} />
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
    const { curRoute, detail } = banner
    //     const { mainQuery } = curRoute
    debug('detail ---> ', detail)

    return <BannerContent curRoute={curRoute} banner={banner} detail={detail} />
  }
}

export default inject(storeSelector('banner'))(observer(BannerContainer))
