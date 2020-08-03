/*
 *
 * HaveADrink Footer
 *
 */

import React from 'react'

import { buildLog } from '@/utils'

import Contributor from './Contributor'
import Feature from './Feature'
import Share from './Share'

import { Wrapper } from '../styles/header'
import { LN } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const View = ({ view }) => {
  const { VIEW } = LN

  switch (view) {
    case VIEW.DEFAULT: {
      return (
        <>
          <Feature />
          <Contributor />
          <Share />
        </>
      )
    }
    default: {
      return <div />
    }
  }
}

const Footer = ({ view }) => {
  return (
    <Wrapper>
      <View view={view} />
    </Wrapper>
  )
}

export default React.memo(Footer)
