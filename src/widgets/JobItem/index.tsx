/*
 *
 * JobItem
 *
 */

import { FC, memo } from 'react'

import type { TJob, TC11N } from '@/spec'

import { buildLog } from '@/utils/logger'
// import usePlatform from '@/hooks/usePlatform'

import ArticleCard from '@/widgets/ArticleCard'
import { ArticleReadLabel, ArticlePinLabel } from '@/widgets/dynamic'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:JobItem:index')

type TProps = {
  entry: TJob
  c11n: TC11N
}

const JobItem: FC<TProps> = ({ entry, c11n }) => {
  // const { isMobile } = usePlatform()

  return (
    <Wrapper entry={entry} c11n={c11n}>
      <ArticleReadLabel entry={entry} top={-3} left={-3} />
      <ArticlePinLabel entry={entry} />
      <ArticleCard data={entry} />
    </Wrapper>
  )
}

export default memo(JobItem)
