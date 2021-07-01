import { FC, memo } from 'react'
import Link from 'next/link'

import { ICON, GITHUB } from '@/config'
import { ROUTE } from '@/constant'

// import DiscussLinker from '@/components/DiscussLinker'

import {
  Wrapper,
  Entry,
  Logo,
  Main,
  Title,
  Desc,
  Notice,
} from '../styles/more_panel/footer'

const MoreContent: FC = () => {
  return (
    <Wrapper>
      <Entry>
        <Link href={`/${ROUTE.SPONSOR}`} passHref>
          <Main>
            <Logo src={`${ICON}/menu/sponsor.svg`} />
            <Title>赞助与广告</Title>
          </Main>
        </Link>
        <Desc>赞助社区，广告投放..</Desc>
        <Notice>诚邀赞助</Notice>
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
