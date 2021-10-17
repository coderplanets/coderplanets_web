/*
 *
 * TagList
 *
 */

import { FC, memo } from 'react'

// import type { TTag } from '@/spec'
import { buildLog } from '@/utils/logger'

import Header from './Header'
// import SearchBox from './SearchBox'
import Body from './Body'
import Footer from './Footer'

import type { TTagsList, TTagView } from '../spec'
import { Wrapper } from '../styles/tag_setter'

/* eslint-disable-next-line */
const log = buildLog('c:TagList:index')

export type TProps = {
  testid?: string
  withSetter?: boolean
  view: TTagView
  tagsList: TTagsList
}

const Setter: FC<TProps> = ({ view, tagsList }) => {
  return (
    <Wrapper>
      <Header view={view} />
      <Body view={view} tagsList={tagsList} />
      <Footer />
    </Wrapper>
  )
}

export default memo(Setter)
