import React from 'react'
import TimeAgo from 'timeago-react'

// import { ICON_CMD } from '../../config'
import InlineTags from '../InlineTags'
import DotDivider from '../DotDivider'

import {
  Wrapper,
  Header,
  Middle,
  Footer,
  Title,
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
  entry: { author, insertedAt, views, title, salary, education, exp, tags },
}) => (
  <Wrapper>
    <Header>
      <Title>{cutFrom(title, 30)}</Title>
    </Header>
    <Middle>
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
    <Footer>
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
