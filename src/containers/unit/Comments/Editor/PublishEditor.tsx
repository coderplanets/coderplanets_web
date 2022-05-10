import { FC, memo } from 'react'

import type { TSubmitState } from '@/spec'

// import Header from './Header'
import BodyEditor from './BodyEditor'

import { Wrapper } from '../styles/editor/publish_editor'
// import { commentOnChange, createComment, closeEditor } from '../logic'
import { commentOnChange } from '../logic'

type TProps = {
  body: string
  submitState: TSubmitState
}

const PublishEditor: FC<TProps> = ({ submitState, body }) => {
  return (
    <Wrapper>
      {/* <Header accountInfo={accountInfo} showEditor={showEditor} /> */}
      <BodyEditor
        body={body}
        onChange={(v) => commentOnChange(v, 'commentBody')}
      />

      {/* <Footer
        submitState={submitState}
        body={body}
        onPublish={createComment}
        onCancel={closeEditor}
      /> */}
    </Wrapper>
  )
}

export default memo(PublishEditor)
