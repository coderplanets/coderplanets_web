import { FC, memo } from 'react'

import RichEditor from '@/containers/editor/RichEditor'
import Button from '@/components/Buttons/Button'

import {
  Wrapper,
  EditorWrapper,
  Footer,
} from '../../styles/content/article_part'

import { nextStep, toggleTemplate } from '../../logic'

type TProps = {
  useTemplate: boolean
}

const ArticlePart: FC<TProps> = ({ useTemplate }) => {
  const valid = true

  return (
    <Wrapper>
      <EditorWrapper>
        <RichEditor />
      </EditorWrapper>
      <Footer>
        {valid && (
          <Button size="medium" disabled={!valid} onClick={nextStep}>
            起飞
          </Button>
        )}
      </Footer>
    </Wrapper>
  )
}

export default memo(ArticlePart)
