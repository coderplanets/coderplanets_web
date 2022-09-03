/*
 *
 * Header
 *
 */

import { FC, useEffect } from 'react'
import dynamic from 'next/dynamic'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import Navigator from '@/widgets/Navigator'

import type { TStore } from '../store'

import {
  Wrapper,
  ClassicInnerWrapper,
  RouterWrapper,
  Search,
  HeaderSearchIcon,
  Operations,
} from '../styles/desktop_view/community_view'
import { useInit, openDoraemon } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:Header')

let MailBox

const UserAccount = dynamic(() => import('../UserAccount'), { ssr: false })
const AddOns = dynamic(() => import('../AddOns'), { ssr: false })

type TProps = {
  // T.oneOf(values(METRIC)) TODO
  metric?: TMetric
  header?: TStore
}

const CommunityHeaderContainer: FC<TProps> = ({
  header: store,
  metric = METRIC.COMMUNITY,
}) => {
  // log('header metric: ', metric)
  useInit(store, metric)

  const { leftOffset, accountInfo, isLogin, hasNoBottomBorder } = store

  useEffect(() => {
    if (isLogin) {
      MailBox = dynamic(() => import('@/containers/tool/MailBox'), {
        /* eslint-disable react/display-name */
        loading: () => <div />,
        ssr: false,
      })
    }
  }, [isLogin])

  const InnerWrapper = ClassicInnerWrapper

  return (
    <Wrapper
      id="whereCallShowDoraemon"
      testid="header"
      leftOffset={leftOffset}
      noBorder={hasNoBottomBorder}
    >
      <InnerWrapper metric={metric}>
        <RouterWrapper>
          <Navigator metric={metric} />
        </RouterWrapper>
        {/* @ts-ignore */}
        <AddOns />
        <Operations>
          <Search onClick={openDoraemon} testid="header-search">
            <HeaderSearchIcon testid="header-search-icon" />
          </Search>

          {/* @ts-ignore */}
          {MailBox && <MailBox />}
          {/* @ts-ignore */}
          <UserAccount isLogin={isLogin} accountInfo={accountInfo} />
        </Operations>
      </InnerWrapper>
    </Wrapper>
  )
}

export default bond(CommunityHeaderContainer, 'header') as FC<TProps>
