//

/*
 *
 * JoinModal
 *
 */

import React from 'react'
import T from 'prop-types'

import { connectStore, buildLog } from '@/utils'

import Modal from '@/components/Modal'
import FooterWechat from './FooterWechat'

import { Wrapper } from './styles'

import { useInit, onClose } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:JoinModal')

const JoinModalContainer = ({ joinModal: store }) => {
  useInit(store)

  const { show } = store

  return (
    <Modal width="600px" show={show} showCloseBtn onClose={onClose}>
      <Wrapper testId="joinModal">
        <FooterWechat />
      </Wrapper>
    </Modal>
  )
}

JoinModalContainer.propTypes = {
  joinModal: T.any.isRequired,
}

JoinModalContainer.defaultProps = {}

export default connectStore(JoinModalContainer)
