/*
 *
 * TagList
 *
 */

import { FC, memo } from 'react'

// import type { TTag } from '@/spec'
import { buildLog } from '@/utils/logger'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import type { TCommunityView, TCommunityAction } from '../spec'
import { Wrapper } from '../styles/tag_setter'

/* eslint-disable-next-line */
const log = buildLog('c:TagList:index')

export type TProps = {
  testid?: string
  withSetter?: boolean
  view: TCommunityView
  action: TCommunityAction
}

const Setter: FC<TProps> = ({ view, action }) => {
  return (
    <Wrapper>
      <Header view={view} action={action} />
      <Body view={view} />
      <Footer />
    </Wrapper>
  )
}

export default memo(Setter)
