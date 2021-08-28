/*
 *
 * PostItem
 *
 */

import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import type { TPost, TID, TUser, TAccount, TC11N } from '@/spec'
import { buildLog } from '@/utils/logger'
import usePlatform from '@/hooks/usePlatform'

// import ArticleItemPrefixLabel from '@/components/ArticleItemPrefixLabel'
import DesktopView from './DesktopView'
import MobileView from './MobileView'
// import ListView from './ListView'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:PostItem:index')

export const ArticleItemPrefixLabel = dynamic(
  () => import('@/components/ArticleItemPrefixLabel'),
  {
    ssr: false,
  },
)

type TProps = {
  activeId?: TID | null
  entry: TPost
  c11n: TC11N

  onUserSelect?: (obj: TUser) => void
  onAuthorSelect?: (obj: TAccount) => void
}

const PostItem: FC<TProps> = ({
  entry,
  onUserSelect = log,
  onAuthorSelect = log,
  activeId = null,
  c11n,
}) => {
  const { isMobile } = usePlatform()

  return (
    <Wrapper entry={entry} activeId={activeId} c11n={c11n}>
      <ArticleItemPrefixLabel entry={entry} />
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
