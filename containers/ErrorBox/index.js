/*
 *
 * ErrorBox
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Modal from '../../components/Modal'
// import { } from './styles'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable-next-line */
const debug = makeDebugger('C:ErrorBox')

class ErrorBoxContainer extends React.Component {
  componentDidMount() {
    const { errorBox } = this.props
    logic.init(errorBox)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    return (
      <Modal width="600px" show showCloseBtn onClose={console.log}>
        <div>the fucking error messge</div>
      </Modal>
    )
  }
}

export default inject(storePlug('errorBox'))(observer(ErrorBoxContainer))
