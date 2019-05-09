/*
 *
 * CheatsheetThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Prism from 'mastani-codehighlight'

import { makeDebugger, storePlug, TYPE } from '@utils'

import EmptyThread from '@components/EmptyThread'
import { CheatSheetLoading } from '@components/LoadingEffects'
import GithubSyncWarning from '@components/GithubSyncWarning'

import Cheatsheet from './Cheatsheet'
import Note from './Note'

import { Wrapper, EmptyOffset } from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:CheatsheetThread')

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

class CheatsheetThreadContainer extends React.Component {
  componentDidMount() {
    const { cheatsheetThread } = this.props
    logic.init(cheatsheetThread)

    Prism.highlightAll()
    setTimeout(() => {
      Prism.highlightAll()
    }, 1000)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { cheatsheetThread } = this.props
    const {
      cheatsheetData,
      curView,
      curCommunity,
      showSyncWarning,
      isLogin,
    } = cheatsheetThread

    const communityRaw = curCommunity.raw

    return (
      <Wrapper>
        <GithubSyncWarning
          show={showSyncWarning}
          onClose={logic.syncWarnOnClose}
        />
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
}

export default inject(storePlug('cheatsheetThread'))(
  observer(CheatsheetThreadContainer)
)
