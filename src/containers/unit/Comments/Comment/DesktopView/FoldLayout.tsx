import { FC, memo } from 'react'
import TimeAgo from 'timeago-react'

import type { TComment } from '@/spec'
import { cutRest } from '@/utils'
import { ICON } from '@/config'

import ImgFallback from '@/components/ImgFallback'
import { IconButton } from '@/components/Buttons'
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
  const pined = data.id === '360' || data.id === '377'
  const isAuthorUpvoted =
    data.id === '377' || data.id === '355' || data.id === '359'
  const isSolution = data.id === '358' || data.id === '355'

  return (
    <Wrapper pined={pined}>
      <IconButton
        path="shape/expand-all.svg"
        hint="展开评论"
        onClick={() => expandComment(data.id)}
      />
      <Avatar
        src={data.author.avatar}
        fallback={<ImgFallback user={data.author} size={16} right={10} />}
      />
      <CommentBody>{cutRest(data.body, 30)}</CommentBody>
      <SpaceGrow />
      {isSolution && (
        <SolutionIcon
          isAuthorUpvoted={isAuthorUpvoted}
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
