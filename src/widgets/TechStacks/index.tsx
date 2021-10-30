/*
 *
 * TechStacks
 *
 */

import { FC, memo, Fragment } from 'react'

import type { TTechCommunities, TCommunity } from '@/spec'
import { buildLog } from '@/utils/logger'

import { TECHSTACK_CATEGORYS } from './constant'
import Category from './Category'
import InteractiveRow from './InteractiveRow'
import ReadOnlyRow from './ReadOnlyRow'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:TechStack:index')

type TProps = {
  techCommunities: TTechCommunities
  interactive?: boolean

  onAdd?: (category: TCommunity) => void
  onRemove?: (t: TCommunity) => void
}

const TechStacks: FC<TProps> = ({
  onAdd,
  onRemove,
  techCommunities = {},
  interactive = true,
}) => {
  return (
    <Fragment>
      {TECHSTACK_CATEGORYS.map((category) => (
        <Wrapper key={category.raw}>
          <Category title={category.title} />
          {interactive ? (
            <InteractiveRow
              onAdd={() => onAdd(category)}
              onRemove={onRemove}
              items={techCommunities[category.raw]}
            />
          ) : (
            <ReadOnlyRow
              items={techCommunities[category.raw]}
              noSet={techCommunities[category.raw].length === 0}
            />
          )}
        </Wrapper>
      ))}
    </Fragment>
  )
}

export default memo(TechStacks)
