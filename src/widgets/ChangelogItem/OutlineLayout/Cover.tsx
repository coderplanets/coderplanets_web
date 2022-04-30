import { FC, memo } from 'react'

import {
  Wrapper,
  CoverImg,
  DescBar,
  DescBar2,
  DescBar3,
} from '../styles/outline_layout/cover'

const Cover: FC = () => {
  return (
    <Wrapper>
      <CoverImg src="https://images.unsplash.com/photo-1651010967657-4ecd485028f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      <DescBar />
      <DescBar2 />
      <DescBar3 />
    </Wrapper>
  )
}

export default memo(Cover)
