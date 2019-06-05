/*
 *
 * Content
 *
 */

import React from 'react'

import { connectStore, makelogger, ROUTE } from '@utils'

import CommunityContent from '@containers/CommunityContent'
import CommunitiesContent from '@containers/CommunitiesContent'
import CheatSheetContent from '@containers/CheatSheetContent'
import UserContent from '@containers/UserContent'

import { Wrapper } from './styles'

import { useInit } from './logic'

/* eslint-disable-next-line */
const log = makelogger('C:Content')

const renderContent = curRoute => {
  const { mainPath } = curRoute
  switch (mainPath) {
    case ROUTE.CHEATSHEETS:
      return <CheatSheetContent />

    case ROUTE.COMMUNITIES:
      return <CommunitiesContent />

    case ROUTE.USER:
      return <UserContent />

    default:
      return <CommunityContent />
  }
}

const ContentContainer = ({ content }) => {
  useInit(content)

  const { curRoute } = content

  return <Wrapper>{renderContent(curRoute)}</Wrapper>
}

export default connectStore(ContentContainer)
