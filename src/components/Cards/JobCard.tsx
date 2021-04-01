/*
 * cards for job MasonryCards view
 */

import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON } from '@/config'
import { buildLog } from '@/utils'

import { Space } from '@/components/Common'
import IconText from '@/components/IconText'

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

const Card: React.FC<TProps> = ({
  item: { id, title, body, author, insertedAt, commentsCount },
}) => {
  return (
    <Wrapper key={id}>
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
          {/* TODO: extract a community tooltip */}
          <Keyword>React</Keyword>
          <Keyword>TS</Keyword>
        </TechKeywords>
      </Footer>
    </Wrapper>
  )
}

export default React.memo(Card)
