import React from 'react'
import TimeAgo from 'timeago-react'

import DotDivider from 'components/DotDivider'
import { ICON_CMD } from 'config'

import { cutFrom } from 'utils'
import {
  Wrapper,
  Logo,
  Title,
  PublishAt,
  Username,
  HomtPage,
  HomeIcon,
  HomepageLink,
} from './styles/company_info'

const CompanyInfo = ({ company, insertedAt, author }) => (
  <Wrapper>
    <Logo src={company.logo} alt="user_avatar" />
    <div>
      <Title>{cutFrom(company.title, 14)}</Title>
      <HomtPage>
        <HomeIcon src={`${ICON_CMD}/home.svg`} />
        <HomepageLink
          href="https://github.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://github.com/mydearxym
        </HomepageLink>
      </HomtPage>
      <PublishAt>
        <Username>{author.nickname}</Username>
        <DotDivider />
        发布于: <TimeAgo datetime={insertedAt} locale="zh_CN" />
      </PublishAt>
    </div>
  </Wrapper>
)

export default CompanyInfo
