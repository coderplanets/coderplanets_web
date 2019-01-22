import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON_CMD } from 'config'
import { cutFrom, parseDomain } from 'utils'
import InlineTags from '../InlineTags'
import DotDivider from '../DotDivider'

import {
  Wrapper,
  CompanyLogo,
  TitleLink,
  LinkIcon,
  Salary,
  Main,
  TopHalf,
  Breif,
  Title,
  SecondHalf,
  TagsWrapper,
  Extra,
  CommentWrapper,
  CommentIcon,
  CommentNum,
} from './styles/list_view'
// import { Wrapper } from './styles'

const ListView = ({ entry, onPreview }) => (
  <Wrapper>
    <CompanyLogo src={entry.companyLogo} />
    <Main>
      <TopHalf>
        <Breif onClick={onPreview.bind(this, entry)}>
          <Title>
            【 {entry.company} 】{cutFrom(entry.title, 45)}
          </Title>
          {entry.linkAddr && (
            <TitleLink>
              <LinkIcon src={`${ICON_CMD}/link.svg`} />
              <span style={{ marginLeft: 9 }}>
                {parseDomain(entry.linkAddr)}
              </span>
            </TitleLink>
          )}
          <TagsWrapper>
            <InlineTags data={entry.tags} />
          </TagsWrapper>
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
          <Salary>{entry.salary}</Salary>
          <DotDivider />
          {entry.author.nickname}
          {entry.copyRight === 'original' ? (
            <span>&nbsp;发布于:</span>
          ) : (
            <span>&nbsp;搬运于:</span>
          )}
          <TimeAgo datetime={entry.insertedAt} locale="zh_CN" />
        </Extra>
      </SecondHalf>
    </Main>
  </Wrapper>
)

export default ListView
