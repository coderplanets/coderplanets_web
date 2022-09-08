/*
 *
 * FaqList
 *
 */

import { FC, memo } from 'react'

import type { TArticle } from '@/spec'
import { buildLog } from '@/utils/logger'

import Sidebar from './Sidebar'
import SearchHint from './SearchHint'
import Collapse from './Collapse'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:FaqList:index')

const defaultArticles = [
  {
    id: '1',
    title: '购买标准版或者高级版是否可开具发票？',
    body: '首先很多西方国家员工能摆烂，很大部分原因是他们有资本积累，在行业上游。有主导权和议价权，竞争壁垒高，别人就是可以三五个人占据关键岗位，剩下的事交给别人来做。',
  },
  {
    id: '2',
    title: '高级版使用过程中如何增加团队人数？',
    body: '曾遇见一个沃达丰的小哥，跑跨国业务线，工作之余就去学语言学管理。每次问他去不去摸鱼，他也去，只是期间我会选择玩几局王者，他在旁边看新语言的单词',
  },
  {
    id: '3',
    title: 'xxx 如何保障数据安全？',
    body: '有廉价又产出高的不用，选择养这帮喜欢吃大锅饭的人？矛盾冲突是生产力，这个世界运作动力来自于竞争，不管是欧美也好，欠发达地区也好。',
  },
  {
    id: '4',
    title: '标准版是否可以升级为高级版？',
    body: '欧洲当年也内卷，然后罗曼洛夫一家都被扬了，整个苏联的资本家和贵族要么在电线杆上，要么不在俄国境内。',
  },
  {
    id: '5',
    title: '小画桌语音是否支持额外购买？',
    body: '是否支持7天无理由退款？',
  },
  {
    id: '6',
    title: '为什么修改了环境变量（或全局变量）值，而引用的地方没有生效？',
    body: '再然后只能吃土豆皮的基尔水兵就哗变了，整个德国的贵族和资本家害怕像俄国的同行们一样上电线杆，直接投降。',
  },
]

export type TProps = {
  testid?: string
  mode?: 'sidebar' | 'search-hint' | 'collapse'
  articles?: TArticle[]
}

const FaqList: FC<TProps> = ({
  testid = 'faq-list',
  mode = 'sidebar',
  articles = defaultArticles,
}) => {
  return (
    <Wrapper testid={testid}>
      {mode === 'sidebar' && <Sidebar articles={articles} />}
      {mode === 'search-hint' && <SearchHint articles={articles} />}
      {mode === 'collapse' && <Collapse articles={articles} />}
    </Wrapper>
  )
}

export default memo(FaqList)
