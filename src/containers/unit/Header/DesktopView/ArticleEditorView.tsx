/*
 *
 * Header
 *
 */

import { FC, useEffect } from 'react'
import dynamic from 'next/dynamic'

import type { TMetric } from '@/spec'
import { ICON } from '@/config'
import { METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Navigator from '@/widgets/Navigator'

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
  metric?: TMetric
}

const ArticleEditorHeader: FC<TProps> = ({ header: store, metric }) => {
  useInit(store, metric)

  const { c11n, leftOffset, isLogin, curCommunity } = store

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
        <RouterWrapper metric={metric}>
          <Navigator
            community={curCommunity}
            layout={c11n.bannerLayout}
            metric={metric}
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
