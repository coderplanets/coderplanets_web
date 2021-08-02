/*
 *
 * Header
 *
 */

import { FC } from 'react'
import { contains } from 'ramda'
import dynamic from 'next/dynamic'

import type { TMetric } from '@/spec'
import { C11N, METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'

import Navigator from '@/components/Navigator'

import type { TProps } from '../index'
import {
  Wrapper,
  ClassicInnerWrapper,
  HolyGrailInnerWrapper,
  RouterWrapper,
  Search,
  HeaderSearchIcon,
  Operations,
} from '../styles/desktop_view/community_view'

/* eslint-disable-next-line */
const log = buildLog('C:Header')

// let MailBox

// const UserAccount = dynamic(() => import('../UserAccount'), { ssr: false })
const AddOns = dynamic(() => import('../AddOns'), { ssr: false })

const hasNoBorder = (metric: TMetric): boolean =>
  contains(metric, [
    METRIC.DISCOVERY,
    METRIC.SPONSOR,
    METRIC.FRIENDS,
    METRIC.SUBSCRIBE,
    METRIC.ARTICLE,
    METRIC.MEMBERSHIP,
    METRIC.USER,
    METRIC.COMMUNITY_EDITOR,
    METRIC.HELP_CENTER,
  ])

const CommunityHeader: FC<TProps> = ({ metric, c11n, community }) => {
  // TODO: move the login logic to MailBox itself
  // useEffect(() => {
  //   if (isLogin) {
  //     MailBox = dynamic(() => import('@/containers/tool/MailBox'), {
  //       /* eslint-disable react/display-name */
  //       loading: () => <div />,
  //       ssr: false,
  //     })
  //   }
  // }, [isLogin])

  const InnerWrapper =
    c11n.bannerLayout === C11N.CLASSIC
      ? ClassicInnerWrapper
      : HolyGrailInnerWrapper

  return (
    <Wrapper
      id="whereCallShowDoraemon"
      testid="header"
      noBorder={hasNoBorder(metric)}
    >
      <InnerWrapper metric={metric}>
        <RouterWrapper>
          <Navigator
            community={community}
            layout={c11n.bannerLayout}
            metric={metric}
          />
        </RouterWrapper>
        <AddOns />
        <Operations>
          <Search
            onClick={() => console.log('TODO: open doreamon')}
            testid="header-search"
          >
            {/* gzip + 2kb */}
            <HeaderSearchIcon testid="header-search-icon" />
          </Search>

          {/* {MailBox && <MailBox />} */}
          {/* <UserAccount isLogin={c11n.isLogin} accountInfo={accountInfo} /> */}
        </Operations>
      </InnerWrapper>
    </Wrapper>
  )
}

export default CommunityHeader
