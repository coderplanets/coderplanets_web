import React from 'react'
import withClickOutside from 'react-click-outside'

import MarkDownRender from 'components/MarkDownRender'
import CommentBodyEditor from './CommentBodyEditor'

import { Container, PreviewerWrapper } from './styles/comment_editor'

import EditorHeader from './EditorHeader'
import EditorFooter from './EditorFooter'

import * as logic from './logic'

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
      mentionList,
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
          <CommentBodyEditor
            mentionList={mentionList}
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
