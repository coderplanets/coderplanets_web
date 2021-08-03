/*
 *
 * JobItem
 *
 */

import { FC, memo } from 'react'

import type { TJob, TID, TC11N } from '@/spec'
import { buildLog } from '@/utils/logger'

import ArticleCard from '@/components/ArticleCard'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:JobItem:index')

type TProps = {
  entry: TJob
  activeId: TID | null
  c11n: TC11N
}

const JobItem: FC<TProps> = ({ entry, activeId, c11n }) => {
  return (
    <Wrapper entry={entry} activeId={activeId} c11n={c11n}>
      <ArticleCard data={entry} />
    </Wrapper>
  )
}

export default memo(JobItem)
