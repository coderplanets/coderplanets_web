import { FC, memo } from 'react'
import Link from 'next/link'

import { ICON, GITHUB } from '@/config'
import { ROUTE } from '@/constant'

// import DiscussLinker from '@/components/DiscussLinker'

import {
  Wrapper,
  Entry,
  Logo,
  SupportLogo,
  Main,
  Title,
  Desc,
  Notice,
} from '../styles/more_panel/footer'

const MoreContent: FC = () => {
  return (
    <Wrapper>
      <Entry>
        <Link href={`/${ROUTE.SUPPORT_US}`} passHref>
          <Main>
            <SupportLogo src={`${ICON}/menu/lifebuoy.png`} noLazy />
            <Title>支持我们</Title>
          </Main>
        </Link>
        <Desc>帮助我们一起将社区维持下去</Desc>
        <Notice>Help</Notice>
      </Entry>
      <Entry>
        <Link href={`/${GITHUB}`} passHref>
          <Main>
            <Logo src={`${ICON}/menu/github.svg`} />
            <Title>Open Source</Title>
          </Main>
        </Link>
        <Desc>本站全部代码开源在 Github 上，欢迎参与</Desc>
      </Entry>
    </Wrapper>
  )
}

export default memo(MoreContent)
