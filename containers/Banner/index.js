/*
*
* Banner
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import { Tabs } from 'antd'

import styled from 'styled-components'
// import Link from 'next/link'

import {
  makeDebugger,
  storeSelector,
  getSVGIconPath,
} from '../../utils/functions'

import * as logic from './logic'

import { Banner, BannerLogo } from './styles'

const debug = makeDebugger('C:Banner')

const { TabPane } = Tabs

const MTabs = styled(Tabs)`
  position: absolute;
  bottom: -17px;
  width: 80vw;
`

function callback(key) {
  console.log('callback: ', key)
}

class BannerContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.banner)
  }

  render() {
    const { banner } = this.props
    const { curUrlPath } = banner

    const defaultIcon = 'js'
    const iconKey = curUrlPath === '/' ? defaultIcon : curUrlPath

    return (
      <Banner>
        <BannerLogo path={getSVGIconPath(iconKey)} />
        <MTabs onChange={callback}>
          <TabPane tab="帖子" key="1" />
          <TabPane tab="教程" key="2" />
          <TabPane tab="用户" key="3" />
        </MTabs>
      </Banner>
    )
  }
}

export default inject(storeSelector('banner'))(observer(BannerContainer))
