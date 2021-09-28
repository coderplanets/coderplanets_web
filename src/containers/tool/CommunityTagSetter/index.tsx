//

/*
 *
 * CommunityTagSetter
 *
 */

import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Modal from '@/components/Modal'

import type { TStore } from './store'
import TagSetter from './TagSetter'
import CommunitySetter from './CommunitySetter'

import { SETTER } from './constant'
import { useInit, onClose } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityTagSetter')

type TProps = {
  communityTagSetter?: TStore
  testid?: string
}

const CommunityTagSetterContainer: FC<TProps> = ({
  communityTagSetter: store,
  testid = 'community-tag-setter',
}) => {
  useInit(store)
  const {
    show,
    curSetter,
    tagView,
    communitiesList,
    communityView,
    communityAction,
  } = store

  return (
    <Modal width="500px" show={show} showCloseBtn onClose={onClose}>
      {curSetter === SETTER.COMMUNITY && (
        <CommunitySetter
          view={communityView}
          action={communityAction}
          communitiesList={communitiesList}
        />
      )}
      {curSetter === SETTER.TAG && <TagSetter view={tagView} />}
    </Modal>
  )
}

export default pluggedIn(CommunityTagSetterContainer) as FC<TProps>