import React from 'react'

import { ICON } from '@/config'
import { Wrapper, Title, Icon } from '../styles/content/common_questions'

const CommonQuestions = () => {
  return (
    <Wrapper>
      <Title>常见问题</Title>
      <Icon src={`${ICON}/shape/arrow-circle.svg`} />
    </Wrapper>
  )
}

export default React.memo(CommonQuestions)
