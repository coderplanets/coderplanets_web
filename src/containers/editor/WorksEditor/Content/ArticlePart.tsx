import { FC, memo } from 'react'

import RichEditor from '@/containers/editor/RichEditor'
import { cutRest } from '@/utils/helper'

import type { TInputData } from '../spec'
import { Wrapper, EditorWrapper } from '../styles/content/article_part'
import { inputOnChange } from '../logic'

type TProps = {
  inputData: TInputData
}

const ArticlePart: FC<TProps> = ({ inputData }) => {
  const { title, body } = inputData
  return (
    <Wrapper>
      <EditorWrapper>
        {/* @ts-ignore */}
        <RichEditor
          data={body}
          placeholder={`// ${cutRest(title, 15)} 的故事（'Tab' 键插入富文本）`}
          onChange={(v) => inputOnChange(JSON.stringify(v), 'body')}
        />
      </EditorWrapper>
    </Wrapper>
  )
}

export default memo(ArticlePart)
