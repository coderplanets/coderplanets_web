import { FC } from 'react'

import type { TArticle } from '@/spec'

import Share from '@/containers/tool/Share'
import Upvote from '@/widgets/Upvote'

import { Wrapper, InnerWrapper, Divider } from '../styles/left_sticker'
import { handleUpvote } from '../logic'

type TProps = {
  show: boolean
  article: TArticle
  testid?: string
}

const LeftSticker: FC<TProps> = ({
  show,
  article,
  testid = 'article-sticker-left-sidebar',
}) => {
  const { upvotesCount, viewerHasUpvoted, meta } = article

  return (
    <Wrapper show={show} testid={testid}>
      <InnerWrapper>
        {/* <BackWrapper>
        <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} />
        <BackText>返回社区</BackText>
      </BackWrapper> */}

        <Upvote
          count={upvotesCount}
          avatarList={meta.latestUpvotedUsers}
          type="sticker"
          viewerHasUpvoted={viewerHasUpvoted}
          onAction={handleUpvote}
        />
        <Divider />
        <Share left={5} size={17} right={3} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default LeftSticker
