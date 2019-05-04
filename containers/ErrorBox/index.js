/*
 *
 * ErrorBox
 *
 */

import React from 'react'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'
import Hotkeys from 'react-hot-keys'

import { makeDebugger, storePlug } from 'utils'

import Modal from 'components/Modal'
import Header from './Header'
import Details from './Details'
import Footer from './Footer'

import { Wrapper } from './styles'
import { useInit, hide, onClose } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:ErrorBox')

const ErrorBoxContainer = ({ errorBox }) => {
  useInit(errorBox)

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
      onClose={onClose}
    >
      <Hotkeys keyName="ctrl+g,ctrl+c,esc" onKeyDown={hide}>
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
      </Hotkeys>
    </Modal>
  )
}

export default inject(storePlug('errorBox'))(observer(ErrorBoxContainer))
