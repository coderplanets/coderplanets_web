import { FC, memo } from 'react'

import Category from './Category'
import FaqList from '@/widgets/FaqList'

import { Wrapper, CatsWrapper } from './styles/full_layout'

type TProps = {
  testid?: string
}

const FullLayout: FC<TProps> = ({ testid = 'FullLayout' }) => {
  return (
    <Wrapper>
      <CatsWrapper>
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
      </CatsWrapper>
      <FaqList />
    </Wrapper>
  )
}

export default memo(FullLayout)
