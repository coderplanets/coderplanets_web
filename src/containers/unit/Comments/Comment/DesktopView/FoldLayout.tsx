import { FC, memo } from 'react'
import TimeAgo from 'timeago-react'

import type { TComment } from '@/spec'
import { ICON } from '@/config'

import ImgFallback from '@/widgets/ImgFallback'
import IconButton from '@/widgets/Buttons/IconButton'
import { SpaceGrow } from '@/widgets/Common'

import IllegalBar from './IllegalBar'

import {
  Wrapper,
  Avatar,
  CommentBody,
  RepliesHint,
  SolutionIcon,
  CreateDate,
} from '../../styles/comment/desktop_view/fold_layout'
import { expandComment } from '../../logic'

type TProps = {
  data: TComment
}

const FoldLayout: FC<TProps> = ({ data }) => {
  const isSolution = false //
  const { meta } = data
  const { isLegal, illegalReason, illegalWords } = meta

  return (
    <Wrapper onClick={() => expandComment(data.id)}>
      <IconButton
        path="shape/expand-all.svg"
        hint="展开讨论"
        left={-1}
        right={12}
      />
      <Avatar
        src={data.author.avatar}
        fallback={<ImgFallback user={data.author} size={16} right={10} />}
      />
      {isLegal ? (
        <CommentBody
          dangerouslySetInnerHTML={{
            __html: data.bodyHtml,
          }}
        />
      ) : (
        <IllegalBar
          illegalReason={illegalReason}
          illegalWords={illegalWords}
          isFold
        />
      )}

      <SpaceGrow />

      {data.repliesCount > 0 && (
        <RepliesHint>[ {data.repliesCount} 条回复 ]</RepliesHint>
      )}

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
