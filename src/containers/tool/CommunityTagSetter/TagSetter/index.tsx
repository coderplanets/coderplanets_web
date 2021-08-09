/*
 *
 * TagList
 *
 */

import { FC, memo, useState } from 'react'

import type { TTag } from '@/spec'
import { buildLog } from '@/utils/logger'

import Header from './Header'
import SearchBox from './SearchBox'
import List from './List'
import Footer from './Footer'

import type { TView } from '../spec'
import { Wrapper } from '../styles/tag_setter'

/* eslint-disable-next-line */
const log = buildLog('c:TagList:index')

export type TProps = {
  testid?: string
  withSetter?: boolean
}

const Setter: FC<TProps> = () => {
  const [view, setView] = useState('select') // select or delete or edit or add

  return (
    <Wrapper>
      <Header view={view as TView} setView={setView} />
      {view === 'search' && <SearchBox />}
      <List
        view={view as TView}
        withDelete={view === 'list'}
        withSelect={view === 'search'}
      />
      <Footer />
    </Wrapper>
  )
}

export default memo(Setter)
