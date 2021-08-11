/*
 *
 * TagList
 *
 */

import { FC, memo, useState } from 'react'

// import type { TTag } from '@/spec'
import { buildLog } from '@/utils/logger'

import Header from './Header'
// import SearchBox from './SearchBox'
import Body from './Body'
import Footer from './Footer'

import type { TTagView } from '../spec'
import { Wrapper } from '../styles/tag_setter'

/* eslint-disable-next-line */
const log = buildLog('c:TagList:index')

export type TProps = {
  testid?: string
  withSetter?: boolean
  view: TTagView
}

const Setter: FC<TProps> = ({ view }) => {
  return (
    <Wrapper>
      <Header view={view} />
      <Body view={view} />
      <Footer />
    </Wrapper>
  )
}

export default memo(Setter)
