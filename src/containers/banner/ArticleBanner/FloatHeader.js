import React from 'react'

import { ICON_CMD } from '@config'

import DotDivider from '@components/DotDivider'
import { SpaceGrow } from '@components/BaseStyled'

import {
  Wrapper,
  InnerWrapper,
  ArticleWrapper,
  Title,
  ReactionWrapper,
  ReactionNum,
  ReactionIcon,
} from './styles/float_header'

const FloatHeader = ({ show, data }) => {
  const {
    title,
    viewerHasStarred,
    starredCount,
    // starLoading,
    // favoriteLoading,
    viewerHasFavorited,
    favoritedCount,
  } = data
  return (
    <Wrapper show={show}>
      <InnerWrapper>
        <ArticleWrapper>
          <Title>{title}</Title>
          <SpaceGrow />
          <ReactionWrapper>
            {viewerHasStarred ? (
              <ReactionIcon src={`${ICON_CMD}/heart_solid.svg`} active />
            ) : (
              <ReactionIcon src={`${ICON_CMD}/heart_frame.svg`} />
            )}
            <ReactionNum>{starredCount}</ReactionNum>
            <DotDivider space="8px" radius="3px" />
            {viewerHasFavorited ? (
              <ReactionIcon src={`${ICON_CMD}/collect_solid.svg`} active />
            ) : (
              <ReactionIcon src={`${ICON_CMD}/collect_frame.svg`} />
            )}
            <ReactionNum>{favoritedCount}</ReactionNum>
          </ReactionWrapper>
        </ArticleWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(FloatHeader)
