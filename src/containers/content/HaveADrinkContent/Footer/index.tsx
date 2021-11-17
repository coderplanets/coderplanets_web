/*
 *
 * HaveADrink Footer
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import type { TView } from '../spec'

import Contributor from './Contributor'
import Feature from './Feature'
import Share from './Share'

import { VIEW } from '../constant'
import { Wrapper, InnerWrapper } from '../styles/footer'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const View = ({ view }) => {
  switch (view) {
    case VIEW.DEFAULT: {
      return (
        <InnerWrapper>
          <Feature />
          <Contributor />
          <Share />
        </InnerWrapper>
      )
    }
    default: {
      return <div />
    }
  }
}

type TProps = {
  view: TView
}

const Footer: FC<TProps> = ({ view }) => {
  return (
    <Wrapper>
      <View view={view} />
    </Wrapper>
  )
}

export default memo(Footer)
