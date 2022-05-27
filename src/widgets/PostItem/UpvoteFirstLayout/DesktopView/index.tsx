import { FC, Fragment, memo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import { EVENT } from '@/constant'
import type { TCommunity, TPost } from '@/spec'

import { send } from '@/utils/helper'

import ViewingSign from '../../ViewingSign'

import Header from './Header'
import Footer from './Footer'

import {
  Wrapper,
  Main,
  DigestWrapper,
} from '../../styles/upvote_fist_layout/desktop_view'

let ArticleReadLabel = null
let ArticlePinLabel = null

type TProps = {
  curCommunity: TCommunity | null
  entry: TPost

  // onUserSelect?: (obj: TUser) => void
  // onAuthorSelect?: (obj: TAccount) => void
}

const DigestView: FC<TProps> = ({ curCommunity, entry }) => {
  const [loaded, setLoaded] = useState(false)

  // 如果同步渲染 Upvote, ArticleReadLabel, ArticlePinLabel 等组件会导致难以忍受的卡顿
  // 尤其是在 Tab 切换的时候。手机端因为目前没有这些组件，性能暂无问题。
  // 本不应该存在的无聊问题，蛋疼的解决办法，
  useEffect(() => {
    ArticleReadLabel = dynamic(() => import('@/widgets/ArticleReadLabel'), {
      ssr: false,
    })
    ArticlePinLabel = dynamic(() => import('@/widgets/ArticlePinLabel'), {
      ssr: false,
    })

    setTimeout(() => setLoaded(true), 200)
  }, [])

  return (
    <Wrapper>
      {loaded && (
        <Fragment>
          <ArticleReadLabel entry={entry} />
          <ArticlePinLabel entry={entry} />
        </Fragment>
      )}
      <ViewingSign article={entry} />
      <Main>
        <Header item={entry} />
        <DigestWrapper
          onClick={() => send(EVENT.PREVIEW_ARTICLE, { article: entry })}
        >
          {entry.digest}
        </DigestWrapper>
        <Footer item={entry} />
      </Main>
    </Wrapper>
  )
}

export default memo(DigestView)
