import { FC, memo } from 'react'

import { ICON } from '@/config'
import Upvote from '@/components/Upvote'
import DotDivider from '@/components/DotDivider'
import IconText from '@/components/IconText'

import { Wrapper, PublishWrapper, Bottom } from './styles/footer'

const Footer: FC = () => {
  return (
    <Wrapper>
      <PublishWrapper>
        mydearxym <DotDivider space={6} /> 3 天前
      </PublishWrapper>
      <Bottom>
        {/* 你和 头像 Raw 等 24 人觉得很赞 -- 评论 35，收藏, 分享, 举报(more 里面) */}
        <Upvote />
        <IconText iconSrc={`${ICON}/article/comment.svg`} size="medium">
          9
        </IconText>
      </Bottom>
    </Wrapper>
  )
}

export default memo(Footer)
