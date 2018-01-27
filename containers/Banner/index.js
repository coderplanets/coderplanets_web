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
          <RightPadding />
        </TopHalf>

        {renderTabber(mainQuery, curCommunity)}
      </Banner>
    )
  }
}

export default inject(storeSelector('banner'))(observer(BannerContainer))
