import React from 'react'
import TimeAgo from 'timeago-react'

// import { ICON_CMD } from '@config'
import { cutFrom } from '@utils'
import InlineCommunities from '@components/InlineCommunities'
import InlineTags from '@components/InlineTags'
import DotDivider from '@components/DotDivider'

import {
  Wrapper,
  Header,
  Middle,
  Footer,
  Title,
  CommunitiesWrapper,
  SalaryWrapper,
  Background,
  TagsWrapper,
  Degree,
  Exp,
  ExpLabel,
  ExpDivider,
  Extra,
  PublishInfo,
} from './styles/job_info'

const JobInfo = ({
  entry: {
    author,
    insertedAt,
    views,
    commentsCount,
    title,
    salary,
    education,
    exp,
    tags,
    communities,
  },
  onPreview,
  onAuthorSelect,
  community,
}) => (
  <Wrapper>
    <Header>
      <Title onClick={onPreview}>{cutFrom(title, 30)}</Title>
      <CommunitiesWrapper>
        <InlineCommunities data={communities} show={community === 'home'} />
      </CommunitiesWrapper>
    </Header>
    <Middle onClick={onPreview}>
      <SalaryWrapper>{salary}</SalaryWrapper>
      <Background>
        <Degree>{education}</Degree>
        <ExpDivider>&</ExpDivider>
        <Exp>
          <ExpLabel>经验 </ExpLabel>
          {exp}
        </Exp>
      </Background>
      <TagsWrapper>
        <InlineTags data={tags} />
      </TagsWrapper>
    </Middle>
    <Footer>
      <Extra>
        <PublishInfo onClick={onAuthorSelect.bind(this, author)}>
          {author.nickname} <DotDivider />
          <TimeAgo datetime={insertedAt} locale="zh_CN" />
          <DotDivider />
        </PublishInfo>
        浏览:
        {views}
        <DotDivider />
        评论:
        {commentsCount}
      </Extra>
    </Footer>
  </Wrapper>
)

export default JobInfo
