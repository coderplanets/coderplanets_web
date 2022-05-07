/*
 * Share
 */

import { FC, Fragment, memo } from 'react'
import { isMobile } from 'react-device-detect'

import type { TArticle } from '@/spec'
import { buildLog } from '@/utils/logger'

import Modal from '@/widgets/Modal'

import type { TLinksData } from '../spec'
import Platforms from './Platforms'
import InfoPanel from './InfoPanel'

import { Wrapper } from '../styles/panel'
import { close } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:Share')

type TProps = {
  show: boolean
  offsetLeft: string
  siteShareType: string
  linksData: TLinksData
  article: TArticle
  testid?: string
}

const SharePanel: FC<TProps> = ({
  show,
  offsetLeft,
  siteShareType,
  linksData,
  article,
  testid = 'share-panel',
}) => {
  if (isMobile) {
    return (
      <Fragment>
        <Wrapper testid={testid} type={siteShareType}>
          <Platforms article={article} />
          <InfoPanel type={siteShareType} linksData={linksData} />
        </Wrapper>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Modal
        width="450px"
        show={show}
        offsetLeft={offsetLeft}
        onClose={close}
        showCloseBtn
      >
        <Wrapper testid={testid} type={siteShareType}>
          <Platforms article={article} />
          <InfoPanel type={siteShareType} linksData={linksData} />
        </Wrapper>
      </Modal>
    </Fragment>
  )
}

export default memo(SharePanel)
