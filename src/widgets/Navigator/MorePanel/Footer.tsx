import { FC, memo } from 'react'
import Link from 'next/link'

import { ICON, GITHUB } from '@/config'
import { ROUTE } from '@/constant'

// import DiscussLinker from '@/widgets/DiscussLinker'

import {
  Wrapper,
  Entry,
  Logo,
  Main,
  Title,
  Desc,
} from '../styles/more_panel/footer'

const MoreContent: FC = () => {
  return (
    <Wrapper>
      <Entry>
        <Link href={`/${GITHUB}`} passHref>
          <Main>
            <Logo src={`${ICON}/menu/github.svg`} />
            <Title>Open Source</Title>
          </Main>
        </Link>
        <Desc>本站全部代码开源在 Github 上，欢迎参与</Desc>
      </Entry>

      <Entry>
        <Link href={`/${ROUTE.MEMBERSHIP}`} passHref>
          <Main>
            <Logo src={`${ICON}/menu/ear.svg`} noLazy />
            <Title>建议与反馈</Title>
          </Main>
        </Link>
        <Desc>关于本站的任何吐槽，建议，反馈。</Desc>
      </Entry>
    </Wrapper>
  )
}

export default memo(MoreContent)
