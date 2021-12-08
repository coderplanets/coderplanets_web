import { FC, memo } from 'react'

import Link from 'next/link'

import {
  Wrapper,
  Logo,
  Block,
  Title,
  // ArrowIcon,
} from '../styles/global_menu/home_navi'

const HomeNavi: FC = () => {
  return (
    <Link href="/">
      <Wrapper>
        <Logo />
        <Block>
          <Title>oderPlanets</Title>
        </Block>
      </Wrapper>
    </Link>
  )
}

export default memo(HomeNavi)
