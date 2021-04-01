/*
 * cards for job MasonryCards view
 */

import React from 'react'

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
} from './styles/card'

/* eslint-disable-next-line */
const log = buildLog('c:Job:Card')

type TProps = {
  item: {
    id: string
    title: string
    body: string
  }
}

const Card: React.FC<TProps> = ({ item }) => {
  return (
    <Wrapper key={item.id}>
      <Header>
        <Title>{item.title}</Title>
        <TeamScale>10~15 人</TeamScale>
      </Header>
      <Info>
        <Sallery>成都</Sallery>
        <Sallery>前端</Sallery>
        <Sallery>15k-30k</Sallery>
      </Info>
      <Body>{item.body}</Body>
      <Footer>
        <Publisher>
          <Avatar src="https://avatars.githubusercontent.com/u/809410?s=64&v=4" />
          <PublisherInfo>
            <AuthorName>mydearxym</AuthorName>
            <PublishExtra>
              <IconText iconSrc={`${ICON}/edit/publish-pen.svg`}>
                三天前
              </IconText>
              <Space right={10} />
              <IconText iconSrc={`${ICON}/article/comment.svg`}>22</IconText>
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
