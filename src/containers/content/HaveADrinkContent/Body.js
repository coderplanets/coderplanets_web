/*
 *
 * HaveADrink Body
 *
 */

import React from 'react'

import { buildLog } from '@utils'

import Catalog from './Catalog'

import { Wrapper, Sentence, Hint } from './styles/body'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const View = ({ view }) => {
  switch (view) {
    case 'catalog': {
      return <Catalog />
    }

    default: {
      return (
        <React.Fragment>
          <Sentence>
            看见一个算命大师，我刚坐下他就问我，你算什么东西？
          </Sentence>
          <Hint>按「空格」键或「点击」刷新</Hint>
        </React.Fragment>
      )
    }
  }
}

const Body = ({ view }) => {
  return (
    <Wrapper>
      <View view={view} />
    </Wrapper>
  )
}

export default Body
