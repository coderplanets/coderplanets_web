/*
 *
 * Magic Doraemon
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug, isBrowser } from 'utils'
import { PageOverlay, PanelContainer } from './styles'

import InputEditor from './InputEditor'
import ResultsList from './ResultsList'

import ThreadSelectBar from './ThreadSelectBar'
import AlertBar from './AlertBar'
import UtilsBar from './UtilsBar'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Doraemon')

const getDocument = () => (isBrowser() ? document : null)

class DoraemonContainer extends React.Component {
  constructor(props) {
    super(props)
    const { doraemon } = props
    logic.init(doraemon)
  }

  /* eslint-disable-next-line */
  escHandler(event) {
    if (event.keyCode === 27) {
      logic.hidePanel()
    }
  }

  componentDidMount() {
    const safeDocument = getDocument()

    if (safeDocument) {
      safeDocument.addEventListener('keydown', this.escHandler, false)
    }
  }

  componentWillUnmount() {
    const safeDocument = getDocument()

    if (safeDocument) {
      safeDocument.removeEventListener('keydown', this.escHandler, false)
    }
  }

  render() {
    const { doraemon } = this.props
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
          <InputEditor
            value={inputValue}
            searching={searching}
            prefix={prefix}
          />

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
}

export default inject(storePlug('doraemon'))(observer(DoraemonContainer))
