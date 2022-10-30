/*
 *
 * Magic Doraemon
 *
 */

import { Fragment, useEffect } from 'react'
import { Portal } from 'react-portal'

import { toggleGlobalBlur } from '@/utils/dom'
import { bond } from '@/utils/mobx'

import InputEditor from './InputEditor'
import ResultsList from './ResultsList'

import ThreadSelectBar from './ThreadSelectBar'
import AlertBar from './AlertBar'
import UtilsBar from './UtilsBar'

import { PageOverlay, PanelContainer } from './styles'
import { useInit, hidePanel } from './logic'

const DoraemonContainer = ({ doraemon: store }) => {
  useInit(store)

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
    <Fragment>
      {visible && (
        <Portal>
          <PageOverlay
            testid="doraemon-overlay"
            visible={visible}
            onClick={hidePanel}
          />
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
    </Fragment>
  )
}

export default bond(DoraemonContainer, 'doraemon')
