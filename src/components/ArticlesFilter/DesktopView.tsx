/*
 *
 * ArticlesFilter
 *
 */

import { FC, memo } from 'react'

import type { TThread, TAccount, TArticleFilter } from '@/spec'
import { THREAD } from '@/constant'
import { buildLog } from '@/utils'

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
  accountInfo: TAccount
  totalCount?: number
}

const ArticlesFilter: FC<TProps> = ({
  thread = THREAD.POST,
  activeFilter = {},
  onSelect,
  accountInfo: { isLogin },
  totalCount = 0,
}) => (
  <Wrapper>
    <MainFilterWrapper>
      <FilterButton
        thread={thread}
        onSelect={onSelect}
        isLogin={isLogin}
        activeFilter={activeFilter}
      />

      <SelectedTags onSelect={onSelect} activeFilter={activeFilter} />
    </MainFilterWrapper>
    <FilterResult totalCount={totalCount} />
  </Wrapper>
)

export default memo(ArticlesFilter)
