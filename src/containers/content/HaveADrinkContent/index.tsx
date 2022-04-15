/*
 *
 * HaveADrinkContent
 *
 */

import { FC } from 'react'
import dynamic from 'next/dynamic'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import useShortcut from '@/hooks/useShortcut'

import type { TStore } from './store'
import Header from './Header'
// import Body from './Body'
import Footer from './Footer'

import { Wrapper, InnerWrapper, LoadingSentence } from './styles'
import { useInit, refreshDrink } from './logic'

export const Body = dynamic(() => import('./Body'), {
  /* eslint-disable react/display-name */
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

type TProps = {
  haveADrinkContent?: TStore
  metric?: TMetric
}

const HaveADrinkContentContainer: FC<TProps> = ({
  haveADrinkContent: store,
  metric,
}) => {
  useInit(store)

  useShortcut('Space', () => refreshDrink())

  const {
    view,
    timer,
    category,
    timerInterval,
    curDrink,
    settingOptions,
    pagiState,
  } = store

  return (
    <Wrapper>
      <InnerWrapper metric={metric}>
        <Header
          view={view}
          timer={timer}
          timerInterval={timerInterval}
          settingOptions={settingOptions}
          category={category}
          pagiState={pagiState}
        />
        {/* @ts-ignore */}
        <Body
          view={view}
          category={category}
          drink={curDrink}
          settingOptions={settingOptions}
        />
        <Footer view={view} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default bond(
  HaveADrinkContentContainer,
  'haveADrinkContent',
) as FC<TProps>
