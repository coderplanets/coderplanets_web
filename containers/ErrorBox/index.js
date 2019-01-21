/*
 *
 * ErrorBox
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Modal from 'components/Modal'
import { makeDebugger, storePlug } from 'utils'
import Header from './Header'
import Details from './Details'
import Footer from './Footer'

import { Wrapper } from './styles'

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
    const { errorBox } = this.props
    const {
      show,
      type,
      operation,
      path,
      timeoutError,
      graphqlType,
      changesetErrorData,
      parseErrorData,
      customErrorData,
    } = errorBox

    return (
      <Modal
        width="520px"
        show={show}
        mode="error"
        showCloseBtn
        onClose={logic.onClose}
      >
        <Wrapper>
          <Header
            type={type}
            operation={operation}
            path={path}
            graphqlType={graphqlType}
          />
          <br />
          <Details
            type={type}
            timeoutError={timeoutError}
            graphqlType={graphqlType}
            changesetError={changesetErrorData}
            parseError={parseErrorData}
            customError={customErrorData}
          />
          <Footer />
        </Wrapper>
      </Modal>
    )
  }
}

export default inject(storePlug('errorBox'))(observer(ErrorBoxContainer))
