/*
 *
 * Header
 *
 */

import { FC, useEffect } from 'react'
import dynamic from 'next/dynamic'

import type { TMetric } from '@/spec'
import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

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

  const { leftOffset, isLogin } = store

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
          <Navigator metric={metric} />
        </RouterWrapper>
        <Operations>
          {MailBox && <MailBox />}
          <MoreIcon src={`${ICON}/shape/more-box.svg`} />
        </Operations>
      </InnerWrapper>
    </Wrapper>
  )
}

export default bond(ArticleEditorHeader, 'header') as FC<TProps>
