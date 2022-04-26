/*
 * CommunityContent
 */

import { FC, Fragment } from 'react'

import { bond } from '@/utils/mobx'

import ClassicLayout from './ClassicLayout'

import type { TStore } from './store'
import { useInit } from './logic'

type TProps = {
  communityContent?: TStore
}

const CommunityContentContainer: FC<TProps> = ({ communityContent: store }) => {
  useInit(store)

  const { curThread } = store

  return (
    <Fragment>
      <ClassicLayout thread={curThread} />
    </Fragment>
  )
}

export default bond(CommunityContentContainer, 'communityContent') as FC<TProps>
