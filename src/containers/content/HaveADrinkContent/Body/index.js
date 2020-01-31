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

import { Wrapper, Sentence, Hint } from '../styles/body'
import { LN } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const View = ({ view, sentence }) => {
  const { VIEW } = LN
  switch (view) {
    case VIEW.CATALOG: {
      return <Catalog />
    }
    case VIEW.SETTING: {
      return <Setting />
    }
    default: {
      return (
        <React.Fragment>
          <Sentence>
            <AnimateOnChange
              // animationIn="bounceIn"
              // animationOut="bounceOut"
              // durationOut={1000}
              durationOut="200"
            >
              {sentence}
            </AnimateOnChange>
          </Sentence>

          <Hint>按「空格」键或「点击」刷新</Hint>
        </React.Fragment>
      )
    }
  }
}

const Body = ({ view, sentence }) => {
  return (
    <Wrapper>
      <View view={view} sentence={sentence} />
    </Wrapper>
  )
}

export default Body
