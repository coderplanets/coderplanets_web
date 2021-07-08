/*
 *
 * ArticlesFilter
 *
 */

import { FC, memo } from 'react'

import type { TArticleFilter } from '@/spec'

import { buildLog } from '@/utils'
import { useViewing } from '@/hooks'

import FilterButton from './FilterButton'
import SelectedFilters from './SelectedFilters'
import FilterResult from './FilterResult'

import { Wrapper, MainFilterWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ArticlesFilter:index')

type TProps = {
  activeFilter: TArticleFilter
  onSelect: (filter: TArticleFilter) => void
  totalCount?: number
}

const ArticlesFilter: FC<TProps> = ({
  activeFilter = {},
  onSelect,
  totalCount = 0,
}) => {
  const { activeThread } = useViewing()

  return (
    <Wrapper>
      <MainFilterWrapper>
        <FilterButton
          thread={activeThread}
          onSelect={onSelect}
          activeFilter={activeFilter}
        />

        <SelectedFilters onSelect={onSelect} activeFilter={activeFilter} />
      </MainFilterWrapper>
      <FilterResult totalCount={totalCount} />
    </Wrapper>
  )
}

export default memo(ArticlesFilter)
