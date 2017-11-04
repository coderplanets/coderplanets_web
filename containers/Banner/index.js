/*
*
* Banner
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import { Row, Col } from 'antd'

import Tabber from '../../components/Tabber'

import {
  makeDebugger,
  storeSelector,
  getSVGIconPath,
} from '../../utils/functions'

import * as logic from './logic'

import { Banner, Title, Desc, BannerLogo, TabberWrapper } from './styles'

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
      <Tabber source={curCommunity.body} onChange={onChange} />
    </TabberWrapper>
  )
}

const BannerBrief = ({ curCommunity, curRoute }) => {
  const defaultIcon = 'js'
  const { header } = curCommunity
  const { title, desc } = header
  const { mainQuery } = curRoute
  // TODO: move logic to logic
  const iconKey = mainQuery.length > 1 ? mainQuery : defaultIcon

  return (
    <Row>
      <Col span={2}>
        <BannerLogo path={getSVGIconPath(iconKey)} />
      </Col>
      <Col span={4}>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Col>
    </Row>
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
        <BannerBrief curCommunity={curCommunity} curRoute={curRoute} />
        {renderTabber(mainQuery, curCommunity)}
      </Banner>
    )
  }
}

export default inject(storeSelector('banner'))(observer(BannerContainer))
