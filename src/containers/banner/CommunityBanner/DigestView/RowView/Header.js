import React from 'react'

import { ICON_CMD } from '@/config'

import {
  Wrapper,
  FollowWrapper,
  FollowIcon,
  HomeIcon,
} from '../../styles/digest_view/row_view/header'

const Header = () => {
  // `${ICON_CMD}/navi/space_in.svg`
  return (
    <Wrapper>
      <FollowWrapper>
        <FollowIcon src={`${ICON_CMD}/plus_follow.svg`} />
        关注
      </FollowWrapper>
      <div>
        <HomeIcon src={`${ICON_CMD}/navi/space_in.svg`} />
      </div>
    </Wrapper>
  )
}

export default Header
