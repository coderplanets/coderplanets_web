import React from 'react'

import MakersInfo from './MakersInfo'
import { Wrapper, Title, Divider } from '../styles/right_sidebar/index'

const RightSidebar = () => {
  return (
    <Wrapper>
      <MakersInfo />
      <Divider />
      <Title>活跃用户</Title>
      <div>...</div>
      <Divider />
      <Title>开发者访谈</Title>
      <div>...</div>
      <Divider />
      <div>关于，订阅，xx</div>
    </Wrapper>
  )
}

export default RightSidebar
