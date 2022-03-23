/* *
 * GtdThread
 *
 */

import { FC } from 'react'

// import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'
import { getRandomInt } from '@/utils/helper'

import { SpaceGrow } from '@/widgets/Common'
import IconButton from '@/widgets/Buttons/IconButton'
import GtdItem from '@/widgets/GtdItem'

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
            <SpaceGrow />
            <IconButton path="shape/more-l.svg" mRight={2} />
          </Title>
          <SubTitle>{getRandomInt(5, 20)} 项</SubTitle>
        </Header>
        <GtdItem />
        <GtdItem />
        <GtdItem />
        <GtdItem />
        <GtdItem />
        <GtdItem />
      </Column>
      <Column>
        <Header>
          <Title>
            <Label>正在完善</Label>
            <WipIcon />
            <SpaceGrow />
            <IconButton path="shape/more-l.svg" mRight={2} />
          </Title>
          <SubTitle>{getRandomInt(5, 20)} 项</SubTitle>
        </Header>
        <GtdItem />
        <GtdItem />
        <GtdItem />
        <GtdItem />
        <GtdItem />
        <GtdItem />
      </Column>
      <Column>
        <Header>
          <Title>
            <Label>已完成</Label>
            <DoneIcon />
            <SpaceGrow />
            <IconButton path="shape/more-l.svg" mRight={2} />
          </Title>
          <SubTitle>{getRandomInt(5, 20)} 项</SubTitle>
        </Header>
        <GtdItem />
        <GtdItem />
        <GtdItem />
        <GtdItem />
        <GtdItem />
        <GtdItem />
      </Column>
    </Wrapper>
  )
}

export default bond(GtdThreadContainer, 'gtdThread') as FC<TProps>
