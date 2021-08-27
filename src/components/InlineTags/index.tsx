/*
 *
 * InlineTags
 *
 */

import { FC, memo } from 'react'

import type { TTag, TSIZE_TSM } from '@/spec'
import { SIZE } from '@/constant'

import { sortByColor } from '@/utils/helper'
import { Trans } from '@/utils/i18n'
import { buildLog } from '@/utils/logger'
import Maybe from '@/components/Maybe'
import Tooltip from '@/components/Tooltip'

import { Wrapper, Tag, HashSign, Title, MoreText, PopoverInfo } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:InlineTags:index')

const FullList = ({ items, mLeft, size }) => {
  return (
    <Wrapper mLeft={mLeft}>
      {sortByColor(items).map((tag) => (
        <Tag key={tag.title}>
          <HashSign color={tag.color} size={size} />
          <Title size={size}>{Trans(tag.title)}</Title>
        </Tag>
      ))}
    </Wrapper>
  )
}

type TProps = {
  items: TTag[]
  max?: number
  mLeft?: number
  size?: TSIZE_TSM
}

const InlineTags: FC<TProps> = ({
  items,
  max = 3,
  mLeft = 8,
  size = SIZE.TINY,
}) => {
  if (items.length > max) {
    return (
      <Tooltip
        placement="bottom"
        content={
          <PopoverInfo>
            <FullList items={items} mLeft={mLeft} size={size} />
          </PopoverInfo>
        }
      >
        <Wrapper mLeft={mLeft}>
          {sortByColor(items)
            .slice(0, max)
            .map((tag) => (
              <Tag key={tag.title}>
                <HashSign color={tag.color} size={size} />
                <Title size={size}>{Trans(tag.title)}</Title>
              </Tag>
            ))}
          <MoreText>...</MoreText>
        </Wrapper>
      </Tooltip>
    )
  }

  return (
    <Maybe test={items.length !== 0}>
      <FullList items={items} mLeft={mLeft} size={size} />
    </Maybe>
  )
}

export default memo(InlineTags)
