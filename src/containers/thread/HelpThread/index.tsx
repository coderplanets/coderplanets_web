/* *
 * HelpThread
 *
 */

import { FC } from 'react'

// import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import type { TStore } from './store'

import Sidebar from './Sidebar'
import Category from './Category'

import { Wrapper, MainWrapper, CatsWapper } from './styles'
import { useInit } from './logic' /* eslint-disable-next-line */

// const log = buildLog('C:HelpThread')

type TProps = {
  helpThread?: TStore
  testid?: string
  title?: string
  desc?: string
}

const HelpThreadContainer: FC<TProps> = ({
  helpThread: store,
  testid = 'help-thread',
  title = 'title',
  desc = 'desc',
}) => {
  useInit(store)

  return (
    <Wrapper testid={testid}>
      <MainWrapper>
        <CatsWapper>
          <Category color="orange" title="Get Started" desc="Get Started" />
          <Category
            color="red"
            title="CI/CD and DevOps"
            desc="CI/CD and DevOps"
          />
          <Category
            color="blue"
            title="Collaborative Coding"
            desc="Collaborative Coding"
          />
          <Category
            color="green"
            title="Developers"
            desc="Collaborative Coding"
          />
          <Category
            color="purple"
            title="Enterprise and Teams"
            desc="Enterprise and Teams"
          />
          <Category
            color="red"
            title="CI/CD and DevOps"
            desc="CI/CD and DevOps"
          />
          <Category
            color="blue"
            title="Collaborative Coding"
            desc="Collaborative Coding"
          />
          <Category
            color="green"
            title="Developers"
            desc="Collaborative Coding"
          />
          <Category
            color="purple"
            title="Enterprise and Teams"
            desc="Enterprise and Teams"
          />
        </CatsWapper>
      </MainWrapper>
      <Sidebar />
    </Wrapper>
  )
}

export default bond(HelpThreadContainer, 'helpThread') as FC<TProps>
