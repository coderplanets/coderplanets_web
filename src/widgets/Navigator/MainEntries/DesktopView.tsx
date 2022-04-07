import { FC, memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { ROUTE } from '@/constant'
import { getRouteMainPath } from '@/utils/route'

import MoreLink from './MoreLink'
import { Wrapper, DotDivider, SiteLink } from '../styles/main_entries'

const splitMargin = 8

const DesktopView: FC = () => {
  const router = useRouter()
  const mainPath = getRouteMainPath(router.asPath)

  return (
    <Wrapper>
      <Link href={`/${ROUTE.TOPICS}`} passHref>
        <SiteLink
          active={mainPath === ROUTE.TOPICS}
          testid="header-explore-link"
        >
          讨论
        </SiteLink>
      </Link>
      <DotDivider space={splitMargin} />
      <Link href={`/${ROUTE.WORKS}`} passHref>
        <SiteLink active={mainPath === ROUTE.WORKS} testid="header-works-link">
          作品
        </SiteLink>
      </Link>
      <DotDivider space={splitMargin} />
      <Link href={`/${ROUTE.COOL_GUIDE}`} passHref>
        <SiteLink
          active={mainPath === ROUTE.COOL_GUIDE}
          testid={`header-${ROUTE.COOL_GUIDE}`}
        >
          酷导航
        </SiteLink>
      </Link>
      <DotDivider space={splitMargin} />
      <Link href={`/${ROUTE.MEETUPS}`} passHref>
        <SiteLink
          active={mainPath === ROUTE.MEETUPS}
          testid="header-meetups-link"
        >
          小聚
        </SiteLink>
      </Link>
      <DotDivider space={splitMargin} />
      <Link href={`/${ROUTE.HAVE_A_DRINK}`} passHref>
        <SiteLink
          active={mainPath === ROUTE.HAVE_A_DRINK}
          testid={`header-${ROUTE.HAVE_A_DRINK}`}
        >
          来一杯
        </SiteLink>
      </Link>
      <DotDivider space={splitMargin} />
      <MoreLink />
    </Wrapper>
  )
}

export default memo(DesktopView)
