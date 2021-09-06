/*
 *
 * RadarItem
 *
 */

import { FC, memo } from 'react'

import type { TRadar, TC11N } from '@/spec'
import { THREAD } from '@/constant'
import { buildLog } from '@/utils/logger'

import ArticleCard from '@/components/ArticleCard'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:RadarItem:index')

type TProps = {
  entry: TRadar
  c11n: TC11N
}

const RadarItem: FC<TProps> = ({ entry, c11n }) => {
  return (
    <Wrapper entry={entry} c11n={c11n}>
      <ArticleCard data={entry} thread={THREAD.RADAR} />
    </Wrapper>
  )
}

export default memo(RadarItem)
