/*
 *
 * ArticlesFilter
 *
 */

import { FC, memo } from 'react'

import type { TArticleFilter } from '@/spec'

import { buildLog } from '@/utils'
import { useViewing, useAccount } from '@/hooks'

import FilterButton from './FilterButton'
import SelectedTags from './SelectedTags'
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
  const account = useAccount()
  const viewing = useViewing()

  return (
    <Wrapper>
      <MainFilterWrapper>
        <FilterButton
          thread={viewing.activeThread}
          onSelect={onSelect}
          isLogin={account.isLogin}
          activeFilter={activeFilter}
        />

        <SelectedTags onSelect={onSelect} activeFilter={activeFilter} />
      </MainFilterWrapper>
      <FilterResult totalCount={totalCount} />
    </Wrapper>
  )
}

export default memo(ArticlesFilter)
