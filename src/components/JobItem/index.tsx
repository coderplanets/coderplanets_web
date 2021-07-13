/*
 *
 * JobItem
 *
 */

import { FC, memo } from 'react'

import type { TJob, TID } from '@/spec'
import { buildLog } from '@/utils'
import { useAccount } from '@/hooks'

import ArticleCard from '@/components/ArticleCard'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:JobItem:index')

type TProps = {
  entry: TJob
  activeId: TID | null
}

const JobItem: FC<TProps> = ({ entry, activeId }) => {
  const { c11n } = useAccount()

  return (
    <Wrapper entry={entry} activeId={activeId} c11n={c11n}>
      <ArticleCard data={entry} />
    </Wrapper>
  )
}

export default memo(JobItem)
