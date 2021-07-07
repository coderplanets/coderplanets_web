/*
 *
 * ArticlesFilter
 *
 */

import { FC } from 'react'

import type { TThread, TArticleFilter } from '@/spec'
import { THREAD } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import type { TStore as TAccountStore } from '@/stores/AccountStore'

import FilterButton from './FilterButton'
import SelectedTags from './SelectedTags'
import FilterResult from './FilterResult'

import { Wrapper, MainFilterWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ArticlesFilter:index')

type TProps = {
  account?: TAccountStore
  activeFilter: TArticleFilter
  onSelect: (filter: TArticleFilter) => void
  thread: TThread
  totalCount?: number
}

const ArticlesFilter: FC<TProps> = ({
  account,
  thread = THREAD.POST,
  activeFilter = {},
  onSelect,
  totalCount = 0,
}) => {
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

export default pluggedIn(ArticlesFilter, 'account') as FC<TProps>
