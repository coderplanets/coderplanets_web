import React from 'react'
import T from 'prop-types'

import FollowButton from '@components/FollowButton'

import { Wrapper, Title, FollowWrapper } from './styles/header'
import { onFollow, onUndoFollow } from './logic'

const Header = ({ title, user: { id, viewerHasFollowed }, isSelfViewing }) => (
  <Wrapper>
    <Title>{title}</Title>
    <FollowWrapper>
      {id && !isSelfViewing && (
        <FollowButton
          hasFollowd={viewerHasFollowed}
          userId={id}
          onFollow={onFollow}
          onUndoFollow={onUndoFollow}
        />
      )}
    </FollowWrapper>
  </Wrapper>
)

Header.propTypes = {
  user: T.shape({
    id: T.string,
    viewerHasFollowed: T.bool,
  }).isRequired,
  title: T.string.isRequired,
  isSelfViewing: T.bool,
}

Header.defaultProps = {
  isSelfViewing: false,
}

export default Header
