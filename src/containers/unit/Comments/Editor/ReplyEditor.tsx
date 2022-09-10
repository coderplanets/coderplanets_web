import { FC, memo } from 'react'

import type { TSubmitState, TComment } from '@/spec'

import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'
import CustomScroller from '@/widgets/CustomScroller'

import BodyEditor from './BodyEditor'
import Footer from './Footer'

import {
  Wrapper,
  Header,
  ReplyToHint,
  ReplyToContent,
  ReplyToAuthor,
  EditorWrapper,
  FooterWrapper,
} from '../styles/editor/reply_editor'
import { commentOnChange, replyComment, closeReplyEditor } from '../logic'

type TProps = {
  body: string
  submitState: TSubmitState
  replyTo: TComment | null
}

const ReplyEditor: FC<TProps> = ({ body, submitState, replyTo }) => {
  return (
    <Wrapper>
      <Header>
        <ReplyToHint>
          回复 <ReplyToAuthor>{replyTo?.author?.nickname}</ReplyToAuthor>
        </ReplyToHint>
        <ReplyToContent
          dangerouslySetInnerHTML={{
            __html: replyTo?.bodyHtml,
          }}
        />
      </Header>
      <CustomScroller
        direction="vertical"
        height="320px"
        showShadow={false}
        autoHide={false}
      >
        <EditorWrapper>
          {replyTo.id ? (
            <BodyEditor
              body={body}
              placeholder="// 回复内容（'Tab' 键快速插入）"
              onChange={(v) => commentOnChange(v, 'replyBody')}
            />
          ) : (
            <LavaLampLoading top={10} left={30} />
          )}
        </EditorWrapper>
      </CustomScroller>

      <FooterWrapper>
        <Footer
          label="回 复"
          submitState={submitState}
          body={body}
          onPublish={replyComment}
          onCancel={closeReplyEditor}
        />
      </FooterWrapper>
    </Wrapper>
  )
}

export default memo(ReplyEditor)
