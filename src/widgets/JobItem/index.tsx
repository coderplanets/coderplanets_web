/*
 *
 * JobItem
 *
 */

import { FC, memo } from 'react'

import type { TJob, TC11N } from '@/spec'

import { buildLog } from '@/utils/logger'

import ArticleCard from '@/widgets/ArticleCard'
import ArticleReadLabel from '@/widgets/ArticleReadLabel'
import ArticlePinLabel from '@/widgets/ArticlePinLabel'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:JobItem:index')

type TProps = {
  entry: TJob
  c11n: TC11N
}

const JobItem: FC<TProps> = ({ entry, c11n }) => {
  return (
    <Wrapper entry={entry} c11n={c11n}>
      <ArticleReadLabel entry={entry} top={-3} left={-3} />
      <ArticlePinLabel entry={entry} />
      <ArticleCard data={entry} />
    </Wrapper>
  )
}

export default memo(JobItem)
