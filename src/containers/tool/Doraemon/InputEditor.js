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
  useShortcut(['Control+c', 'Control+g', 'Escape'], hidePanel)
  useShortcut('Control+p', () => navSuggestion('up'))
  useShortcut('Control+n', () => navSuggestion('down'))

  return (
    <EditorBar>
      <PrefixWrapper>
        <InputPrefix prefix={prefix} searching={searching} />
      </PrefixWrapper>
      <InputBar
        id="doraemonInputbar"
        testid="doraemon-inputer"
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
