import { FC, memo } from 'react'

import WordsCounter from '@/components/WordsCounter'
import SubmitButton from '@/components/Buttons/SubmitButton'

import { Wrapper } from '../styles/editor/footer'
import { closeEditor } from '../logic'

type TProps = {
  loading: boolean
  onCreate: () => void
  onFold?: () => void
  showFold?: boolean
}

const EditorFooter: FC<TProps> = ({ loading, onCreate, showFold, onFold }) => (
  <Wrapper>
    <WordsCounter body="{}" bottom={3} min={10} />
    <SubmitButton
      okText="发 布"
      onPublish={console.log}
      onCancel={closeEditor}
    />
  </Wrapper>
)

export default memo(EditorFooter)
