/* *
 * KanbanThread
 *
 */

import { FC } from 'react'

// import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'
import { getRandomInt } from '@/utils/helper'

import { SpaceGrow } from '@/widgets/Common'
import IconButton from '@/widgets/Buttons/IconButton'
import KanbanItem from '@/widgets/KanbanItem'

import Actions from './Actions'

import type { TStore } from './store'
import {
  Wrapper,
  ColumnsWrapper,
  Column,
  Header,
  Body,
  Label,
  SubTitle,
  TODOIcon,
  WipIcon,
  DoneIcon,
} from './styles'
import { useInit } from './logic' /* eslint-disable-next-line */

// const log = buildLog('C:KanbanThread')

type TProps = {
  kanbanThread?: TStore
  testid?: string
}

const KanbanThreadContainer: FC<TProps> = ({
  kanbanThread: store,
  testid = 'kanban-thread',
}) => {
  useInit(store)

  return (
    <Wrapper testid={testid}>
      <Actions />

      <ColumnsWrapper>
        <Column>
          <Header>
            <TODOIcon />
            <Label>待办项</Label>
            <SubTitle>{getRandomInt(5, 20)}</SubTitle>
            <SpaceGrow />
            <IconButton path="shape/add.svg" right={12} />
          </Header>
          <Body>
            <KanbanItem />
            <KanbanItem />
            <KanbanItem />
            <KanbanItem />
            <KanbanItem />
            <KanbanItem />
          </Body>
        </Column>
        <Column>
          <Header>
            <WipIcon />
            <Label>正在完善</Label>
            <SubTitle>{getRandomInt(5, 20)}</SubTitle>
            <SpaceGrow />
            <IconButton path="shape/add.svg" right={12} />
          </Header>
          <Body>
            <KanbanItem />
            <KanbanItem />
            <KanbanItem />
            <KanbanItem />
            <KanbanItem />
            <KanbanItem />
          </Body>
        </Column>
        <Column>
          <Header>
            <DoneIcon />
            <Label>已完成</Label>
            <SubTitle>{getRandomInt(5, 20)}</SubTitle>
            <SpaceGrow />
            <IconButton path="shape/add.svg" right={12} />
          </Header>
          <Body>
            <KanbanItem />
            <KanbanItem />
            <KanbanItem />
            <KanbanItem />
            <KanbanItem />
            <KanbanItem />
          </Body>
        </Column>
      </ColumnsWrapper>
    </Wrapper>
  )
}

export default bond(KanbanThreadContainer, 'kanbanThread') as FC<TProps>
