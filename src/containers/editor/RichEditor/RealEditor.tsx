/*
 *
 * RichEditor
 *
 */

import { FC } from 'react'

import RichEditor from '@groupher/react-editor'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Options from './Options'

import type { TStore } from './store'
import { useInit } from './logic'

import OverwriteStyle from './styles/overwrite'
import { Wrapper, InnerWrapper, EditorWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('C:RichEditor')

type TProps = {
  richEditor?: TStore
  data?: string
  type?: 'article' | 'works' | 'job' | 'comment' | 'radar'
  reinitOnPropsChange?: boolean
  onChange?: (json) => void
  onLinkChange?: (link: string) => void
  onUseTemplateChange?: (use: boolean) => void
}

const RichEditorContainer: FC<TProps> = ({
  richEditor: store,
  data,
  type = 'article',
  reinitOnPropsChange = false,
  onChange = log,
  onLinkChange = log,
  onUseTemplateChange = log,
}) => {
  useInit(store)

  // 使用模板 or 转载或翻译 or 请保持友善
  return (
    <Wrapper>
      <InnerWrapper>
        <Options
          type={type}
          onLinkChange={onLinkChange}
          onUseTemplateChange={onUseTemplateChange}
        />
        <EditorWrapper className="rich-editor">
          <RichEditor
            onData={onChange}
            data={JSON.parse(data || '{}')}
            reinitOnPropsChange={reinitOnPropsChange}
          />
          <OverwriteStyle />
        </EditorWrapper>
      </InnerWrapper>
      {/* <EditorWrapper id="codex-editor" /> */}
    </Wrapper>
  )
}

export default pluggedIn(RichEditorContainer) as FC<TProps>
