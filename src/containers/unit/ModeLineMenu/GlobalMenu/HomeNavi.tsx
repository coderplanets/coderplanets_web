import { FC, memo } from 'react'

import {
  Wrapper,
  Logo,
  Block,
  Title,
  ArrowIcon,
} from '../styles/global_menu/home_navi'

const HomeNavi: FC = () => {
  return (
    <Wrapper>
      <Logo />
      <Block>
        <Title>coderplanets</Title>
        <ArrowIcon />
      </Block>
    </Wrapper>
  )
}

export default memo(HomeNavi)
