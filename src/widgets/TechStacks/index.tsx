/*
 *
 * TechStacks
 *
 */

import { FC, memo, Fragment } from 'react'
import { reduce, merge } from 'ramda'

import type { TTechCommunities, TCommunity } from '@/spec'
import { buildLog } from '@/utils/logger'

import { TECHSTACK_CATEGORYS, CATEGORYS_RAWS } from './constant'
import Category from './Category'
import InteractiveRow from './InteractiveRow'
import ReadOnlyRow from './ReadOnlyRow'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:TechStack:index')

const FULL_TECHS = reduce(
  (acc, key) => ({ ...acc, [key]: [] }),
  {},
  CATEGORYS_RAWS,
)

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
  const techs = merge(FULL_TECHS, techCommunities)

  return (
    <Fragment>
      {TECHSTACK_CATEGORYS.map((category) => (
        <Wrapper key={category.raw}>
          <Category title={category.title} />
          {interactive ? (
            <InteractiveRow
              onAdd={() => onAdd(category)}
              onRemove={onRemove}
              items={techs[category.raw]}
            />
          ) : (
            <ReadOnlyRow
              items={techs[category.raw]}
              noSet={techs[category.raw].length === 0}
            />
          )}
        </Wrapper>
      ))}
    </Fragment>
  )
}

export default memo(TechStacks)
