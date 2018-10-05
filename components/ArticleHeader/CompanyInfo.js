import React from 'react'
import TimeAgo from 'timeago-react'

import { DotDivider } from '..'

import {
  Wrapper,
  Logo,
  Title,
  PublishAt,
  Username,
} from './styles/company_info'

const CompanyInfo = ({ company, insertedAt, author }) => (
  <Wrapper>
    <Logo src={company.logo} alt="user_avatar" />
    <div>
      <Title>{company.title}</Title>
      <PublishAt>
        <Username>{author.nickname}</Username>
        <DotDivider />
        发布于: <TimeAgo datetime={insertedAt} locale="zh_CN" />
      </PublishAt>
    </div>
  </Wrapper>
)

export default CompanyInfo
