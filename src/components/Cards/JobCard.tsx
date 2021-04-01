/*
 * cards for job MasonryCards view
 */

import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON } from '@/config'
import { buildLog } from '@/utils'

import { Space } from '@/components/Common'
import IconText from '@/components/IconText'
import Tooltip from '@/components/Tooltip'

import CommunityCard from './CommunityCard'

import {
  Wrapper,
  Header,
  TeamScale,
  Title,
  Info,
  Sallery,
  Body,
  Footer,
  Publisher,
  Avatar,
  PublisherInfo,
  AuthorName,
  PublishExtra,
  TechKeywords,
  Keyword,
} from './styles/job_card'

/* eslint-disable-next-line */
const log = buildLog('c:JobCard')

type TProps = {
  item: {
    id: string
    title: string
    body: string
    commentsCount: number
    insertedAt: string
    author: {
      title: string
      avatar: string
    }
  }
}

const JobCard: React.FC<TProps> = ({
  item: { title, body, author, insertedAt, commentsCount },
}) => {
  const fakeCommunity = {
    id: '1',
    title: 'react',
    raw: 'react',
    logo:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/static/new-logo.jpg',
    desc:
      'maybe the most popular UI framework for web, maybe the most popular UI framework for web',
    subscribersCount: 100,
  }

  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <TeamScale>10~15 人</TeamScale>
      </Header>
      <Info>
        <Sallery>成都</Sallery>
        <Sallery>前端</Sallery>
        <Sallery>15k-30k</Sallery>
      </Info>
      <Body>{body}</Body>
      <Footer>
        <Publisher>
          <Avatar src={author.avatar} />
          <PublisherInfo>
            <AuthorName>{author.title}</AuthorName>
            <PublishExtra>
              <IconText iconSrc={`${ICON}/edit/publish-pen.svg`}>
                <TimeAgo datetime={insertedAt} locale="zh_CN" />
              </IconText>
              <Space right={10} />
              <IconText iconSrc={`${ICON}/article/comment.svg`}>
                {commentsCount}
              </IconText>
            </PublishExtra>
          </PublisherInfo>
        </Publisher>
        <TechKeywords>
          {/* @ts-ignore  */}
          <Tooltip
            content={<CommunityCard item={fakeCommunity} />}
            placement="top"
          >
            <Keyword>React</Keyword>
          </Tooltip>
          <Keyword>TS</Keyword>
        </TechKeywords>
      </Footer>
    </Wrapper>
  )
}

export default React.memo(JobCard)
