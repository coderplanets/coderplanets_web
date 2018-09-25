import React from 'react'
import TimeAgo from 'timeago-react'

// import { ICON_CMD } from '../../config'
import DotDivider from '../DotDivider'

import {
  Wrapper,
  Header,
  Middle,
  Footer,
  Title,
  SalaryWrapper,
  Background,
  Degree,
  Exp,
  ExpDivider,
  Extra,
} from './styles/job_info'

import { cutFrom } from '../../utils'

const JobInfo = ({ entry }) => (
  <Wrapper>
    <Header>
      <Title>{cutFrom(entry.title, 50)}</Title>
    </Header>
    <Middle>
      <SalaryWrapper>20k-30k</SalaryWrapper>
      <Background>
        <Degree>本科</Degree>
        <ExpDivider>&</ExpDivider>
        <Exp>经验 1-3 年</Exp>
      </Background>
    </Middle>
    <Footer>
      <Extra>
        {entry.author.nickname} <DotDivider />
        <TimeAgo datetime={entry.insertedAt} locale="zh_CN" />
        <DotDivider />
        浏览:
        {entry.views}
        <DotDivider />
        评论:
        {entry.views}
      </Extra>
    </Footer>
  </Wrapper>
)

export default JobInfo
