import React, { FC } from 'react'
import ReactPinField from 'react-pin-field'

import Modal from '@/components/Modal'

import { Wrapper, PinCodeWrapper, Title } from '../styles/invite_box'

import { closeInviteBox } from '../logic'

type TProps = {
  testid?: string
  show: boolean
}

const InviteBox: FC<TProps> = ({ testid = 'membership-invite-box', show }) => {
  return (
    <Modal
      width="420px"
      show={show}
      onClose={() => closeInviteBox()}
      showCloseBtn
    >
      <Wrapper testid={testid}>
        <Title>会员邀请码</Title>
        <PinCodeWrapper>
          <ReactPinField />
        </PinCodeWrapper>
      </Wrapper>
    </Modal>
  )
}

export default InviteBox
