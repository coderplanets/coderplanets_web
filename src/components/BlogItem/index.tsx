/*
 *
 * BlogItem
 *
 */

import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import type { TBlog, TID, TUser, TAccount, TC11N } from '@/spec'
import { buildLog } from '@/utils/logger'

import usePlatform from '@/hooks/usePlatform'
import DesktopView from './DesktopView'
import MobileView from './MobileView'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:BlogItem:index')

export const ArticleItemPrefixLabel = dynamic(
  () => import('@/components/ArticleItemPrefixLabel'),
  {
    ssr: false,
  },
)

type TProps = {
  activeId?: TID | null
  entry: TBlog
  c11n: TC11N

  onUserSelect?: (obj: TUser) => void
  onAuthorSelect?: (obj: TAccount) => void
}

const BlogItem: FC<TProps> = ({
  entry,
  onUserSelect = log,
  onAuthorSelect = log,
  c11n,
}) => {
  const { isMobile } = usePlatform()

  return (
    <Wrapper entry={entry} c11n={c11n}>
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

export default memo(BlogItem)
