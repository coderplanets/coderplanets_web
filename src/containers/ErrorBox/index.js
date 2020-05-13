/*
 *
 * ErrorBox
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'

import Modal from '@/components/Modal'
import { useShortcut } from '@/hooks'

import Header from './Header'
import Details from './Details'
import Footer from './Footer'

import { Wrapper } from './styles'
import { useInit, hide, onClose } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ErrorBox')

const ErrorBoxContainer = ({ errorBox }) => {
  useInit(errorBox)
  useShortcut(['ctrl+c', 'ctrl+g', 'esc'], hide)

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

export default connectStore(ErrorBoxContainer)
