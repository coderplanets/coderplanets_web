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
  Banner,
  TopHalf,
  Title,
  Desc,
  LeftPadding,
  RightPadding,
  CommunityLogo,
  CommunityInfo,
  TabberWrapper,
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

const renderTabber = (mainQuery, curCommunity) => {
  if (mainQuery === 'cheatsheet') {
    return <div />
  }
  return (
    <TabberWrapper>
      <LeftPadding />
      <Tabber source={curCommunity.body} onChange={onChange} />
    </TabberWrapper>
  )
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

const NumbersInfo = () => {
  return (
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
}

class BannerContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.banner)
  }

  render() {
    const { banner } = this.props
    const { curRoute, curCommunity } = banner
    const { mainQuery } = curRoute

    // debug('curPath: ', curPath)
    // debug('curRoute: ', curRoute)
    // debug('curCommunity2: ', curCommunity)

    return (
      <Banner>
        <TopHalf>
          <LeftPadding />
          <CommunityBrief curCommunity={curCommunity} curRoute={curRoute} />
          <NumbersInfo />
          <RightPadding />
        </TopHalf>

        {renderTabber(mainQuery, curCommunity)}
      </Banner>
    )
  }
}

export default inject(storeSelector('banner'))(observer(BannerContainer))
