import { FC, memo } from 'react'

import { Wrapper, Icon, Text } from './styles/label'

type TProps = {
  type?: 'cc' | 'approve' | 'forbid'
}

const Label: FC<TProps> = ({ type }) => {
  switch (type) {
    case 'approve': {
      return (
        <Wrapper>
          <Icon.CCApprove />
          <Text>转载需授权</Text>
        </Wrapper>
      )
    }

    case 'forbid': {
      return (
        <Wrapper>
          <Icon.CCForbid />
          <Text>禁止转载</Text>
        </Wrapper>
      )
    }

    default: {
      return (
        <Wrapper>
          <Icon.CC />
          <Text>知识共享</Text>
        </Wrapper>
      )
    }
  }
}

export default memo(Label)
