/*
 *
 * CheatsheetThread
 *
 */

import React from 'react'

import { TYPE } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import EmptyThread from '@/components/EmptyThread'
import { CheatSheetLoading } from '@/components/LoadingEffects'
import GithubSyncWarning from '@/components/GithubSyncWarning'

import Cheatsheet from './Cheatsheet'
import Note from './Note'

import { Wrapper, EmptyOffset } from './styles'
import { useInit, syncWarnOnClose } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CheatsheetThread')

const renderView = (cheatsheetData, type, communityRaw) => {
  switch (type) {
    case TYPE.LOADING: {
      return <CheatSheetLoading />
    }
    case TYPE.RESULT_EMPTY: {
      return (
        <EmptyOffset>
          <EmptyThread community={communityRaw} thread="cheatsheet" />
        </EmptyOffset>
      )
    }
    case TYPE.NOT_FOUND: {
      return (
        <EmptyOffset>
          <EmptyThread community={communityRaw} thread="cheatsheet" />
        </EmptyOffset>
      )
    }
    default: {
      return (
        <Cheatsheet
          source={cheatsheetData.readme}
          communityRaw={communityRaw}
        />
      )
    }
  }
}

const CheatsheetThreadContainer = ({ cheatsheetThread: store }) => {
  useInit(store)

  const {
    cheatsheetData,
    curView,
    curCommunity,
    showSyncWarning,
    isLogin,
  } = store

  const communityRaw = curCommunity.raw

  return (
    <Wrapper>
      <GithubSyncWarning show={showSyncWarning} onClose={syncWarnOnClose} />
      {renderView(cheatsheetData, curView, communityRaw)}
      <Note
        isLogin={isLogin}
        communityRaw={communityRaw}
        contributors={cheatsheetData.contributors}
        views={cheatsheetData.views}
        curView={curView}
      />
    </Wrapper>
  )
}

export default pluggedIn(CheatsheetThreadContainer)
