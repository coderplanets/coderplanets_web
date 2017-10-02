/*
*
* Body
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'
// import styled from 'styled-components'

import { makeDebugger } from '../../utils/debug'
import * as logic from './logic'

import Body from './Body'
import Theme from './Theme'
import Home from './Home'
import Feature from './Feature'
import I18n from './I18n'
import GithubRestExample from './GithubRestExample'
import CmdExample from './CmdExample'

const debug = makeDebugger('C:Body')

const IntroPage = props => {
  const { route } = props

  switch (route.query.name) {
    case 'index':
      return <Home />
    case 'feature':
      return <Feature />
    case 'theme':
      return <Theme curTheme={props.body.themeName} />
    case 'i18n':
      return <I18n />
    case 'example':
      return <GithubRestExample />
    case 'cmdpanel':
      return <CmdExample />
    case 'graphql':
      return <h2>graphql</h2>
    default:
      return <Home />
  }
}

const selector = ({ store }) => ({
  body: store.body, // TODO
})

class ContentContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.body)
    debug('init')
  }

  render() {
    // debug('cur route:', this.props.route)

    return (
      <Body>
        <IntroPage {...this.props} key={this.props.body.themeName} />
      </Body>
    )
  }
}

export default inject(selector)(observer(ContentContainer))
