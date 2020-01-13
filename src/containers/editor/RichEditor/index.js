/*
 *
 * RichEditor
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'
import { useScript } from '@hooks'

import { useInit } from './logic'
// import * as logic from './logic'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('C:RichEditor')

const RichEditorContainer = ({ richEditor }) => {
  const [loaded] = useScript(
    'https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest'
  )

  useInit(richEditor, loaded)

  return (
    <Wrapper>
      <h3>hello2</h3>
      <div id="codex-editor" />
    </Wrapper>
  )
}

export default connectStore(RichEditorContainer)
