/*
 *
 * PostItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import TimeAgo from 'timeago-react'

import { ICON_CMD } from '../../config'
import { AvatarsRow, InlineTags } from '..'

import {
  Wrapper,
  Avatar,
  TitleLink,
  LinkIcon,
  Main,
  TopHalf,
  Breif,
  Title,
  SecondHalf,
  BodyDigest,
  Extra,
} from './styles'

import { cutFrom, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:PostItem:index')
/* eslint-enable no-unused-vars */

const PostItem = ({ entry, active, onTitleSelect }) => (
  <Wrapper current={entry} active={active}>
    <div>
      <Avatar src={entry.author.avatar} alt="avatar" />
    </div>
    <Main>
      <TopHalf>
        <Breif onClick={onTitleSelect.bind(this, entry)}>
          <Title>{entry.title}</Title>
          <TitleLink>
            <LinkIcon src={`${ICON_CMD}/link.svg`} />
            <span style={{ marginLeft: 9 }}>github</span>
          </TitleLink>
          <InlineTags data={entry.tags} />
        </Breif>
        <div>
          <AvatarsRow
            users={entry.commentsParticipators}
            total={entry.commentsParticipatorsCount}
          />
        </div>
      </TopHalf>

      <SecondHalf>
        <Extra>
          {entry.author.nickname} 发布于:{' '}
          <TimeAgo datetime={entry.insertedAt} locale="zh_CN" /> ⁝ 浏览:{' '}
          {entry.views}
        </Extra>
        <BodyDigest>{cutFrom(entry.digest, 90)}</BodyDigest>
      </SecondHalf>
    </Main>
  </Wrapper>
)

PostItem.propTypes = {
  // https://www.npmjs.com/package/prop-types
  /* entry: PropTypes.object.isRequired, */
  active: PropTypes.object,

  entry: PropTypes.shape({
    title: PropTypes.string,
    digest: PropTypes.string,
    views: PropTypes.number,

    author: PropTypes.shape({
      nickname: PropTypes.string,
      avatar: PropTypes.string,
    }),
  }).isRequired,

  onTitleSelect: PropTypes.func,
}

PostItem.defaultProps = {
  onTitleSelect: debug,
  active: {},
}

export default PostItem
