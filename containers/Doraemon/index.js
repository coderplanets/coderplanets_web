/*
 *
 * Magic Doraemon
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { PageOverlay, PanelContainer, AlertBar } from './styles'

import InputEditor from './InputEditor'
import ResultsList from './ResultsList'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Doraemon')
/* eslint-enable no-unused-vars */
class DoraemonContainer extends React.Component {
  componentDidMount() {
    const { doraemon } = this.props
    logic.init(doraemon)
  }
  // ref={infobar => (this[`infobar${suggestion.title}`] = infobar)}
  // ref={wraper => (this.wraper = wraper)}

  render() {
    const { doraemon } = this.props
    const { inputValue, suggestions, activeRaw, prefix, visible } = doraemon

    // debug('activeRaw: ', activeRaw)
    // debug('suggestion.raw: ', suggestions.toJSON())

    return (
      <React.Fragment>
        <PageOverlay visible={visible} onClick={logic.hidePanel} />
        <PanelContainer visible={visible}>
          <InputEditor value={inputValue} searching={false} prefix={prefix} />
          {logic.repoNotFound(doraemon) && <AlertBar>Repo not found</AlertBar>}
          <ResultsList suggestions={suggestions} activeRaw={activeRaw} />
        </PanelContainer>
      </React.Fragment>
    )
  }
}

export default inject(storePlug('doraemon'))(observer(DoraemonContainer))
