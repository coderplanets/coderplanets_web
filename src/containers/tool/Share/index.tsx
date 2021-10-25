/*
 * Share
 */

import { FC, Fragment } from 'react'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Modal from '@/widgets/Modal'

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
  const { show, siteShareType, linksData, viewingArticle } = store

  return (
    <Fragment>
      <Modal width="450px" show={show} showCloseBtn onClose={close}>
        <Wrapper testid={testid} type={siteShareType}>
          <Platforms article={viewingArticle} />
          <InfoPanel type={siteShareType} linksData={linksData} />
        </Wrapper>
      </Modal>
    </Fragment>
  )
}

export default pluggedIn(ShareContainer) as FC<TProps>
