/*
 *
 * ArticlesFilter
 *
 */

import { FC, memo } from 'react'

import type { TThread, TArticleFilter } from '@/spec'

import { THREAD } from '@/constant'
import { buildLog } from '@/utils'
import { useMST } from '@/hooks'

import FilterButton from './FilterButton'
import SelectedTags from './SelectedTags'
import FilterResult from './FilterResult'

import { Wrapper, MainFilterWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ArticlesFilter:index')

type TProps = {
  activeFilter: TArticleFilter
  onSelect: (filter: TArticleFilter) => void
  thread: TThread
  totalCount?: number
}

const ArticlesFilter: FC<TProps> = ({
  thread = THREAD.POST,
  activeFilter = {},
  onSelect,
  totalCount = 0,
}) => {
  const account = useMST('account')

  return (
    <Wrapper>
      <MainFilterWrapper>
        <FilterButton
          thread={thread}
          onSelect={onSelect}
          isLogin={account?.isLogin}
          activeFilter={activeFilter}
        />

        <SelectedTags onSelect={onSelect} activeFilter={activeFilter} />
      </MainFilterWrapper>
      <FilterResult totalCount={totalCount} />
    </Wrapper>
  )
}

export default memo(ArticlesFilter)
