/*
 *
 * HaveADrink Body
 *
 */

import React from 'react'
import { AnimateOnChange } from 'react-animation'

import { buildLog } from '@utils'

import Catalog from './Catalog'
import Setting from './Setting'
import About from './About'

import { Wrapper, Sentence, Hint } from '../styles/body'
import { LN } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const View = ({ view, sentence, settingOptions }) => {
  const { VIEW } = LN

  const animate = {
    fade: {
      durationOut: 200,
    },
    bounce: {
      animationIn: 'bounceIn',
      animationOut: 'bounceOut',
      durationOut: 1000,
    },
  }

  switch (view) {
    case VIEW.CATALOG: {
      return <Catalog />
    }
    case VIEW.SETTING: {
      return <Setting settingOptions={settingOptions} />
    }
    case VIEW.ABOUT: {
      return <About />
    }
    default: {
      return (
        <React.Fragment>
          <Sentence fontSize={settingOptions.fontSize}>
            <AnimateOnChange {...animate[settingOptions.animateType]}>
              {sentence}
            </AnimateOnChange>
          </Sentence>

          <Hint>按「空格」键或「点击」刷新</Hint>
        </React.Fragment>
      )
    }
  }
}

const Body = ({ ...restProps }) => {
  return (
    <Wrapper>
      <View {...restProps} />
    </Wrapper>
  )
}

export default React.memo(Body)
