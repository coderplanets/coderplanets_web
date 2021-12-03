/*
 * TabBar
 */

import { FC, memo } from 'react'

import type { TSIZE_SM, TC11NLayout } from '@/spec'
import { HCN, ANCHOR, THREAD, C11N, SIZE } from '@/constant'
import { sortByIndex, aliasMapIfNeed } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import type { TTabItem } from '../spec'
import NormalView from './NormalView'

/* eslint-disable-next-line */
const log = buildLog('c:TabBar:index')

type TProps = {
  source: TTabItem[]
  active: string
  layout: TC11NLayout
  communityRaw: string
  size: TSIZE_SM
  onChange?: () => void
}

const TabBar: FC<TProps> = ({
  source,
  active = THREAD.POST,
  onChange = log,
  layout = C11N.CLASSIC,
  communityRaw = HCN,
  size = SIZE.MEDIUM,
}) => {
  const aliasSource = aliasMapIfNeed(communityRaw, source)
  const sortedSource = sortByIndex(aliasSource)

  console.log('#> source: ', source)

  return (
    <div id={ANCHOR.GLOBAL_TABBER_ID}>
      <NormalView
        layout={layout}
        source={sortedSource}
        active={active}
        onChange={onChange}
        size={size}
      />
    </div>
  )
}

export default memo(TabBar)
