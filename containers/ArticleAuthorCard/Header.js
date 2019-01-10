import React from 'react'
import PropTypes from 'prop-types'

import { FollowButton } from '../../components'

import { Wrapper, Title, FollowWrapper } from './styles/header'
import { onFollow, onUndoFollow } from './logic'

const Header = ({ title, user: { id, viewerHasFollowed }, isSelfViewing }) => (
  <Wrapper>
    <Title>{title}</Title>
    <FollowWrapper>
      {!isSelfViewing ? (
        <FollowButton
          hasFollowd={viewerHasFollowed}
          userId={id}
          onFollow={onFollow}
          onUndoFollow={onUndoFollow}
        />
      ) : null}
    </FollowWrapper>
  </Wrapper>
)

Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    viewerHasFollowed: PropTypes.bool,
  }).isRequired,
  title: PropTypes.string.isRequired,
  isSelfViewing: PropTypes.bool,
}

Header.defaultProps = {
  isSelfViewing: false,
}

export default Header
