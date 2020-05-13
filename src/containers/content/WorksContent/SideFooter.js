import React from 'react'

import DotDivider from '@/components/DotDivider'
import { Wrapper, Item } from './styles/side_footer'

const SideFooter = () => {
  return (
    <Wrapper>
      <Item>订阅</Item>
      <DotDivider radius="3px" />
      <Item>交流</Item>
      <DotDivider radius="3px" />
      <Item>关于</Item>
    </Wrapper>
  )
}

export default SideFooter
