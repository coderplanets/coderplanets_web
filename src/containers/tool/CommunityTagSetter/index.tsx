//

/*
 *
 * CommunityTagSetter
 *
 */

import { FC } from 'react'

import type { TCommunity, TTag } from '@/spec'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Modal from '@/widgets/Modal'

import type { TStore } from './store'
import TagSetter from './TagSetter'
import CommunitySetter from './CommunitySetter'

import { TYPE } from './constant'
import { useInit, onClose, toggleCommunity, toggleTag } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityTagSetter')

type TProps = {
  communityTagSetter?: TStore
  selectedCommunity?: TCommunity

  onCommunitySelect?: (community: TCommunity, select: boolean) => void
  onTagSelect?: (tags: TTag[], select: boolean) => void
}

const CommunityTagSetterContainer: FC<TProps> = ({
  communityTagSetter: store,
  onCommunitySelect = log,
  onTagSelect = log,
  selectedCommunity = { raw: 'home' },
}) => {
  useInit(store, selectedCommunity)

  const {
    show,
    type,
    tagView,
    communityView,
    communityAction,
    communitiesList,
    tagsList,
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
      {type === TYPE.TAG && (
        <TagSetter
          view={tagView}
          tagsList={tagsList}
          onTagSelect={(tag, checked) => toggleTag(tag, checked, onTagSelect)}
        />
      )}
    </Modal>
  )
}

export default pluggedIn(CommunityTagSetterContainer) as FC<TProps>
