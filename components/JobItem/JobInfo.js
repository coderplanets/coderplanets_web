import React from 'react'
import TimeAgo from 'timeago-react'

// import { ICON_CMD } from '../../config'
import InlineCommunities from '../InlineCommunities'
import InlineTags from '../InlineTags'
import DotDivider from '../DotDivider'

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
  ExpDivider,
  Extra,
} from './styles/job_info'

import { cutFrom } from '../../utils'

const JobInfo = ({
  entry: {
    author,
    insertedAt,
    views,
    title,
    salary,
    education,
    exp,
    tags,
    communities,
    onPreview,
  },
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
        <Exp>经验 {exp}</Exp>
      </Background>
      <TagsWrapper>
        <InlineTags data={tags} />
      </TagsWrapper>
    </Middle>
    <Footer onClick={onPreview}>
      <Extra>
        {author.nickname} <DotDivider />
        <TimeAgo datetime={insertedAt} locale="zh_CN" />
        <DotDivider />
        浏览:
        {views}
        <DotDivider />
        评论:
        {views}
      </Extra>
    </Footer>
  </Wrapper>
)

export default JobInfo
