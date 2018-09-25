/*
 *
 * VideoItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import TimeAgo from 'timeago-react'

import { ICON_CMD } from '../../config'

import DotDivider from '../DotDivider'
import { Space } from '../BaseStyled'
import InlineTags from '../InlineTags'

import {
  Wrapper,
  PosterWrapper,
  Poster,
  Duration,
  ViewIcon,
  Main,
  TopHalf,
  Breif,
  Title,
  SecondHalf,
  BodyDigest,
  Extra,
  OriginalAuthorLink,
  BottomAuthorWrapper,
  ButtonAvatar,
  ButtonNickname,
  InsertTime,
} from './styles'

import SourceLink from './SourceLink'

import { makeDebugger, cutFrom } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:VideoItem:index')
/* eslint-enable no-unused-vars */

const VideoItem = ({ entry, active, onTitleSelect }) => {
  debug('entry: ', entry)

  return (
    <Wrapper active={active.id && entry.id !== active.id}>
      <PosterWrapper>
        <Poster src={entry.poster} alt="poster" />
        <Duration>{entry.duration}</Duration>
      </PosterWrapper>
      <Main>
        <TopHalf>
          <Breif onClick={onTitleSelect.bind(this, entry)}>
            <Title>{entry.title}</Title>
            <SourceLink value={entry.source} />
            <InlineTags data={entry.tags} />
          </Breif>
        </TopHalf>

        <SecondHalf>
          <Extra>
            <OriginalAuthorLink href={entry.originalAuthorLink} target="_blank">
              {entry.originalAuthor}
            </OriginalAuthorLink>{' '}
            <Space right="6px" />⁝<Space right="6px" />
            <TimeAgo datetime={entry.publishAt} locale="zh_CN" />
            <Space right="6px" />⁝<Space right="6px" />
            <ViewIcon src={`${ICON_CMD}/refer.svg`} /> <Space right="2px" />
            {entry.views}
          </Extra>
          <BodyDigest>{cutFrom(entry.desc, 90)}</BodyDigest>
        </SecondHalf>
        <BottomAuthorWrapper>
          <ButtonAvatar src={entry.author.avatar} />
          <ButtonNickname>{entry.author.nickname}</ButtonNickname>
          <InsertTime>
            <DotDivider />
            <TimeAgo datetime={entry.insertedAt} locale="zh_CN" />
          </InsertTime>
        </BottomAuthorWrapper>
      </Main>
    </Wrapper>
  )
}

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
