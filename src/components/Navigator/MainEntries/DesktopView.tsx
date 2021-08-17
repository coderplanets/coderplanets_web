import { FC, memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { ROUTE } from '@/constant'
import { getRouteMainPath } from '@/utils/route'

import { Wrapper, DotDivider, SiteLink } from '../styles/main_entries'

const MoreLink = dynamic(() => import('./MoreLink'), { ssr: false })

const splitMargin = 7

type TProps = {
  type: string
}

const DesktopView: FC<TProps> = ({ type }) => {
  const router = useRouter()
  const mainPath = getRouteMainPath(router.asPath)

  return (
    <Wrapper type={type}>
      <Link href={`/${ROUTE.DISCOVERY}`} passHref>
        <SiteLink
          active={mainPath === ROUTE.DISCOVERY}
          testid="header-discovery-link"
        >
          发现
        </SiteLink>
      </Link>
      <DotDivider space={splitMargin} />
      <Link href={`/${ROUTE.WORKS}`} passHref>
        <SiteLink active={mainPath === ROUTE.WORKS} testid="header-works-link">
          作品集市
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
