/*
*
* Banner
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import {
  makeDebugger,
  storeSelector,
  getSVGIconPath,
} from '../../utils/functions'

import * as logic from './logic'

import { Banner, BannerLogo } from './styles'

const debug = makeDebugger('C:Banner')

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
      </Banner>
    )
  }
}

export default inject(storeSelector('banner'))(observer(BannerContainer))
