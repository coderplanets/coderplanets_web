import React from 'react'
import keydown from 'react-keydown'

import { HorizontalCenter } from '../../components/BaseStyled'
import Doraemon from '../../containers/Doraemon'

export default class CmdPanelExample extends React.Component {
  /* eslint-disable class-methods-use-this */
  @keydown(['ctrl+p'])
  up(e) {
    // logic.navUpSuggestion()
    console.log('show the fuck panel')
    e.preventDefault()
  }

  /* eslint-enable class-methods-use-this */

  render() {
    return (
      <HorizontalCenter>
        <Doraemon />
      </HorizontalCenter>
    )
  }
}
