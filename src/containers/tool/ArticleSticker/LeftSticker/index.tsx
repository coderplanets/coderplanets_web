import { FC } from 'react'

import type { TArticle } from '@/spec'

import { SVG } from '@/constant'
import { shareTo } from '@/utils/helper'
import IconButton from '@/widgets/Buttons/IconButton'
import Upvote from '@/widgets/Upvote'

import {
  Wrapper,
  InnerWrapper,
  BackWrapper,
  ArrowIcon,
  BackText,
  Divider,
} from '../styles/left_sticker'
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
        <IconButton icon={SVG.SHARE} onClick={shareTo} size={16} mRight={2} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default LeftSticker
