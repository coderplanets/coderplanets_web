/*
 *
 * Catalog index
 *
 */

import React from 'react'

import { ICON_CMD } from '@config'
import { buildLog, cutFrom } from '@utils'

import {
  Wrapper,
  Block,
  Header,
  Intro,
  Timestamp,
  Body,
  Title,
  Desc,
  Icon,
} from '../styles/body/catalog'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const items = [
  {
    id: '0',
    icon: `${ICON_CMD}/drink/chicken.png`,
    title: '毒鸡汤',
    total: '224',
    lastMsg: '看见一个算命大师，我刚坐下他就问我，你算什么东西?',
    updatedAt: '3天前',
  },
  {
    id: '0',
    icon: `${ICON_CMD}/drink/chicken.png`,
    title: '毒鸡汤',
    total: '224',
    lastMsg: '看见一个算命大师，我刚坐下他就问我，你算什么东西?',
    updatedAt: '3天前',
    active: true,
  },
  {
    id: '0',
    icon: `${ICON_CMD}/drink/chicken.png`,
    title: '毒鸡汤',
    total: '224',
    lastMsg: '看见一个算命大师，我刚坐下他就问我，你算什么东西?',
    updatedAt: '3天前',
  },
  {
    id: '0',
    icon: `${ICON_CMD}/drink/chicken.png`,
    title: '毒鸡汤',
    total: '224',
    lastMsg: '看见一个算命大师，我刚坐下他就问我，你算什么东西?',
    updatedAt: '3天前',
  },
  {
    id: '0',
    icon: `${ICON_CMD}/drink/chicken.png`,
    title: '毒鸡汤',
    total: '224',
    lastMsg: '看见一个算命大师，我刚坐下他就问我，你算什么东西?',
    updatedAt: '3天前',
  },
  {
    id: '0',
    icon: `${ICON_CMD}/drink/chicken.png`,
    title: '毒鸡汤',
    total: '224',
    lastMsg: '看见一个算命大师，我刚坐下他就问我，你算什么东西?',
    updatedAt: '3天前',
  },
  {
    id: '0',
    icon: `${ICON_CMD}/drink/chicken.png`,
    title: '毒鸡汤',
    total: '224',
    lastMsg: '看见一个算命大师，我刚坐下他就问我，你算什么东西?',
    updatedAt: '3天前',
  },
]

const Catalog = () => {
  return (
    <Wrapper>
      {items.map(item => (
        <Block key={item.id} active={item.active}>
          <Header>
            <Intro>
              <Icon src={item.icon} />
              {item.total} 条
            </Intro>
            <Timestamp>{item.updatedAt}</Timestamp>
          </Header>
          <Body>
            <Title>{item.title}</Title>
            <Desc>{cutFrom(item.lastMsg, 13)}</Desc>
          </Body>
        </Block>
      ))}
    </Wrapper>
  )
}

export default Catalog
