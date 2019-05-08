/*
 *
 * Magic Doraemon
 *
 */

import React from 'react'

import { connectStore, makeDebugger } from '@utils'
import { PageOverlay, PanelContainer } from './styles'

import InputEditor from './InputEditor'
import ResultsList from './ResultsList'

import ThreadSelectBar from './ThreadSelectBar'
import AlertBar from './AlertBar'
import UtilsBar from './UtilsBar'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Doraemon')

const DoraemonContainer = ({ doraemon }) => {
  logic.useInit(doraemon)

  const {
    inputValue,
    inputValueRaw,
    suggestions,
    activeRaw,
    prefix,
    visible,
    searching,
    showAlert,
    showUtils,
    showThreadSelector,
    searchThread,
    searchedTotalCount,
  } = doraemon

  // debug('suggestion.raw: ', suggestions.toJSON())

  return (
    <React.Fragment>
      <PageOverlay visible={visible} onClick={logic.hidePanel} />
      <PanelContainer visible={visible}>
        <InputEditor value={inputValue} searching={searching} prefix={prefix} />

        {showThreadSelector && <ThreadSelectBar active={searchThread} />}
        {showAlert && (
          <AlertBar value={inputValue} searchThread={searchThread} />
        )}
        <ResultsList
          searchValue={inputValueRaw}
          suggestions={suggestions}
          activeRaw={activeRaw}
          searchThread={searchThread}
        />
        {showUtils && <UtilsBar total={searchedTotalCount} />}
      </PanelContainer>
    </React.Fragment>
  )
}

export default connectStore(DoraemonContainer)
