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
import { useInit, onClose } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityTagSetter')

type TProps = {
  communityTagSetter?: TStore
  onCommunitySelect?: (community: TCommunity, select: boolean) => void
}

const CommunityTagSetterContainer: FC<TProps> = ({
  communityTagSetter: store,
  onCommunitySelect = log,
}) => {
  useInit(store, { onCommunitySelect })

  const { show, type, tagView, communityView, communityAction } = store

  return (
    <Modal width="500px" show={show} onClose={onClose} showCloseBtn>
      {type === TYPE.SELECT_COMMUNITY && (
        <CommunitySetter view={communityView} action={communityAction} />
      )}
      {type === TYPE.TAG && <TagSetter view={tagView} />}
    </Modal>
  )
}

export default pluggedIn(CommunityTagSetterContainer) as FC<TProps>
