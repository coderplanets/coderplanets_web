/*
 *
 * HaveADrink Footer
 *
 */

import React from 'react'

import { buildLog } from '@utils'

import Contributor from './Contributor'
import Feature from './Feature'
import Share from './Share'

import { Wrapper } from '../styles/header'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const View = ({ view }) => {
  switch (view) {
    case 'default': {
      return (
        <React.Fragment>
          <Feature />
          <Contributor />
          <Share />
        </React.Fragment>
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

export default Footer
