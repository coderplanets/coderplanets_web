import { FC, memo } from 'react'

import type { TSubmitState } from '@/spec'

import WordsCounter from '@/components/WordsCounter'
import SubmitButton from '@/components/Buttons/SubmitButton'

import { Wrapper } from '../styles/editor/footer'
import { closeEditor, setWordsCountState } from '../logic'

type TProps = {
  body: string
  label?: string
  submitState: TSubmitState
  onPublish: () => void
}

const EditorFooter: FC<TProps> = ({
  body,
  label = '发 布',
  submitState,
  onPublish,
}) => (
  <Wrapper>
    <WordsCounter
      body={body}
      bottom={3}
      min={10}
      max={1000}
      onChange={setWordsCountState}
    />
    <SubmitButton
      okText={label}
      submitState={submitState}
      onPublish={onPublish}
      onCancel={closeEditor}
    />
  </Wrapper>
)

export default memo(EditorFooter)
