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
  placeholder?: string
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
  placeholder = "// 正文内容（'Tab' 键快速插入）",
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
      <InnerWrapper type={type}>
        <Options
          type={type}
          onLinkChange={onLinkChange}
          onUseTemplateChange={onUseTemplateChange}
        />
        <EditorWrapper className="rich-editor" type={type}>
          <RichEditor
            onData={onChange}
            data={JSON.parse(data || '{}')}
            reinitOnPropsChange={reinitOnPropsChange}
            placeholder={placeholder}
          />
          <OverwriteStyle />
        </EditorWrapper>
      </InnerWrapper>
      {/* <EditorWrapper id="codex-editor" /> */}
    </Wrapper>
  )
}

export default pluggedIn(RichEditorContainer) as FC<TProps>
