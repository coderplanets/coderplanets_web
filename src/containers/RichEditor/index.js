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

/* eslint-disable-next-line */
const log = buildLog('C:RichEditor')

const RichEditorContainer = ({ richEditor }) => {
  const [loaded] = useScript(
    'https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest'
  )

  useInit(richEditor, loaded)

  return (
    <div>
      <h2>RichEditor container!</h2>
      <div>impress me!</div>
      <div id="codex-editor" />
    </div>
  )
}

export default connectStore(RichEditorContainer)
