/*
 *
 * VideoItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import TimeAgo from 'timeago-react'

import { ICON_CMD } from '@config'
import { makelogger, cutFrom, C11N } from '@utils'

import DotDivider from '@components/DotDivider'
import VideoSourceInfo from '@components/VideoSourceInfo'
import { Space } from '@components/BaseStyled'
import InlineTags from '@components/InlineTags'
import ArticleItemPrefixLabel from '@components/ArticleItemPrefixLabel'

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

import { getOpacity } from './helper'

/* eslint-disable-next-line */
const log = makelogger('c:VideoItem:index')

const VideoItem = ({ entry, active, onPreview, accountInfo }) => (
  <Wrapper
    opacity={getOpacity(entry, active, accountInfo)}
    hover={accountInfo.customization.contentHover}
  >
    <ArticleItemPrefixLabel entry={entry} accountInfo={accountInfo} />
    <PosterWrapper>
      <Poster src={entry.thumbnil} alt="poster" />
      <Duration>{entry.duration}</Duration>
    </PosterWrapper>
    <Main>
      <TopHalf>
        <Breif onClick={onPreview.bind(this, entry)}>
          <Title>{entry.title}</Title>
          <VideoSourceInfo value={entry.source} />
          <InlineTags data={entry.tags} />
        </Breif>
      </TopHalf>

      <SecondHalf>
        <Extra>
          <OriginalAuthorLink href={entry.originalAuthorLink} target="_blank">
            {entry.originalAuthor}
          </OriginalAuthorLink>{' '}
          <DotDivider />
          <TimeAgo datetime={entry.publishAt} locale="zh_CN" />
          <Space right="8px" />
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

  accountInfo: PropTypes.shape({
    isLogin: PropTypes.bool,
    customization: PropTypes.shape({
      contentsLayout: PropTypes.oneOf([C11N.DIGEST, C11N.LIST]),
      markViewed: PropTypes.bool,
      contentHover: PropTypes.bool,
      displayDensity: PropTypes.oneOf(['20', '25', '30']),
    }),
  }),
  onPreview: PropTypes.func,
}

VideoItem.defaultProps = {
  onPreview: log,
  active: {},
  accountInfo: {
    isLogin: false,
    customization: PropTypes.shape({
      contentsLayout: C11N.DIGEST,
      contentHover: true,
      markViewed: true,
      displayDensity: '20',
    }),
  },
}

export default VideoItem
