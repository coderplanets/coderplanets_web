/*
 *
 * ErrorBox
 *
 */

import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import Modal from '@/widgets/Modal'
import useShortcut from '@/hooks/useShortcut'

import type { TStore } from './store'

import Header from './Header'
import Details from './Details'
import Footer from './Footer'

import { Wrapper } from './styles'
import { useInit, onClose } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ErrorBox')

type TProps = {
  errorBox?: TStore
}

const ErrorBoxContainer: FC<TProps> = ({ errorBox: store }) => {
  useInit(store)
  useShortcut(['Control+c', 'Control+g', 'Escape'], onClose)

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
  } = store

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

export default bond(ErrorBoxContainer, 'errorBox') as FC<TProps>
