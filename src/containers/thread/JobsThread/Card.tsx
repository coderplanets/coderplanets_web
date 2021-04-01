/*
 * cards for job MasonryCards view
 */

import React from 'react'

import { ICON } from '@/config'
import { buildLog } from '@/utils'

import { Space } from '@/components/Common'
import IconText from '@/components/IconText'

import {
  JWrapper,
  JHeader,
  JTeamScale,
  JTitle,
  JInfo,
  JSallery,
  JBody,
  JFooter,
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
    <JWrapper key={item.id}>
      <JHeader>
        <JTitle>{item.title}</JTitle>
        <JTeamScale>10~15 人</JTeamScale>
      </JHeader>
      <JInfo>
        <JSallery>成都</JSallery>
        <JSallery>前端</JSallery>
        <JSallery>15k-30k</JSallery>
      </JInfo>
      <JBody>{item.body}</JBody>
      <JFooter>
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
      </JFooter>
    </JWrapper>
  )
}

export default React.memo(Card)
