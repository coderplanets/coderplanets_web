/*
 *
 * CommunityList
 *
 */

import { FC, memo, ReactNode } from 'react'
import { isEmpty } from 'ramda'

import type { TCommunity } from '@/spec'
import { buildLog } from '@/utils/logger'
import Tooltip from '@/widgets/Tooltip'
import CommunityCard from '@/widgets/Cards/CommunityCard'

import { Wrapper, Linker, Logo, MoreWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:CommunityList:index')

type TProps = {
  items: TCommunity[]
  size?: number
  bottom?: number
  right?: number
  emptyHint?: ReactNode
  totalCount?: number
  onMoreClick?: () => void
}

const CommunityList: FC<TProps> = ({
  items,
  size = 22,
  bottom = 0,
  right = 5,
  emptyHint = '',
  totalCount = -1,
  onMoreClick = log,
}) => {
  if (isEmpty(items)) {
    return !isEmpty(emptyHint) && <>{emptyHint}</>
  }

  return (
    <Wrapper>
      {items.map((community) => (
        <Tooltip
          key={community.id}
          placement="bottom"
          content={<CommunityCard item={community} />}
        >
          <Linker href={`/${community.raw}`} bottom={bottom} right={right}>
            <Logo src={community.logo} size={size} raw={community.raw} />
          </Linker>
        </Tooltip>
      ))}

      {totalCount > items.length && (
        <MoreWrapper onClick={onMoreClick}>{totalCount}+</MoreWrapper>
      )}
    </Wrapper>
  )
}

export default memo(CommunityList)
