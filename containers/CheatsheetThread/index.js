/*
 *
 * CheatsheetThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Prism from 'mastani-codehighlight'

import { Wrapper } from './styles'

import { EmptyThread, CheatSheetLoading } from '../../components'

import Cheatsheet from './Cheatsheet'
import Note from './Note'

import { makeDebugger, storePlug, TYPE } from '../../utils'
import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:CheatsheetThread')
/* eslint-enable no-unused-vars */

const renderView = (cheatsheetData, type, communityRaw) => {
  switch (type) {
    case TYPE.LOADING: {
      return <CheatSheetLoading />
    }
    case TYPE.NOT_FOUND: {
      return <EmptyThread community={communityRaw} thread="cheatsheet" />
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
    const { cheatsheetData, curView, curCommunity } = cheatsheetThread
    const communityRaw = curCommunity.raw

    return (
      <Wrapper>
        {renderView(cheatsheetData, curView, communityRaw)}
        <Note
          onSync={logic.syncCheetsheetFromGithub}
          contributors={cheatsheetData.contributors}
          views={cheatsheetData.views}
          addContributor={logic.addContributor}
          curView={curView}
        />
      </Wrapper>
    )
  }
}

export default inject(storePlug('cheatsheetThread'))(
  observer(CheatsheetThreadContainer)
)
