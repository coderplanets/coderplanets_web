/*
 *
 * ErrorBox
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Modal from '../../components/Modal'
import Header from './Header'
import Details from './Details'
import Footer from './Footer'

import { Wrapper } from './styles'

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
      <Modal width="520px" show mode="error" showCloseBtn onClose={console.log}>
        <Wrapper>
          <Header />
          <br />
          <Details />
          <Footer />
        </Wrapper>
      </Modal>
    )
  }
}

export default inject(storePlug('errorBox'))(observer(ErrorBoxContainer))
