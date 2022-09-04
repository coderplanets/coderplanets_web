/*
 *
 * BlogItem
 *
 */

import { FC, memo } from 'react'
import { isMobile } from 'react-device-detect'

import type { TCommunity, TBlog, TC11N } from '@/spec'
import { buildLog } from '@/utils/logger'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:BlogItem:index')

type TProps = {
  curCommunity?: TCommunity | null
  // activeId?: TID | null
  entry: TBlog
  c11n: TC11N
}

const BlogItem: FC<TProps> = ({ entry, c11n, curCommunity = null }) => {
  return (
    <Wrapper entry={entry} c11n={c11n}>
      {!isMobile ? (
        <DesktopView entry={entry} />
      ) : (
        <MobileView entry={entry} curCommunity={curCommunity} />
      )}
    </Wrapper>
  )
}

export default memo(BlogItem)
