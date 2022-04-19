/*
 *
 * FaqList
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import Sidebar from './Sidebar'
import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:FaqList:index')

const defaultArticles = [
  {
    title: '购买标准版或者高级版是否可开具发票？',
    body: '',
  },
  {
    title: '高级版使用过程中如何增加团队人数？',
    body: '',
  },
  {
    title: '小画桌如何保障数据安全？',
    body: '',
  },
  {
    title: '标准版是否可以升级为高级版？',
    body: '',
  },
  {
    title: '小画桌语音是否支持额外购买？',
    body: '是否支持7天无理由退款？',
  },
  {
    title: '为什么修改了环境变量（或全局变量）值，而引用的地方没有生效？',
    body: '',
  },
]

export type TProps = {
  testid?: string
  mode?: 'sidebar' | 'search-hint' | 'collapse'
  articles?: {
    title: string
    body?: string
  }[]
}

const FaqList: FC<TProps> = ({
  testid = 'faq-list',
  mode = 'sidebar',
  articles = defaultArticles,
}) => {
  return (
    <Wrapper testid={testid}>
      {mode === 'sidebar' && <Sidebar articles={articles} />}
    </Wrapper>
  )
}

export default memo(FaqList)
