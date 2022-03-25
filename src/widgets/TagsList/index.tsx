/*
 * TagsList
 */

import { FC, memo } from 'react'

import type { TTag, TSIZE_TSM, TCommunity, TThread, TTagMode } from '@/spec'
import { SIZE, THREAD } from '@/constant'

import { sortByColor } from '@/utils/helper'
import { Trans } from '@/utils/i18n'
import { buildLog } from '@/utils/logger'
import Tooltip from '@/widgets/Tooltip'

import Setter from './Setter'

import { Wrapper, Tag, DotSign, Title, SolidTitle, More } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:TagsList:index')

const FullList = ({ items, mLeft, size, mode = 'solid' }) => {
  return (
    <Wrapper mLeft={mLeft}>
      {sortByColor(items).map((tag) => (
        <Tag key={tag.title}>
          {mode === 'default' && <DotSign color={tag.color} size={size} />}
          {mode === 'default' ? (
            <Title size={size}>{Trans(tag.title)}</Title>
          ) : (
            <SolidTitle size={size} color={tag.color}>
              {Trans(tag.title)}
            </SolidTitle>
          )}
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
  mode?: TTagMode

  // if withSetter is set to true, MUST have community and thread
  community?: TCommunity
  thread?: TThread
}

const TagsList: FC<TProps> = ({
  items,
  max = 2,
  mLeft = 8,
  size = SIZE.TINY,
  withSetter = false,
  mode = 'default',
  community = { raw: 'home' },
  thread = THREAD.POST,
}) => {
  if (items.length > max) {
    return (
      <Wrapper mLeft={mLeft}>
        {sortByColor(items)
          .slice(0, max)
          .map((tag) => (
            <Tag key={tag.title}>
              {mode === 'default' && <DotSign color={tag.color} size={size} />}
              <Title size={size}>{Trans(tag.title)}</Title>
            </Tag>
          ))}
        <Tooltip
          placement="bottom"
          content={
            <FullList items={items} mLeft={mLeft} size={size} mode={mode} />
          }
        >
          <More>..</More>
        </Tooltip>
        {withSetter && (
          <Setter community={community} thread={thread} tags={items} noEmpty />
        )}
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {items.length > 0 && <FullList items={items} mLeft={mLeft} size={size} />}
      {withSetter && (
        <Setter
          tags={items}
          community={community}
          thread={thread}
          noEmpty={items.length > 0}
        />
      )}
    </Wrapper>
  )
}

export default memo(TagsList)
