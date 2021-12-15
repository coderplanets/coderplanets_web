/*
 * CommunityJoinSign
 */

import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils/logger'

// import FollowButton from '@/widgets/Buttons/FollowButton'

import {
  Wrapper,
  PopContentWrapper,
  PopHeader,
  PopHeaderIcon,
  PopHeaderText,
  PopHighlight,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:CommunityJoinSign:index')

export const FollowButton = dynamic(
  () => import('@/widgets/Buttons/FollowButton'),
  {
    ssr: false,
  },
)

// const PopContent = () => {
//   return (
//     <PopContentWrapper>
//       <PopHeader>
//         <PopHeaderIcon src={`${ICON_CMD}/verified.svg`} />
//         <PopHeaderText>官方认证</PopHeaderText>
//       </PopHeader>
//       <div>
//         我们已通过各种渠道证实该社区为{' '}
//         <PopHighlight>communityTitle</PopHighlight> 官方开通
//       </div>
//     </PopContentWrapper>
//   )
// }

type TProps = {
  hasFollowed?: boolean
  onFollow?: () => void
  onUndoFollow?: () => void
}

const CommunityJoinSign: FC<TProps> = ({
  hasFollowed = false,
  onFollow = log,
  onUndoFollow = log,
}) => {
  return (
    <Wrapper hasFollowed={hasFollowed}>
      <FollowButton
        followText="&nbsp;加 入&nbsp;"
        followingText="已加入"
        size="tiny"
        hasFollowed={hasFollowed}
        onFollow={onFollow}
        onUndoFollow={onUndoFollow}
      />
    </Wrapper>
  )
}

export default memo(CommunityJoinSign)
