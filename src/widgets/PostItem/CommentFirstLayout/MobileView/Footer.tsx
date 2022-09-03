import { FC } from 'react'

import type { TPost } from '@/spec'
import { ARTICLE_CAT } from '@/constant'

import ArticleCatState from '@/widgets/ArticleCatState'
import { Space } from '@/widgets/Common'

import {
  Wrapper,
  Extra,
  BasicState,
  BodyDigest,
  CommentIcon,
} from '../../styles/comment_fist_layout/mobile_view/footer'

type TProps = {
  article: TPost
}

const Footer: FC<TProps> = ({ article }) => {
  return (
    <Wrapper>
      <BodyDigest>{article.digest}</BodyDigest>
      <Extra>
        {article.category !== ARTICLE_CAT.DEFAULT && (
          <ArticleCatState cat={article.category} state={article.state} />
        )}
        <BasicState>
          <Space right={18} />
          <CommentIcon />
          <div>{article.commentsCount}</div>
        </BasicState>
      </Extra>
    </Wrapper>
  )
}

export default Footer
