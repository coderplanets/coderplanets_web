/*
 * cards for job MasonryCards view
 */

import { FC, memo } from 'react'
import TimeAgo from 'timeago-react'

import { ICON } from '@/config'
import { buildLog, uid } from '@/utils'

import { Space, SpaceGrow } from '@/components/Common'
import IconText from '@/components/IconText'
import Tooltip from '@/components/Tooltip'

import CommunityCard from './CommunityCard'

import {
  Wrapper,
  Header,
  TeamScale,
  Title,
  ShareIcon,
  Info,
  Sallery,
  Body,
  Footer,
  PublisherInfo,
  AuthorName,
  PublishExtra,
  PublishTime,
  TechstackWrapper,
  TechTitle,
  TechKeywords,
  Keyword,
  ImagesWrapper,
  PreviewImage,
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
    images?: string[]
  }
}

const JobCard: FC<TProps> = ({
  item: { title, body, author, insertedAt, commentsCount, images },
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
        <ShareIcon src={`${ICON}/article/share.svg`} />
      </Header>
      <Info>
        <Sallery>成都</Sallery>
        <Sallery>前端</Sallery>
        <Sallery>15k-30k</Sallery>
        <SpaceGrow />
        <TeamScale>10~15 人</TeamScale>
      </Info>
      <Body>{body}</Body>
      {images && (
        <ImagesWrapper>
          {images.map((imageSrc) => (
            <PreviewImage key={uid.gen()} src={imageSrc} />
          ))}
        </ImagesWrapper>
      )}
      <Footer>
        <TechstackWrapper>
          <TechTitle>技术栈</TechTitle>
          <TechKeywords>
            <Tooltip
              content={<CommunityCard item={fakeCommunity} />}
              placement="top"
            >
              <Keyword>React</Keyword>
            </Tooltip>
            <Keyword>TS</Keyword>
          </TechKeywords>
        </TechstackWrapper>

        <PublisherInfo>
          <AuthorName>{author.title}</AuthorName>
          <PublishExtra>
            <PublishTime>
              <TimeAgo datetime={insertedAt} locale="zh_CN" />
            </PublishTime>
            <Space right={10} />
            <IconText iconSrc={`${ICON}/article/comment.svg`} size="medium">
              {commentsCount}
            </IconText>
          </PublishExtra>
        </PublisherInfo>
      </Footer>
    </Wrapper>
  )
}

export default memo(JobCard)
