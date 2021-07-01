/*
 *
 * Header
 *
 */

import { FC, useEffect } from 'react'
import dynamic from 'next/dynamic'

import { ICON } from '@/config'
import { METRIC } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import Navigator from '@/components/Navigator'

import type { TStore } from '../store'
import {
  Wrapper,
  InnerWrapper,
  RouterWrapper,
  Operations,
  MoreIcon,
} from '../styles/desktop_view/article_editor_view'

import { useInit } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:Header')

let MailBox

type TProps = {
  header?: TStore
  metric?: string
}

const ArticleEditorHeader: FC<TProps> = ({ header: store, metric }) => {
  useInit(store, metric)

  const { isOnline, leftOffset, accountInfo, isLogin, curCommunity } = store

  useEffect(() => {
    if (isLogin) {
      MailBox = dynamic(() => import('@/containers/tool/MailBox'), {
        /* eslint-disable react/display-name */
        loading: () => <div />,
        ssr: false,
      })
    }
  }, [isLogin])

  return (
    <Wrapper
      id="whereCallShowDoraemon"
      testid="header"
      leftOffset={leftOffset}
      noBorder
    >
      <InnerWrapper>
        <RouterWrapper>
          <Navigator
            community={curCommunity}
            layout={accountInfo.customization.bannerLayout}
            isOnline={isOnline}
            metric={METRIC.ARTICLE_EDITOR}
          />
        </RouterWrapper>
        <Operations>
          {MailBox && <MailBox />}
          <MoreIcon src={`${ICON}/shape/more-box.svg`} />
        </Operations>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(ArticleEditorHeader, 'header') as FC<TProps>
