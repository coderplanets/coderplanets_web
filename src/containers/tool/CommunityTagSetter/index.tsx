//

/*
 *
 * CommunityTagSetter
 *
 */

import { FC } from 'react'

import type { TCommunity } from '@/spec'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Modal from '@/components/Modal'

import type { TStore } from './store'
import TagSetter from './TagSetter'
import CommunitySetter from './CommunitySetter'

import { TYPE } from './constant'
import { useInit, onClose, toggleCommunity } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityTagSetter')

type TProps = {
  communityTagSetter?: TStore
  selectedCommunities?: TCommunity[]
  onCommunitySelect?: (community: TCommunity, select: boolean) => void
}

const CommunityTagSetterContainer: FC<TProps> = ({
  communityTagSetter: store,
  onCommunitySelect = log,
  selectedCommunities = [],
}) => {
  useInit(store, selectedCommunities)

  const {
    show,
    type,
    tagView,
    communityView,
    communityAction,
    communitiesList,
  } = store

  return (
    <Modal width="520px" show={show} onClose={onClose} showCloseBtn>
      {type === TYPE.SELECT_COMMUNITY && (
        <CommunitySetter
          view={communityView}
          action={communityAction}
          communitiesList={communitiesList}
          onCommunitySelect={(community, checked) => {
            toggleCommunity(community, checked)
            onCommunitySelect?.(community, checked)
          }}
        />
      )}
      {type === TYPE.TAG && <TagSetter view={tagView} />}
    </Modal>
  )
}

export default pluggedIn(CommunityTagSetterContainer) as FC<TProps>
