/*
 * Share
 */

import { FC, Fragment } from 'react'

import { pluggedIn, buildLog } from '@/utils'

import Modal from '@/components/Modal'

import Platforms from './Platforms'
import InfoPanel from './InfoPanel'

import type { TStore } from './store'
import { Wrapper } from './styles'
import { useInit, close } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Share')

type TProps = {
  share?: TStore
  testid?: string
}

const ShareContainer: FC<TProps> = ({ share: store, testid }) => {
  useInit(store)
  const { show } = store

  return (
    <Fragment>
      <Modal width="450px" show={show} showCloseBtn onClose={close}>
        <Wrapper testid={testid}>
          <Platforms />
          <InfoPanel />
        </Wrapper>
      </Modal>
    </Fragment>
  )
}

export default pluggedIn(ShareContainer) as FC<TProps>
