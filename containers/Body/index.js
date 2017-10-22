/*
*
* Body
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import keydown from 'react-keydown'

// import Link from 'next/link'
// import styled from 'styled-components'

import { makeDebugger } from '../../utils/functions'
import * as logic from './logic'

import Body from './Body'
import Theme from './Theme'
import Home from './Home'
import Feature from './Feature'
import I18n from './I18n'
import GithubRestExample from './GithubRestExample'
import CmdExample from './CmdExample'

const debug = makeDebugger('C:Body')

const IntroPage = ({ route, doraemonVisable, curTheme, themeKeys }) => {
  switch (route.query.name) {
    case 'index':
      return <Home />
    case 'feature':
      return <Feature />
    case 'theme':
      return <Theme curTheme={curTheme} themeKeys={themeKeys} />
    case 'i18n':
      return <I18n />
    case 'example':
      return <GithubRestExample />
    case 'cmdpanel':
      return <CmdExample doraemonVisable={doraemonVisable} />
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

  /* eslint-disable class-methods-use-this */
  @keydown(['ctrl+p'])
  openDoraemon() {
    logic.openDoraemon()
    // e.preventDefault()
  }
  /* eslint-enable class-methods-use-this */

  render() {
    // debug('cur route:', this.props.route)
    const { route } = this.props
    const { curTheme, doraemonVisable, themeKeys } = this.props.body

    return (
      <Body id="whereCallShowDoraemon">
        <IntroPage
          curTheme={curTheme}
          themeKeys={themeKeys}
          doraemonVisable={doraemonVisable}
          route={route}
        />
      </Body>
    )
  }
}

export default inject(selector)(observer(ContentContainer))
