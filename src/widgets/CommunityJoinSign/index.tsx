/*
 * CommunityJoinSign
 */

import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils/logger'

import FollowButton from '@/widgets/Buttons/FollowButton'

import {
  Wrapper,
  PopContentWrapper,
  PopHeader,
  PopHeaderIcon,
  PopHeaderText,
  PopHighlight,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:VerifiedSign:index')

const PopContent = () => {
  return (
    <PopContentWrapper>
      <PopHeader>
        <PopHeaderIcon src={`${ICON_CMD}/verified.svg`} />
        <PopHeaderText>官方认证</PopHeaderText>
      </PopHeader>
      <div>
        我们已通过各种渠道证实该社区为{' '}
        <PopHighlight>communityTitle</PopHighlight> 官方开通
      </div>
    </PopContentWrapper>
  )
}

// type TProps = {}

const CommunityJoinSign: FC = () => {
  const hasFollowed = false
  return (
    <Wrapper hasFollowed={hasFollowed}>
      <FollowButton
        followText="&nbsp;加 入&nbsp;"
        followingText="已加入"
        size="tiny"
        hasFollowed={hasFollowed}
      />
    </Wrapper>
  )
}

export default memo(CommunityJoinSign)
