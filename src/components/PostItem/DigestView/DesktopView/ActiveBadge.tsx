import React from 'react'

import type { TPost } from '@/spec'
import { ICON } from '@/config'

import Tooltip from '@/components/Tooltip'

import {
  Wrapper,
  PopContent,
  PopContentDate,
  ItemInner,
  Icon,
} from '../../styles/digest_view/active_badge'

type TProps = {
  item: TPost
}

const ActiveBadge: React.FC<TProps> = ({ item }) => {
  return (
    <Wrapper hasComments={item.commentsCount > 0}>
      <Tooltip
        content={
          <PopContent>
            <div>最后回复</div> <PopContentDate>2020-03-11</PopContentDate>
          </PopContent>
        }
        placement="bottom"
        noPadding
      >
        <ItemInner>
          <Icon src={`${ICON}/shape/activity.svg`} />
          4天前
        </ItemInner>
      </Tooltip>
    </Wrapper>
  )
}

export default ActiveBadge
