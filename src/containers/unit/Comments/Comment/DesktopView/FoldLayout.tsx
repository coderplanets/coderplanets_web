import { FC, memo } from 'react'
import TimeAgo from 'timeago-react'

import type { TComment } from '@/spec'
import { cutRest } from '@/utils/helper'
import { ICON } from '@/config'

import ImgFallback from '@/components/ImgFallback'
import IconButton from '@/components/Buttons/IconButton'
import { SpaceGrow } from '@/components/Common'

import {
  Wrapper,
  Avatar,
  CommentBody,
  SolutionIcon,
  CreateDate,
} from '../../styles/comment/desktop_view/fold_layout'
import { expandComment } from '../../logic'

type TProps = {
  data: TComment
}

const FoldLayout: FC<TProps> = ({ data }) => {
  const isSolution = false //

  return (
    <Wrapper>
      <IconButton
        path="shape/expand-all.svg"
        hint="展开评论"
        mLeft={-1}
        mRight={12}
        onClick={() => expandComment(data.id)}
      />
      <Avatar
        src={data.author.avatar}
        fallback={<ImgFallback user={data.author} size={16} right={10} />}
      />
      <CommentBody
        dangerouslySetInnerHTML={{
          __html: data.bodyHtml,
        }}
      />
      <SpaceGrow />
      {isSolution && (
        <SolutionIcon
          isAuthorUpvoted={data.meta.isArticleAuthorUpvoted}
          src={`${ICON}/shape/solution-check.svg`}
        />
      )}
      <CreateDate>
        <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
      </CreateDate>
    </Wrapper>
  )
}

export default memo(FoldLayout)
