//

/*
 *
 * CommunityTagSetter
 *
 */

import { FC } from 'react'

import type { TCommunity, TTag } from '@/spec'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

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
    communityStyle,
    tagView,
    communityView,
    communitiesList,
    tagsList,
    texts,
  } = store

  return (
    <Modal width="520px" show={show} onClose={onClose} showCloseBtn>
      {type === TYPE.SELECT_COMMUNITY && (
        <CommunitySetter
          type={type}
          texts={texts}
          communityStyle={communityStyle}
          view={communityView}
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

export default bond(
  CommunityTagSetterContainer,
  'communityTagSetter',
) as FC<TProps>
