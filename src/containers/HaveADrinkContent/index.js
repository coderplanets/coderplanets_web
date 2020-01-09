/*
 *
 * HaveADrinkContent
 *
 */

import React from 'react'

import {
  connectStore,
  buildLog,
  scrollToTop,
  holdPage,
  unholdPage,
} from '@utils'
import { useShortcut } from '@hooks'

import { Wrapper, InnerWrapper, Title, Desc } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const HaveADrinkContentContainer = ({ haveADrinkContent }) => {
  useInit(haveADrinkContent)

  useShortcut('space', () => {
    scrollToTop()
    holdPage()
    log('TODO:  refresh')
    setTimeout(() => unholdPage(), 1000)
  })

  return (
    <Wrapper>
      <InnerWrapper>
        <Title>看见一个算命大师，我刚坐下他就问我，你算什么东西？</Title>
        <Desc>按「空格」键或「点击」刷新</Desc>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(HaveADrinkContentContainer)
