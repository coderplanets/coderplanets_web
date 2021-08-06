/*
 *
 * RichEditor
 *
 */

import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'
import useScript from '@/hooks/useScript'

import type { TStore } from './store'
import { useInit } from './logic'
// import * as logic from './logic'

import RichEditorStyle from './styles/global_styles'
import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('C:RichEditor')

type TProps = {
  richEditor?: TStore
}

const RichEditorContainer: FC<TProps> = ({ richEditor: store }) => {
  const [loaded] = useScript(
    'https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest',
  )

  useInit(store, loaded)

  return (
    <Wrapper>
      <RichEditorStyle />
      <div id="codex-editor" />
    </Wrapper>
  )
}

export default pluggedIn(RichEditorContainer) as FC<TProps>
