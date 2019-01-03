import React from 'react'
import withClickOutside from 'react-click-outside'
import dynamic from 'next/dynamic'

import { debounce } from '../../utils'
import * as logic from './logic'

import { MarkDownRender } from '../../components'

import {
  Container,
  InputEditorWrapper,
  PreviewerWrapper,
} from './styles/comment_editor'

import EditorHeader from './EditorHeader'
import EditorFooter from './EditorFooter'

const DynamicBodyEditor = dynamic({
  loader: () => import('../../components/MarkdownEditor'),
  /* eslint-disable */
  loading: () => <div>loading</div>,
  /* eslint-enable */
})

const InputEditor = ({
  showInputEditor,
  showInputPreview,
  body,
  mentions,
  onCreate,
  restProps: { creating },
}) => (
  <div className="comment-editor">
    <InputEditorWrapper showInputEditor={showInputEditor}>
      <DynamicBodyEditor
        mentions={mentions}
        onChange={debounce(logic.onCommentInputChange, 200)}
        onMention={logic.onMention}
        body={body}
      />
    </InputEditorWrapper>

    <EditorFooter
      loading={creating}
      showPreview={showInputPreview}
      onCreate={onCreate}
      onBackEdit={logic.backToEditor}
      onPreview={logic.createCommentPreview}
    />
    {/* <Footer loading={creating} showPreview={showInputPreview} /> */}
  </div>
)

const mentions = [
  {
    id: 112,
    name: 'mydearxym',
    avatar: 'https://avatars2.githubusercontent.com/u/6184465?v=4',
  },
  {
    id: 113,
    name: 'Julian',
    avatar: 'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar4.png',
  },
]

class CommentEditor extends React.Component {
  /* eslint-disable */
  handleClickOutside() {
    logic.onCommentInputBlur()
  }
  /* eslint-enable */

  render() {
    const {
      referUsers,
      accountInfo,
      onCreate,
      restProps: {
        countCurrent,
        showInputBox,
        showInputEditor,
        showInputPreview,
        editContent,
        creating,
      },
    } = this.props

    return (
      <Container show={showInputBox}>
        <EditorHeader
          accountInfo={accountInfo}
          showInputEditor={showInputEditor}
          showInputPreview={showInputPreview}
          countCurrent={countCurrent}
          referUsers={referUsers}
        />
        {showInputEditor ? (
          <InputEditor
            mentions={mentions}
            showInputPreview={showInputPreview}
            showInputEditor={showInputEditor}
            body={editContent}
            onCreate={onCreate}
            restProps={{ ...this.props }}
          />
        ) : null}
        {showInputPreview ? (
          <div>
            <PreviewerWrapper>
              <MarkDownRender body={editContent} />
            </PreviewerWrapper>
            <EditorFooter
              loading={creating}
              showPreview={showInputPreview}
              onCreate={onCreate}
              onBackEdit={logic.backToEditor}
              onPreview={logic.createCommentPreview}
            />
          </div>
        ) : null}
      </Container>
    )
  }
}

export default withClickOutside(CommentEditor)
