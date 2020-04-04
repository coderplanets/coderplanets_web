import React from 'react'
import T from 'prop-types'
import Link from 'next/link'

import { ICON_CMD } from '@config'
import { ROUTE } from '@constant'

// import Tooltip from '@components/Tooltip'
import Tooltip from '@components/Tooltip'
import MoreContent from './MoreContent'
import { Wrapper, DotDivider, SiteLink, Icon } from './styles/main_entries'

const splitMargin = '7px'

const MainEntries = ({ curRoute: { mainPath }, type }) => {
  return (
    <Wrapper type={type}>
      <Link href="/communities" passHref>
        <SiteLink
          active={mainPath === 'communities'}
          testid="header-communities-link"
        >
          社区
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
      <Link href={`/${ROUTE.COOL_GUIDE}`} passHref>
        <SiteLink
          active={mainPath === ROUTE.COOL_GUIDE}
          testid={`header-${ROUTE.COOL_GUIDE}`}
        >
          酷导游
        </SiteLink>
      </Link>
      <DotDivider space={splitMargin} />
      <SiteLink>作品集市</SiteLink>
      <DotDivider space={splitMargin} />
      <Link href={`/${ROUTE.MEETUPS}`} passHref>
        <SiteLink active={mainPath === ROUTE.MEETUPS}>活动</SiteLink>
      </Link>
      <DotDivider space={splitMargin} />
      <Link href={`/${ROUTE.HAVE_A_DRINK}`} passHref>
        <SiteLink
        // active={mainPath === ROUTE.HAVE_A_DRINK}
        // testid={`header-${ROUTE.HAVE_A_DRINK}`}
        >
          工作
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
        content={<MoreContent />}
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
  curRoute: T.shape({
    mainPath: T.string,
  }).isRequired,
  type: T.oneOfType([T.string, T.instanceOf(null)]),
}

MainEntries.defaultProps = {
  type: null,
}

export default React.memo(MainEntries)
