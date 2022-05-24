import { FC, memo } from 'react'

import type { TArticleCat } from '@/spec'
import { Wrapper, Icon, Text } from './styles/label'

type TProps = {
  type?: TArticleCat
}

const Label: FC<TProps> = ({ type }) => {
  switch (type) {
    case 'feature': {
      return (
        <Wrapper>
          <Icon.Feature />
          <Text>功能建议</Text>
        </Wrapper>
      )
    }

    case 'bug': {
      return (
        <Wrapper>
          <Icon.Bug />
          <Text>Bug / 吐槽</Text>
        </Wrapper>
      )
    }

    default: {
      return (
        <Wrapper>
          <Icon.Question />
          <Text>问题 / 求助</Text>
        </Wrapper>
      )
    }
  }
}

export default memo(Label)
