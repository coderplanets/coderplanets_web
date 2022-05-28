/*
 *
 * PostItem
 *
 */

import { FC, memo } from 'react'

import type { TCommunity, TPost, TUser, TAccount, TC11N } from '@/spec'
import { buildLog } from '@/utils/logger'
import { isMobile } from 'react-device-detect'

import DesktopView from './DesktopView'
import MobileView from './MobileView'
// import ListView from './ListView'

import { Wrapper } from '../styles/comment_fist_layout'

/* eslint-disable-next-line */
const log = buildLog('c:PostItem:index')

type TProps = {
  curCommunity: TCommunity | null
  article: TPost
  c11n: TC11N

  onUserSelect?: (obj: TUser) => void
  onAuthorSelect?: (obj: TAccount) => void
}

const PostItem: FC<TProps> = ({
  curCommunity,
  article,
  onUserSelect = log,
  onAuthorSelect = log,
  c11n,
}) => {
  return (
    <Wrapper c11n={c11n}>
      {!isMobile ? (
        <DesktopView article={article} curCommunity={curCommunity} />
      ) : (
        <MobileView
          article={article}
          curCommunity={curCommunity}
          onAuthorSelect={onAuthorSelect}
        />
      )}
    </Wrapper>
  )
}

export default memo(PostItem)
