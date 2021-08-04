import { FC, memo } from 'react'

import { ICON_BASE } from '@/config'

import FollowButton from '@/components/Buttons/FollowButton'

import {
  Wrapper,
  Icon,
  Name,
  JoinDesc,
} from '../../styles/desktop_view/post_layout/sub_community'

// type TProps = {
// }

const SubCommunity: FC = () => {
  return (
    <Wrapper>
      <Icon src={`${ICON_BASE}/pl/javascript.svg`} />
      <Name>javascript</Name>
      <JoinDesc>34 关注者</JoinDesc>
      <FollowButton size="tiny" fakeLoading />
    </Wrapper>
  )
}

export default memo(SubCommunity)
