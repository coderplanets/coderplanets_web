import { FC, memo } from 'react'

import Category from './Category'
import { Wrapper, CatsWrapper } from './styles/helpcenter_layout'

type TProps = {
  testid?: string
}

const HelpCenterLayout: FC<TProps> = ({ testid = 'FaqLayout' }) => {
  return (
    <Wrapper>
      <CatsWrapper>
        <Category
          color="orange"
          title="Get Started"
          desc="Get Started"
          column={3}
        />
        <Category
          color="red"
          title="CI/CD and DevOps"
          desc="CI/CD and DevOps"
          column={3}
        />
        <Category
          color="blue"
          title="Collaborative Coding"
          desc="Collaborative Coding"
          column={3}
        />
        <Category
          color="green"
          title="Developers"
          desc="Collaborative Coding"
          column={3}
        />
        <Category
          color="purple"
          title="Enterprise and Teams"
          desc="Enterprise and Teams"
          column={3}
        />
        <Category
          color="red"
          title="CI/CD and DevOps"
          desc="CI/CD and DevOps"
          column={3}
        />
        <Category
          color="blue"
          title="Collaborative Coding"
          desc="Collaborative Coding"
          column={3}
        />
        <Category
          color="green"
          title="Developers"
          desc="Collaborative Coding"
          column={3}
        />
        <Category
          color="purple"
          title="Enterprise and Teams"
          desc="Enterprise and Teams"
          column={3}
        />
      </CatsWrapper>
    </Wrapper>
  )
}

export default memo(HelpCenterLayout)
