/*
 *
 * HaveADrinkContent
 *
 */

import React from 'react'
import dynamic from 'next/dynamic'

import {
  connectStore,
  buildLog,
  scrollToTop,
  lockPage,
  unlockPage,
} from '@/utils'
import { useShortcut } from '@/hooks'

import Header from './Header'
import Footer from './Footer'

import { Wrapper, InnerWrapper, LoadingSentence } from './styles'
import { useInit, refreshSentence } from './logic'

const Body = dynamic({
  loader: () => import('./Body'),
  // eslint-disable-next-line react/display-name
  loading: () => (
    <LoadingSentence>
      everyday is the opportunity you don&apos;t get back, so live life to the
      fullest.
    </LoadingSentence>
  ),
  ssr: false,
})

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const HaveADrinkContentContainer = ({ haveADrinkContent: store }) => {
  useInit(store)

  useShortcut('Space', () => {
    scrollToTop()
    lockPage()
    refreshSentence()
    setTimeout(() => unlockPage(), 1000)
  })

  const { view, timer, timerInterval, curSentence, settingOptions } = store

  return (
    <Wrapper>
      <InnerWrapper>
        <Header
          view={view}
          timer={timer}
          timerInterval={timerInterval}
          settingOptions={settingOptions}
        />
        <Body
          view={view}
          sentence={curSentence}
          settingOptions={settingOptions}
        />
        <Footer view={view} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(HaveADrinkContentContainer)
