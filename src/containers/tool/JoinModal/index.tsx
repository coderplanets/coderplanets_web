/*
 * JoinModal
 */

import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import Modal from '@/widgets/Modal'

import Header from './Header'
import Content from './Content'

import type { TStore } from './store'
import { Wrapper } from './styles'
import { useInit, onClose } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:JoinModal')

type TProps = {
  joinModal?: TStore
}

const JoinModalContainer: FC<TProps> = ({ joinModal: store }) => {
  useInit(store)

  const { show, activeGroup } = store

  return (
    <Modal width="600px" show={show} showCloseBtn onClose={onClose}>
      <Wrapper testid="joinModal">
        <Header activeGroup={activeGroup} />
        <Content activeGroup={activeGroup} />
      </Wrapper>
    </Modal>
  )
}

export default bond(JoinModalContainer, 'joinModal') as FC<TProps>
