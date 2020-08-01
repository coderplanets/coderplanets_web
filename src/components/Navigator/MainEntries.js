import React from 'react'
import T from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { ICON_CMD } from '@/config'
import { ROUTE } from '@/constant'
import { getRouteMainPath } from '@/utils'

// import Tooltip from '@/components/Tooltip'
import Tooltip from '@/components/Tooltip'
import MorePanel from './MorePanel'
import { Wrapper, DotDivider, SiteLink, Icon } from './styles/main_entries'

const splitMargin = '7px'

const MainEntries = ({ type }) => {
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
      {/* <DotDivider space={splitMargin} />
      <SiteLink>专栏</SiteLink> */}
      {/* <Tooltip
        placement="bottom"
        trigger="click"
        content={<DiscussLinker title="专栏" addr={`${ISSUE_ADDR}/265`} />}
      >
        <SiteLink>专栏</SiteLink>
      </Tooltip> */}
      <DotDivider space={splitMargin} />
      <Link href={`/${ROUTE.WORKS}`} passHref>
        <SiteLink active={mainPath === ROUTE.WORKS}>作品集市</SiteLink>
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
      <Link href={`/${ROUTE.HAVE_A_DRINK}`} passHref>
        <SiteLink>工作</SiteLink>
      </Link>
      <DotDivider space={splitMargin} />
      <Link href={`/${ROUTE.MEETUPS}`} passHref>
        <SiteLink active={mainPath === ROUTE.MEETUPS}>活动</SiteLink>
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
        hideOnClick={false}
        placement="bottom"
        noDefaultPadding
        trigger="click"
      >
        <SiteLink>
          更多 <Icon src={`${ICON_CMD}/arrow_down.svg`} />
        </SiteLink>
      </Tooltip>
    </Wrapper>
  )
}

MainEntries.propTypes = {
  type: T.oneOfType([T.string, T.instanceOf(null)]),
}

MainEntries.defaultProps = {
  type: null,
}

export default React.memo(MainEntries)
