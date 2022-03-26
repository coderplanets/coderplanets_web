/*
 * TagsList
 */

import { FC, memo } from 'react'

import type { TTag, TSIZE_TSM, TCommunity, TThread, TTagMode } from '@/spec'
import { SIZE, THREAD, TAG_MODE } from '@/constant'

import { sortByColor } from '@/utils/helper'
import { Trans } from '@/utils/i18n'
import { buildLog } from '@/utils/logger'
import Tooltip from '@/widgets/Tooltip'

import FullList from './FullList'
import Setter from './Setter'

import { Wrapper, Tag, DotSign, Title, More } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:TagsList:index')

export type TProps = {
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
  mode = TAG_MODE.DEFAULT,
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
              {mode === TAG_MODE.DEFAULT && (
                <DotSign color={tag.color} size={size} />
              )}
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
      {items.length > 0 && (
        <FullList items={items} mLeft={mLeft} size={size} mode={mode} />
      )}
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
