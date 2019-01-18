import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON_CMD } from '../../config'

import InlineTags from '../InlineTags'

import {
  SmallAvatar,
  TitleLink,
  LinkIcon,
  Main,
  TopHalf,
  Breif,
  Title,
  SecondHalf,
  Extra,
  CommentWrapper,
  CommentIcon,
  CommentNum,
} from './styles'
// import { Wrapper } from './styles'
import { cutFrom, parseDomain } from '../../utils'

const ListView = ({ entry, onPreview }) => (
  <React.Fragment>
    <SmallAvatar src={entry.author.avatar} />
    <Main>
      <TopHalf>
        <Breif onClick={onPreview.bind(this, entry)}>
          <Title>{cutFrom(entry.title, 45)}</Title>
          {entry.linkAddr ? (
            <TitleLink>
              <LinkIcon src={`${ICON_CMD}/link.svg`} />
              <span style={{ marginLeft: 9 }}>
                {parseDomain(entry.linkAddr)}
              </span>
            </TitleLink>
          ) : null}
          <InlineTags data={entry.tags} />
        </Breif>
        <CommentWrapper>
          <CommentIcon src={`${ICON_CMD}/list_comments.svg`} />
          <CommentNum>
            {entry.commentsCount} / {entry.views}
          </CommentNum>
        </CommentWrapper>
      </TopHalf>

      <SecondHalf>
        <Extra>
          {entry.author.nickname} 发布于:{' '}
          <TimeAgo datetime={entry.insertedAt} locale="zh_CN" />
        </Extra>
      </SecondHalf>
    </Main>
  </React.Fragment>
)

export default ListView
