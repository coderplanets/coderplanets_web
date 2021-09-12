/*
 *
 * PostItem
 *
 */

import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import type { TPost, TUser, TAccount, TC11N } from '@/spec'
import { buildLog } from '@/utils/logger'
import usePlatform from '@/hooks/usePlatform'

import DesktopView from './DesktopView'
import MobileView from './MobileView'
// import ListView from './ListView'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:PostItem:index')

type TProps = {
  entry: TPost
  c11n: TC11N

  onUserSelect?: (obj: TUser) => void
  onAuthorSelect?: (obj: TAccount) => void
}

const PostItem: FC<TProps> = ({
  entry,
  onUserSelect = log,
  onAuthorSelect = log,
  c11n,
}) => {
  const { isMobile } = usePlatform()

  return (
    <Wrapper entry={entry} c11n={c11n}>
      {!isMobile ? (
        <DesktopView
          entry={entry}
          onUserSelect={onUserSelect}
          onAuthorSelect={onAuthorSelect}
        />
      ) : (
        <MobileView entry={entry} onAuthorSelect={onAuthorSelect} />
      )}
    </Wrapper>
  )
}

export default memo(PostItem)
