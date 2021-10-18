import { FC, memo } from 'react'

import WordsCounter from '@/components/WordsCounter'
import SubmitButton from '@/components/Buttons/SubmitButton'

import { Wrapper } from './styles/editor_footer'

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
      onCancel={console.log}
    />
  </Wrapper>
)

export default memo(EditorFooter)
