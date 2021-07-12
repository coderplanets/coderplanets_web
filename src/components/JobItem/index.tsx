/*
 *
 * JobItem
 *
 */

import { FC, memo } from 'react'

import type { TJob, TID } from '@/spec'
import { buildLog } from '@/utils'
import { useAccount } from '@/hooks'

import ArticleItemPrefixLabel from '@/components/ArticleItemPrefixLabel'
import DesktopView from './DesktopView'

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
      <ArticleItemPrefixLabel entry={entry} topOffset="9px" />
      <DesktopView entry={entry} />
    </Wrapper>
  )
}

export default memo(JobItem)
