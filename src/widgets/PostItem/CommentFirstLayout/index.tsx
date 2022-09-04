/*
 *
 * PostItem
 *
 */

import { FC, memo } from 'react'

import type { TCommunity, TPost, TAccount, TC11N } from '@/spec'
import { buildLog } from '@/utils/logger'
import { isMobile } from 'react-device-detect'

import DesktopView from './DesktopView'
import MobileView from './MobileView'
// import ListView from './ListView'

import { Wrapper } from '../styles/comment_fist_layout'

/* eslint-disable-next-line */
const log = buildLog('w:PostItem:index')

type TProps = {
  curCommunity: TCommunity | null
  article: TPost
  c11n: TC11N
  isMobilePreview: boolean

  onAuthorSelect?: (obj: TAccount) => void
}

const PostItem: FC<TProps> = ({
  curCommunity,
  article,
  onAuthorSelect = log,
  isMobilePreview,
  c11n,
}) => {
  return (
    <Wrapper c11n={c11n}>
      {isMobile || isMobilePreview ? (
        <MobileView article={article} onAuthorSelect={onAuthorSelect} />
      ) : (
        <DesktopView article={article} curCommunity={curCommunity} />
      )}
    </Wrapper>
  )
}

export default memo(PostItem)
