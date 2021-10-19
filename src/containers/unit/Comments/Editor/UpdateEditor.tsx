import { FC, memo } from 'react'

import type { TSubmitState } from '@/spec'

import { LavaLampLoading } from '@/components/dynamic'
import CustomScroller from '@/components/CustomScroller'

import BodyEditor from './BodyEditor'
import Footer from './Footer'

import {
  Wrapper,
  Header,
  EditorWrapper,
  FooterWrapper,
} from '../styles/editor/update_editor'
import { commentOnChange, createComment, closeUpdateEditor } from '../logic'

type TProps = {
  body: string
  submitState: TSubmitState
  id: string
}

const UpdateEditor: FC<TProps> = ({ id, body, submitState }) => {
  return (
    <Wrapper>
      <Header>修改评论</Header>
      <CustomScroller
        direction="vertical"
        height="320px"
        showShadow={false}
        autoHide={false}
      >
        <EditorWrapper>
          {id !== '' ? (
            <BodyEditor
              body={body}
              onChange={(v) => commentOnChange(v, 'commentBody')}
            />
          ) : (
            <LavaLampLoading top={10} left={30} />
          )}
        </EditorWrapper>
      </CustomScroller>

      <FooterWrapper>
        <Footer
          label="更 新"
          submitState={submitState}
          body={body}
          onPublish={createComment}
          onCancel={closeUpdateEditor}
        />
      </FooterWrapper>
    </Wrapper>
  )
}

export default memo(UpdateEditor)
