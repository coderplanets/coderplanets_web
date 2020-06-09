/*
 *
 * Doraemon:InputEditor
 *
 */

import React from 'react'

import { useShortcut } from '@/hooks'
import InputPrefix from './InputPrefix'

import { EditorBar, InputBar, PrefixWrapper } from './styles/input_editor'

import {
  hidePanel,
  navSuggestion,
  handleKeyDown,
  inputOnBlur,
  inputOnChange,
} from './logic'

const InputEditor = ({ searching, value, prefix }) => {
  useShortcut(['ctrl+c', 'ctrl+g', 'esc'], hidePanel)
  useShortcut('ctrl+p', () => navSuggestion('up'))
  useShortcut('ctrl+n', () => navSuggestion('down'))

  return (
    <EditorBar>
      <PrefixWrapper>
        <InputPrefix prefix={prefix} searching={searching} />
      </PrefixWrapper>
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

export default React.memo(InputEditor)
