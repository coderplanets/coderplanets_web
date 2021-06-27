/*
 * TabBar
 */

import { FC, memo } from 'react'

import type { TSIZE_SM } from '@/spec'
import { HCN, ANCHOR, THREAD, C11N, SIZE } from '@/constant'
import { buildLog, sortByIndex } from '@/utils'

import type { TTabItem } from '../spec'
import NormalView from './NormalView'
import BriefView from './BriefView'

import { mapAlias } from '../alias'

/* eslint-disable-next-line */
const log = buildLog('c:TabBar:index')

type TProps = {
  source: TTabItem[]
  active: string
  layout: string
  communityRaw: string
  size: TSIZE_SM
  onChange?: () => void
}

const TabBar: FC<TProps> = ({
  source,
  active = THREAD.POST,
  onChange = log,
  layout = C11N.DIGEST,
  communityRaw = HCN,
  size = SIZE.MEDIUM,
}) => {
  const aliasSource = mapAlias(source, communityRaw)
  const sortedSource = sortByIndex(aliasSource)

  return (
    <div id={ANCHOR.GLOBAL_TABBER_ID}>
      {layout === C11N.BRIEF ? (
        <BriefView source={sortedSource} active={active} onChange={onChange} />
      ) : (
        <NormalView
          source={sortedSource}
          active={active}
          onChange={onChange}
          size={size}
        />
      )}
    </div>
  )
}

export default memo(TabBar)
