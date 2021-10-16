/*
 * TagsList
 */

import { FC, memo } from 'react'

import type { TTag, TSIZE_TSM } from '@/spec'
import { SIZE } from '@/constant'

import { sortByColor } from '@/utils/helper'
import { Trans } from '@/utils/i18n'
import { buildLog } from '@/utils/logger'
import Tooltip from '@/components/Tooltip'

import Setter from './Setter'

import { Wrapper, Tag, HashSign, Title, More } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:TagsList:index')

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
  withSetter?: boolean
}

const TagsList: FC<TProps> = ({
  items,
  max = 2,
  mLeft = 8,
  size = SIZE.TINY,
  withSetter = false,
}) => {
  if (items.length > max) {
    return (
      <Wrapper mLeft={mLeft}>
        {sortByColor(items)
          .slice(0, max)
          .map((tag) => (
            <Tag key={tag.title}>
              <HashSign color={tag.color} size={size} />
              <Title size={size}>{Trans(tag.title)}</Title>
            </Tag>
          ))}
        <Tooltip
          placement="bottom"
          content={<FullList items={items} mLeft={mLeft} size={size} />}
        >
          <More>...</More>
        </Tooltip>
        {withSetter && <Setter noEmpty />}
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {items.length > 0 && <FullList items={items} mLeft={mLeft} size={size} />}
      {withSetter && <Setter noEmpty={items.length > 0} />}
    </Wrapper>
  )
}

export default memo(TagsList)
