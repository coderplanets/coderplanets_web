/*
 *
 * List
 *
 */

import React from 'react'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { SpaceGrow } from '@components/BaseStyled'

import {
  Wrapper,
  ListItemWrapper,
  Header,
  Icon,
  InfoIcon,
  Timestamp,
  Title,
} from './styles/list'

/* eslint-disable-next-line */
const log = buildLog('c:NewsBar:index')

const List = () => {
  return (
    <Wrapper>
      <ListItemWrapper>
        <Header>
          <Icon src={`${ICON_CMD}/hot/hackernews.jpeg`} />
          hackernews
          <InfoIcon src={`${ICON_CMD}/hot/info.svg`} />
          <SpaceGrow />
          <Timestamp>3天前</Timestamp>
        </Header>
        <Title>Thank HN: You helped me get a new job</Title>
      </ListItemWrapper>
      <ListItemWrapper>
        <Header>
          <Icon src={`${ICON_CMD}/hot/techcrunch.png`} />
          techcrunch
          <SpaceGrow />
          <Timestamp>3天前</Timestamp>
        </Header>
        <Title>
          atch Critical Cryptographic Vulnerability in Microsoft Windows [pdf]
        </Title>
      </ListItemWrapper>
      <ListItemWrapper>
        <Header>
          <Icon src={`${ICON_CMD}/hot/infoq.jpg`} />
          infoQ 中文站
          <InfoIcon src={`${ICON_CMD}/hot/info.svg`} />
          <SpaceGrow />
          <Timestamp>2天前</Timestamp>
        </Header>
        <Title>苹果走钢丝：为iPhone隐私大战FBI，还是屈服于特朗普？</Title>
      </ListItemWrapper>

      <ListItemWrapper>
        <Header>
          <Icon src={`${ICON_CMD}/hot/hackernews.jpeg`} />
          hackernews
          <SpaceGrow />
          <Timestamp>3天前</Timestamp>
        </Header>
        <Title>Thank HN: You helped me get a new job</Title>
      </ListItemWrapper>
      <ListItemWrapper>
        <Header>
          <Icon src={`${ICON_CMD}/hot/techcrunch.png`} />
          techcrunch
          <SpaceGrow />
          <Timestamp>3天前</Timestamp>
        </Header>
        <Title>
          atch Critical Cryptographic Vulnerability in Microsoft Windows [pdf]
        </Title>
      </ListItemWrapper>
      <ListItemWrapper>
        <Header>
          <Icon src={`${ICON_CMD}/hot/infoq.jpg`} />
          infoQ 中文站
          <SpaceGrow />
          <Timestamp>2天前</Timestamp>
        </Header>
        <Title>苹果走钢丝：为iPhone隐私大战FBI，还是屈服于特朗普？</Title>
      </ListItemWrapper>

      <ListItemWrapper>
        <Header>
          <Icon src={`${ICON_CMD}/hot/hackernews.jpeg`} />
          hackernews
          <SpaceGrow />
          <Timestamp>3天前</Timestamp>
        </Header>
        <Title>Thank HN: You helped me get a new job</Title>
      </ListItemWrapper>
      <ListItemWrapper>
        <Header>
          <Icon src={`${ICON_CMD}/hot/techcrunch.png`} />
          techcrunch
          <SpaceGrow />
          <Timestamp>3天前</Timestamp>
        </Header>
        <Title>
          atch Critical Cryptographic Vulnerability in Microsoft Windows [pdf]
        </Title>
      </ListItemWrapper>
      <ListItemWrapper>
        <Header>
          <Icon src={`${ICON_CMD}/hot/infoq.jpg`} />
          infoQ 中文站
          <SpaceGrow />
          <Timestamp>2天前</Timestamp>
        </Header>
        <Title>苹果走钢丝：为iPhone隐私大战FBI，还是屈服于特朗普？</Title>
      </ListItemWrapper>
    </Wrapper>
  )
}

export default List
