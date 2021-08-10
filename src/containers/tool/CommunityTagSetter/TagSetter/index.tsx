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
}

const Setter: FC<TProps> = () => {
  const [view, setView] = useState<TTagView>('select') // select or delete or edit or add

  return (
    <Wrapper>
      <Header view={view} setView={setView} />
      {/* {view === 'search' && <SearchBox />} */}
      <Body view={view} />
      <Footer />
    </Wrapper>
  )
}

export default memo(Setter)
