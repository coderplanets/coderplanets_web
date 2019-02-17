/*
 *
 * Doraemon:InputEditor
 *
 */

import React from 'react'
import keydown from 'react-keydown'

import * as logic from './logic'

import { EditorBar, InputBar, PrefixWraper } from './styles/input_editor'

import InputPrefix from './InputPrefix'
// const debug = makeDebugger('C:Doraemon:InputEditor')

export default class InputEditor extends React.Component {
  /* eslint-disable class-methods-use-this */
  @keydown(['ctrl+g', 'ctrl+c'])
  hidePanel() {
    logic.hidePanel()
  }

  // Prevent default behavior in text input while pressing arrow up
  // https://stackoverflow.com/questions/1080532/prevent-default-behavior-in-text-input-while-pressing-arrow-up
  @keydown(['ctrl+p'])
  up(e) {
    logic.navSuggestion('up')
    e.preventDefault()
  }

  @keydown(['ctrl+n'])
  down(e) {
    logic.navSuggestion('down')
    e.preventDefault()
  }

  /* eslint-enable class-methods-use-this */

  render() {
    const { searching, value, prefix } = this.props

    // if you want to use innerRef
    // see https://github.com/styled-components/styled-components/issues/102
    // innerRef={input => (this.doraemonInput = input)}
    return (
      <EditorBar>
        <PrefixWraper>
          <InputPrefix prefix={prefix} searching={searching} />
        </PrefixWraper>
        <InputBar
          id="doraemonInputbar"
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          onKeyDown={logic.handleShortCuts}
          onBlur={logic.inputOnBlur}
          onChange={logic.inputOnChange}
          value={value}
          placeholder="type ? for help"
        />
      </EditorBar>
    )
  }
}
