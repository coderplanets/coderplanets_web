/*
 *
 * RichEditor
 *
 */

import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'
import useScript from '@/hooks/useScript'

import Header from './Header'

import type { TStore } from './store'
import { useInit } from './logic'
// import * as logic from './logic'

import OverwriteStyle from './styles/overwrite'
import { Wrapper, EditorWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('C:RichEditor')

type TProps = {
  richEditor?: TStore
  type?: 'article' | 'works' | 'job' | 'comment' | 'radar'
}

const RichEditorContainer: FC<TProps> = ({
  richEditor: store,
  type = 'article',
}) => {
  const [loaded] = useScript(
    'https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest',
  )

  useInit(store, loaded)

  // 使用模板 or 转载或翻译 or 请保持友善
  return (
    <Wrapper>
      <OverwriteStyle />
      <Header type={type} />
      <EditorWrapper id="codex-editor" />
    </Wrapper>
  )
}

export default pluggedIn(RichEditorContainer) as FC<TProps>
