/*
 *
 * Magic Doraemon
 *
 */

import React, { useEffect } from 'react'
import usePortal from 'react-useportal'

import { connectStore, buildLog, toggleGlobalBlur } from '@/utils'

import InputEditor from './InputEditor'
import ResultsList from './ResultsList'

import ThreadSelectBar from './ThreadSelectBar'
import AlertBar from './AlertBar'
import UtilsBar from './UtilsBar'

import { PageOverlay, PanelContainer } from './styles'
import { useInit, hidePanel } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Doraemon')

const DoraemonContainer = ({ doraemon: store }) => {
  useInit(store)
  const { Portal } = usePortal()

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
  } = store

  useEffect(() => toggleGlobalBlur(visible), [visible])

  return (
    <React.Fragment>
      {visible && (
        <Portal>
          <PageOverlay visible={visible} onClick={hidePanel} />
          <PanelContainer testid="doraemon-panel" visible={visible}>
            <InputEditor
              value={inputValue}
              searching={searching}
              prefix={prefix}
            />

            {showThreadSelector && <ThreadSelectBar active={searchThread} />}
            {showAlert && (
              <AlertBar value={inputValue} searchThread={searchThread} />
            )}
            {suggestions.length > 0 && (
              <ResultsList
                searchValue={inputValueRaw}
                suggestions={suggestions}
                activeRaw={activeRaw}
                searchThread={searchThread}
              />
            )}

            {showUtils && <UtilsBar total={searchedTotalCount} />}
          </PanelContainer>
        </Portal>
      )}
    </React.Fragment>
  )
}

export default connectStore(DoraemonContainer)
