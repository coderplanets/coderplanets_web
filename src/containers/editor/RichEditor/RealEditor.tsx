/*
 *
 * RichEditor
 *
 */

import { FC, ReactNode } from 'react'

import RichEditor from '@groupher/react-editor'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

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
  addon?: ReactNode
  reinitKey?: string
  onChange?: (json) => void
}

const RichEditorContainer: FC<TProps> = ({
  richEditor: store,
  data,
  placeholder = "// 正文内容（'Tab' 键插入富文本）",
  type = 'article',
  reinitKey = '',
  onChange = log,
  addon = <div />,
}) => {
  useInit(store)

  // 使用模板 or 转载或翻译 or 请保持友善
  return (
    <Wrapper>
      <InnerWrapper type={type}>
        {type !== 'comment' && <Options addon={addon} />}
        <EditorWrapper className="rich-editor" type={type}>
          <RichEditor
            onData={onChange}
            reinitKey={reinitKey}
            data={JSON.parse(data || '{}')}
            placeholder={placeholder}
          />
          <OverwriteStyle />
        </EditorWrapper>
      </InnerWrapper>
      {/* <EditorWrapper id="codex-editor" /> */}
    </Wrapper>
  )
}

export default bond(RichEditorContainer, 'richEditor') as FC<TProps>
