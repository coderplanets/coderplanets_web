/*
*
* Banner
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

import Tabber from '../../components/Tabber'

import {
  makeDebugger,
  storeSelector,
  getSVGIconPath,
} from '../../utils/functions'

import * as logic from './logic'

import { Banner, BannerLogo, TabberWrapper } from './styles'

const debug = makeDebugger('C:Banner')

const onChange = e => {
  console.log('callback: ', e)
}

class BannerContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.banner)
  }

  render() {
    const { banner } = this.props
    const { curUrlPath, curCommunity } = banner

    const defaultIcon = 'js'
    const iconKey = curUrlPath === '/' ? defaultIcon : curUrlPath

    return (
      <Banner>
        <BannerLogo path={getSVGIconPath(iconKey)} />
        <TabberWrapper>
          <Tabber source={curCommunity} onChange={onChange} />
        </TabberWrapper>
      </Banner>
    )
  }
}

export default inject(storeSelector('banner'))(observer(BannerContainer))
