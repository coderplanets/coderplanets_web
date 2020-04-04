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
    icon: `${ICON_CMD}/drink/it-cold.svg`,
    title: 'it 冷知识',
    total: '224',
    lastMsg: '看见一个算命大师，我刚坐下他就问我，你算什么东西?',
    updatedAt: '3天前',
  },
  {
    id: '00',
    icon: `${ICON_CMD}/drink/image.svg`,
    title: '程序员趣图',
    total: '22',
    lastMsg: '--',
    updatedAt: '3天前',
  },
  {
    id: '1',
    icon: `${ICON_CMD}/drink/number.svg`,
    title: '数据酷',
    total: '224',
    lastMsg: '看见一个算命大师，我刚坐下他就问我，你算什么东西?',
    updatedAt: '3天前',
    active: true,
  },
  {
    id: '12',
    icon: `${ICON_CMD}/drink/naming.svg`,
    title: 'Naming 101',
    // 既包括常见的 naming 技巧，也包括精彩的命名，比如 treeshake
    // 常见的易错的程序员英语等等
    total: '224',
    lastMsg: '看见一个算命大师，我刚坐下他就问我，你算什么东西?',
    updatedAt: '3天前',
  },
  {
    id: '2',
    icon: `${ICON_CMD}/drink/chicken.svg`,
    title: '毒鸡汤',
    total: '224',
    lastMsg: '看见一个算命大师，我刚坐下他就问我，你算什么东西?',
    updatedAt: '3天前',
  },
  {
    id: '3',
    icon: `${ICON_CMD}/drink/muscle.svg`,
    title: '励志鸡汤',
    total: '224',
    lastMsg: '看见一个算命大师，我刚坐下他就问我，你算什么东西?',
    updatedAt: '3天前',
  },
  {
    id: '31',
    icon: `${ICON_CMD}/drink/driver.svg`,
    title: '老司机',
    total: '224',
    lastMsg: '看见一个算命大师，我刚坐下他就问我，你算什么东西?',
    updatedAt: '3天前',
  },
  {
    id: '32',
    icon: `${ICON_CMD}/drink/zhihu.svg`,
    title: '一句话知乎',
    total: '224',
    sourceTitle: '在中国做一款抗衡 PS 和 Xbox 的主机很难吗？ - 申权者的回答',
    lastMsg: '开窑子没姑娘，那还是窑子吗?',
    updatedAt: '3天前',
  },
  {
    id: '4',
    icon: `${ICON_CMD}/drink/smile.svg`,
    title: '神问答（语言可选）',
    total: '224',
    lastMsg: '看见一个算命大师，我刚坐下他就问我，你算什么东西?',
    updatedAt: '3天前',
  },
  {
    id: '5',
    icon: `${ICON_CMD}/drink/brain.svg`,
    title: '脑筋急转弯',
    total: '224',
    lastMsg: '看见一个算命大师，我刚坐下他就问我，你算什么东西?',
    updatedAt: '3天前',
  },
  {
    id: '6',
    icon: `${ICON_CMD}/drink/chicken.svg`,
    title: '俚语迷宫',
    total: '224',
    lastMsg: '看见一个算命大师，我刚坐下他就问我，你算什么东西?',
    updatedAt: '3天前',
  },
  {
    id: '7',
    icon: `${ICON_CMD}/drink/rap.svg`,
    title: '灵魂 RAP',
    total: '22',
    lastMsg: '太阳不起我不起 老子就是了不起',
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

export default React.memo(Catalog)
