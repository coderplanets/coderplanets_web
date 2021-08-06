import { FC, memo } from 'react'

import { ICON } from '@/config'
import { Wrapper, Title, Icon } from '../styles/content/common_questions'

const CommonQuestions: FC = () => {
  return (
    <Wrapper>
      <Title>常见问题</Title>
      <Icon src={`${ICON}/shape/arrow-circle.svg`} />
    </Wrapper>
  )
}

export default memo(CommonQuestions)
