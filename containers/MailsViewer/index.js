/*
*
* MailsViewer
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

import { Wrapper } from './styles'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:MailsViewer')
/* eslint-enable no-unused-vars */

class MailsViewerContainer extends React.Component {
  constructor(props) {
    super(props)
    const { mailsViewer } = this.props
    logic.init(mailsViewer)
  }

  render() {
    return (
      <Wrapper>
        <h2>MailsViewer container!</h2>
        <div>impress me!</div>
      </Wrapper>
    )
  }
}

export default inject(storePlug('mailsViewer'))(observer(MailsViewerContainer))
