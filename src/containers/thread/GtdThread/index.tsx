/* *
 * GtdThread
 *
 */

import { FC } from 'react'

// import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import ArticleItem from './ArticleItem'

import type { TStore } from './store'
import {
  Wrapper,
  Column,
  Header,
  Title,
  Label,
  SubTitle,
  TODOIcon,
  WipIcon,
  DoneIcon,
} from './styles'
import { useInit } from './logic' /* eslint-disable-next-line */

// const log = buildLog('C:GtdThread')

type TProps = {
  gtdThread?: TStore
  testid?: string
}

const GtdThreadContainer: FC<TProps> = ({
  gtdThread: store,
  testid = 'gtd-thread',
}) => {
  useInit(store)

  return (
    <Wrapper testid={testid}>
      <Column>
        <Header>
          <Title>
            <Label>已排期</Label>
            <TODOIcon />
          </Title>
          <SubTitle>8 项目</SubTitle>
        </Header>
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </Column>
      <Column>
        <Header>
          <Title>
            <Label>正在完善</Label>
            <WipIcon />
          </Title>
          <SubTitle>10 项目</SubTitle>
        </Header>
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </Column>
      <Column>
        <Header>
          <Title>
            <Label>已完成</Label>
            <DoneIcon />
          </Title>
          <SubTitle>10 项目</SubTitle>
        </Header>
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </Column>
    </Wrapper>
  )
}

export default bond(GtdThreadContainer, 'gtdThread') as FC<TProps>
