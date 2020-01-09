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

const Footer = () => {
  return (
    <Wrapper>
      <Contributor />
      <Feature />
      <Share />
    </Wrapper>
  )
}

export default Footer
