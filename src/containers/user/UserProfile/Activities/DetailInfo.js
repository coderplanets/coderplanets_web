import React from 'react'

import { ICON } from '@/config'
import {
  Wrapper,
  Title,
  IconWrapper,
  Icon,
} from '../styles/activities/detail_info'

const DetailInfo = ({ first }) => {
  return (
    <Wrapper first={first}>
      <Title>这是一篇神奇的帖子</Title>
      <IconWrapper first={first}>
        <Icon src={`${ICON}/article/comment.svg`} />
      </IconWrapper>
    </Wrapper>
  )
}

export default React.memo(DetailInfo)
