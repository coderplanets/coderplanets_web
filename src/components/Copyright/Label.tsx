import { FC, memo } from 'react'

import { ICON } from '@/config'
import { Wrapper, Icon, Text } from './styles/label'

type TProps = {
  type?: 'cc' | 'approve' | 'forbid'
}

const Label: FC<TProps> = ({ type }) => {
  switch (type) {
    case 'approve': {
      return (
        <Wrapper>
          <Icon src={`${ICON}/article/copyright-approve.svg`} />
          <Text>转载需授权</Text>
        </Wrapper>
      )
    }

    case 'forbid': {
      return (
        <Wrapper>
          <Icon src={`${ICON}/article/copyright-forbid.svg`} />
          <Text>禁止转载</Text>
        </Wrapper>
      )
    }

    default: {
      return (
        <Wrapper>
          <Icon src={`${ICON}/article/cc-raw.svg`} />
          <Text>知识共享 4.0</Text>
        </Wrapper>
      )
    }
  }
}

export default memo(Label)
