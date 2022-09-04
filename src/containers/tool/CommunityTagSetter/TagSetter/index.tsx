/*
 *
 * TagList
 *
 */

import { FC, memo } from 'react'

import type { TTag } from '@/spec'
import { buildLog } from '@/utils/logger'

import Header from './Header'
// import SearchBox from './SearchBox'
import Body from './Body'
import Footer from './Footer'

import type { TTagsList, TTagView } from '../spec'
import { Wrapper } from '../styles/tag_setter'

/* eslint-disable-next-line */
const log = buildLog('w:TagList:index')

export type TProps = {
  view: TTagView
  tagsList: TTagsList
  onTagSelect: (tag: TTag, select: boolean) => void
}

const Setter: FC<TProps> = ({ view, tagsList, onTagSelect }) => {
  return (
    <Wrapper>
      <Header view={view} />
      <Body view={view} tagsList={tagsList} onTagSelect={onTagSelect} />
      <Footer />
    </Wrapper>
  )
}

export default memo(Setter)
