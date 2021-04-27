import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { ICON_CMD } from '@/config'
import { ROUTE } from '@/constant'
import { getRouteMainPath } from '@/utils'

import Tooltip from '@/components/Tooltip'
import MorePanel from '../MorePanel'
import { Wrapper, DotDivider, SiteLink, Icon } from '../styles/main_entries'

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
          酷导游
        </SiteLink>
      </Link>
      <DotDivider space={splitMargin} />
      <Link href={`/${ROUTE.MEETUPS}`} passHref>
        <SiteLink
          active={mainPath === ROUTE.MEETUPS}
          testid="header-meetups-link"
        >
          活动
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
      <Tooltip
        content={<MorePanel />}
        placement="bottom"
        hideOnClick={false}
        noPadding
      >
        <SiteLink testid="header-more-link">
          更多 <Icon src={`${ICON_CMD}/arrow_down.svg`} />
        </SiteLink>
      </Tooltip>
    </Wrapper>
  )
}

export default React.memo(DesktopView)
