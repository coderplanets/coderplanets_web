/*
 *
 * RichEditor
 *
 */

import React from 'react'
import Editor from '@groupher/react-editor'

import { connectStore, buildLog } from '@utils'
import { useScript } from '@hooks'

import { useInit, onChange } from './logic'
// import * as logic from './logic'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('C:RichEditor')

const RichEditorContainer = ({ richEditor }) => {
  const [uploaderLoaded] = useScript(
    'https://gosspublic.alicdn.com/aliyun-oss-sdk-5.2.0.min.js'
  )

  useInit(richEditor, uploaderLoaded)

  return (
    <Wrapper>
      <Editor onData={onChange} />
    </Wrapper>
  )
}

export default connectStore(RichEditorContainer)
