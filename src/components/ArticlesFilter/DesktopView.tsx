/*
 *
 * ArticlesFilter
 *
 */

import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import type { TArticleFilter, TResState } from '@/spec'

import { TYPE } from '@/constant'
import { buildLog } from '@/utils'
import { useViewing } from '@/hooks'

import FilterButton from './FilterButton'
import SelectedFilters from './SelectedFilters'
import FilterResult from './FilterResult'

import { Wrapper, MainFilterWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ArticlesFilter:index')

const LavaLampLoading = dynamic(
  () => import('@/components/Loading/LavaLampLoading'),
  {
    /* eslint-disable react/display-name */
    loading: () => <div />,
    ssr: false,
  },
)

type TProps = {
  activeFilter: TArticleFilter
  onSelect: (filter: TArticleFilter) => void
  pageNumber?: number
  totalCount?: number
  resState?: TResState
}

const ArticlesFilter: FC<TProps> = ({
  activeFilter = {},
  onSelect,
  pageNumber = 1,
  totalCount = 0,
  resState = TYPE.RES_STATE.DONE,
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

      {resState === TYPE.RES_STATE.LOADING && (
        <LavaLampLoading top={2} right={28} />
      )}
      <FilterResult pageNumber={pageNumber} totalCount={totalCount} />
    </Wrapper>
  )
}

export default memo(ArticlesFilter)
