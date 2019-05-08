/*
 *
 * Doraemon:InputEditor
 *
 */

import React from 'react'

import { useShortcut } from '@components/Hooks'
import InputPrefix from './InputPrefix'

import { EditorBar, InputBar, PrefixWraper } from './styles/input_editor'

import {
  hidePanel,
  navSuggestion,
  handleKeyDown,
  inputOnBlur,
  inputOnChange,
} from './logic'

const InputEditor = ({ searching, value, prefix }) => {
  useShortcut(['ctrl+c', 'ctrl+g'], hidePanel)
  useShortcut('ctrl+p', () => navSuggestion('up'))
  useShortcut('ctrl+n', () => navSuggestion('down'))

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
        onKeyDown={handleKeyDown}
        onBlur={inputOnBlur}
        onChange={inputOnChange}
        value={value}
        placeholder="type ? for help"
      />
    </EditorBar>
  )
}

export default InputEditor

/*

   export default class InputEditor extends React.Component {
   @keydown(['ctrl+g', 'ctrl+c'])
   hidePanel() {
   hidePanel()
   }

   // Prevent default behavior in text input while pressing arrow up
   // https://stackoverflow.com/questions/1080532/prevent-default-behavior-in-text-input-while-pressing-arrow-up
   @keydown(['ctrl+p'])
   up(e) {
   navSuggestion('up')
   e.preventDefault()
   }

   @keydown(['ctrl+n'])
   down(e) {
   navSuggestion('down')
   e.preventDefault()
   }

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
   onKeyDown={logic.handleKeyDown}
   onBlur={logic.inputOnBlur}
   onChange={logic.inputOnChange}
   value={value}
   placeholder="type ? for help"
   />
   </EditorBar>
   )
   }
   }
 */
