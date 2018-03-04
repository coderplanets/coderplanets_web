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
  CommonCommunityWrapper,
  CommunityWrapper,
  NumbersWrapper,
  NumberSection,
  NumberDivider,
  NumberTitle,
  NumberItem,
} from './styles'

const debug = makeDebugger('C:Banner')

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

  return (
    <CommonCommunityWrapper>
      <CommunityBrief curCommunity={curCommunity} curRoute={curRoute} />
      <NumbersInfo />
      <TabberWrapper>
        <Tabber source={curCommunity.body} onChange={onChange} />
      </TabberWrapper>
    </CommonCommunityWrapper>
  )
}

class BannerContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.banner)
  }

  render() {
    const { banner } = this.props
    const { curRoute } = banner
    //     const { mainQuery } = curRoute

    return <BannerContent curRoute={curRoute} banner={banner} />
  }
}

export default inject(storeSelector('banner'))(observer(BannerContainer))
