import React from 'react'

import type { TPost } from '@/spec'
import { ICON } from '@/config'

import { Wrapper, ItemInner, Icon } from '../../styles/digest_view/active_badge'

type TProps = {
  item: TPost
}

const ActiveBadge: React.FC<TProps> = ({ item }) => {
  return (
    <Wrapper hasComments={item.commentsCount > 0}>
      <ItemInner title="最后回复: 2020-03-11 14:33">
        <Icon src={`${ICON}/shape/activity.svg`} />
        4天前
      </ItemInner>
    </Wrapper>
  )
}

export default ActiveBadge
