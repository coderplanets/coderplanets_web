/*
*
* BodyLayout
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import keydown from 'react-keydown'

// import Link from 'next/link'

import { storeSelector } from '../../utils'

import Body from './styles'
import * as logic from './logic'

class BodyLayoutContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.bodylayout)
  }

  /* eslint-disable class-methods-use-this */
  @keydown(['ctrl+p'])
  openDoraemon() {
    // debug('openDoraemon')
    logic.openDoraemon()
  }
  /* eslint-enable class-methods-use-this */

  render() {
    const { sidebarPin } = this.props.bodylayout
    return <Body sidebarPin={sidebarPin}>{this.props.children}</Body>
  }
}

BodyLayoutContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  bodylayout: PropTypes.object.isRequired,
}

BodyLayoutContainer.defaultProps = {
  children: <div />,
}

export default inject(storeSelector('bodylayout'))(
  observer(BodyLayoutContainer)
)
