import React from 'react'

import { ICON_CMD } from '@/config'

import {
  Wrapper,
  BackBtnWrapper,
  BackIcon,
  BackTitle,
  Holder,
} from './styles/question_sidebar'

import { sidebarViewOnChange } from './logic'

const QuestionSidebar = () => (
  <Wrapper>
    <BackBtnWrapper onClick={sidebarViewOnChange.bind(this, 'pay')}>
      <BackIcon src={`${ICON_CMD}/arrow-back.svg`} />
      <BackTitle>返回付款</BackTitle>
    </BackBtnWrapper>
    <Holder />
  </Wrapper>
)

export default React.memo(QuestionSidebar)
