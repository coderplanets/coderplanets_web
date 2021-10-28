import { FC, memo } from 'react'

import RichEditor from '@/containers/editor/RichEditor'

import { Wrapper, EditorWrapper } from '../../styles/content/article_part'

type TProps = {
  useTemplate: boolean
}

const ArticlePart: FC<TProps> = ({ useTemplate }) => {
  return (
    <Wrapper>
      <EditorWrapper>
        <RichEditor />
      </EditorWrapper>
    </Wrapper>
  )
}

export default memo(ArticlePart)
