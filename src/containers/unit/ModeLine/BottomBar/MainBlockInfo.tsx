import { FC, memo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { ROUTE } from '@/constant'

import { Wrapper, Title } from '../styles/bottom_bar/main_block_info'

const MainBlockInfo: FC = () => {
  const router = useRouter()
  const { pathname, asPath } = router

  if (pathname === `/${ROUTE.COOL_GUIDE}`) {
    return (
      <Wrapper>
        <Link href={asPath} passHref>
          <Title>酷导航</Title>
        </Link>
      </Wrapper>
    )
  }

  if (pathname === `/${ROUTE.HAVE_A_DRINK}`) {
    return (
      <Wrapper>
        <Link href={asPath} passHref>
          <Title>来一杯</Title>
        </Link>
      </Wrapper>
    )
  }

  if (pathname === `/${ROUTE.MEETUPS}`) {
    return (
      <Wrapper>
        <Link href={asPath} passHref>
          <Title>小聚</Title>
        </Link>
      </Wrapper>
    )
  }

  if (pathname === `/${ROUTE.EXPLORE}`) {
    return (
      <Wrapper>
        <Link href={asPath} passHref>
          <Title>发现</Title>
        </Link>
      </Wrapper>
    )
  }

  if (pathname === `/${ROUTE.PLAZA}`) {
    return (
      <Wrapper>
        <Link href={asPath} passHref>
          <Title>作品集市</Title>
        </Link>
      </Wrapper>
    )
  }

  if (pathname === '/works/[id]') {
    return (
      <Wrapper>
        <Link href={`/${ROUTE.PLAZA}`} passHref>
          <Title>作品集市</Title>
        </Link>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Title>首页</Title>
    </Wrapper>
  )
}

export default memo(MainBlockInfo)
