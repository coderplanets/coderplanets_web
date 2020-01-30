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
  holdPage,
  unholdPage,
} from '@utils'
import { useShortcut } from '@hooks'

import Header from './Header'
// import Body from './Body'
import Footer from './Footer'

import { Wrapper, InnerWrapper } from './styles'
import { useInit, refreshSentence } from './logic'

const Body = dynamic({
  loader: () => import('./Body'),
  ssr: false,
})

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const HaveADrinkContentContainer = ({ haveADrinkContent }) => {
  useInit(haveADrinkContent)

  useShortcut('space', () => {
    scrollToTop()
    holdPage()
    refreshSentence()
    setTimeout(() => unholdPage(), 1000)
  })

  const { view, timer, timerInterval, curSentence } = haveADrinkContent

  return (
    <Wrapper>
      <InnerWrapper>
        <Header view={view} timer={timer} timerInterval={timerInterval} />
        <Body view={view} sentence={curSentence} />
        <Footer view={view} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(HaveADrinkContentContainer)
