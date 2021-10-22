import React, { FC, useEffect, useRef } from 'react'
import ReactPinField from 'react-pin-field'

import { ICON } from '@/config'

import Modal from '@/widgets/Modal'
import QA from './QA'

import {
  Wrapper,
  PinCodeWrapper,
  Header,
  HandIcon,
  Title,
} from '../styles/invite_box'
import { closeInviteBox } from '../logic'

type TProps = {
  testid?: string
  show: boolean
}

const InviteBox: FC<TProps> = ({ testid = 'membership-invite-box', show }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (show && ref) {
      ref.current[0].focus()
    }
  }, [show, ref])

  return (
    <Modal
      width="420px"
      show={show}
      onClose={() => closeInviteBox()}
      showCloseBtn
    >
      <Wrapper testid={testid}>
        <Header>
          <HandIcon src={`${ICON}/shape/handshake.svg`} />
          <Title>朋友码</Title>
        </Header>
        <PinCodeWrapper>
          <ReactPinField
            ref={ref}
            length={6}
            onChange={(v) => console.log('v: ', v)}
          />
        </PinCodeWrapper>
        <QA />
      </Wrapper>
    </Modal>
  )
}

export default InviteBox
