/*
 *
 * VideoItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import TimeAgo from 'timeago-react'

import { ICON_CMD } from '../../config'

import { Space } from '../BaseStyled'

import {
  Wrapper,
  PosterWrapper,
  Poster,
  Duration,
  TitleLink,
  LinkIcon,
  ViewIcon,
  Main,
  TopHalf,
  Breif,
  Title,
  TitleTag,
  SecondHalf,
  BodyDigest,
  Extra,
  OriginalAuthorLink,
  TitleTagDot,
  BottomAuthorWrapper,
  ButtonAvatar,
  ButtonNickname,
} from './styles'

import { makeDebugger, cutFrom } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:VideoItem:index')
/* eslint-enable no-unused-vars */

const VideoItem = ({ entry, active, onTitleSelect }) => (
  <Wrapper active={active.id && entry.id !== active.id}>
    <PosterWrapper>
      <Poster src={entry.author.avatar} alt="poster" />
      <Duration>{entry.duration}</Duration>
    </PosterWrapper>
    <Main>
      <TopHalf>
        <Breif onClick={onTitleSelect.bind(this, entry)}>
          <Title>{entry.title}</Title>
          <TitleLink>
            <LinkIcon src={`${ICON_CMD}/link.svg`} />
            <span style={{ marginLeft: 9 }}>youtube</span>
          </TitleLink>
          <TitleTag>
            <TitleTagDot />
            elixir
          </TitleTag>
        </Breif>
      </TopHalf>

      <SecondHalf>
        <Extra>
          <OriginalAuthorLink href={entry.originalAuthorLink} target="_blank">
            {entry.originalAuthor}
          </OriginalAuthorLink>{' '}
          <Space right="2px" />⁝<Space right="2px" />
          <TimeAgo datetime={entry.insertedAt} locale="zh_CN" />
          <Space right="2px" />⁝<Space right="2px" />
          <ViewIcon src={`${ICON_CMD}/refer.svg`} /> <Space right="2px" />
          {entry.views}
        </Extra>
        <BodyDigest>{cutFrom(entry.desc, 90)}</BodyDigest>
      </SecondHalf>
      <BottomAuthorWrapper>
        <ButtonAvatar src={entry.author.avatar} />
        <ButtonNickname>{entry.author.nickname}</ButtonNickname>
      </BottomAuthorWrapper>
    </Main>
  </Wrapper>
)

VideoItem.propTypes = {
  active: PropTypes.object,

  entry: PropTypes.shape({
    title: PropTypes.string,
    views: PropTypes.number,

    author: PropTypes.shape({
      nickname: PropTypes.string,
      avatar: PropTypes.string,
    }),
  }).isRequired,

  onTitleSelect: PropTypes.func,
}

VideoItem.defaultProps = {
  onTitleSelect: debug,
  active: {},
}

export default VideoItem
