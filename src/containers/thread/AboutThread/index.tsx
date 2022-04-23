/* *
 * AboutThread
 *
 */

import { FC } from 'react'

// import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import Members from './Members'
import BasicStates from './BasicStates'

import type { TStore } from './store'
import Sidebar from './Sidebar'

import {
  Wrapper,
  MainWrapper,
  StateBlock,
  IntroBlock,
  MemberBlock,
  Title,
  Desc,
} from './styles'
import { useInit } from './logic' /* eslint-disable-next-line */

// const log = buildLog('C:AboutThread')

type TProps = {
  aboutThread?: TStore
  testid?: string
}

const AboutThreadContainer: FC<TProps> = ({
  aboutThread: store,
  testid = 'about-thread',
}) => {
  useInit(store)

  return (
    <Wrapper testid={testid}>
      <MainWrapper>
        <IntroBlock>
          <Title>社区简介</Title>
          <Desc>
            我注意到里面他说了一句话，是这个老兄说一会我们的大使也有问题要问您，也就是说这个节目里印度的大使是在场的。
            也就是说这个主持人所表达的意思，印度大使全听见了，并且是默许认可的。可以说也就是大使想说的话，也就是说这也代表了印度官方的态度。
            只是由一个主持人代为说了出来。这其实很有启发，就是说将来我们的驻美大使是不是也可以采取这样的套路，
            找一个懂媒体懂政治的学者在前面替自己怼人，自己默默坐在后面为学者的话背书。
          </Desc>
        </IntroBlock>

        <StateBlock>
          <Title>社区概况</Title>
          <BasicStates />
        </StateBlock>

        <MemberBlock>
          <Members />
        </MemberBlock>
      </MainWrapper>
      <Sidebar />
    </Wrapper>
  )
}

export default bond(AboutThreadContainer, 'aboutThread') as FC<TProps>
