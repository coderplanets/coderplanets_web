/*
 *
 * TypeWriter
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import { ArticleEditFooter } from '../../components'

import Editor from './Editor'
import Preview from './Preview'
import MarkDownHelper from './MarkDownHelper'
import Header from './Header'

import { Wrapper, ViewerWrapper } from './styles'

import { init, uninit, changeView, onPublish, canclePublish } from './logic'
import { makeDebugger, storePlug } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostEditor')
/* eslint-enable no-unused-vars */

// const View = ({ curView, thread, copyRight, title, body, linkAddr }) => {
const View = ({ curView, thread, editData, mentionList }) => {
  if (curView === 'CREATE_VIEW' || curView === 'PREVIEW_VIEW') {
    return (
      <React.Fragment>
        <ViewerWrapper active={curView === 'CREATE_VIEW'}>
          <Editor
            thread={thread}
            editData={editData}
            mentionList={mentionList}
          />
        </ViewerWrapper>
        <ViewerWrapper active={curView === 'PREVIEW_VIEW'}>
          <Preview
            editData={editData}
            onBack={changeView.bind(this, 'CREATE_VIEW')}
          />
        </ViewerWrapper>
      </React.Fragment>
    )
  }
  return <MarkDownHelper />
}

// TODO: use input in old IE
class PostEditorContainer extends React.Component {
  // must use constructor, Draft thing
  constructor(props) {
    super(props)
    const { postEditor, attachment } = props

    init(postEditor, attachment)
  }

  componentWillUnmount() {
    debug('TODO: store state to localstarange')
    uninit()
  }

  render() {
    const { postEditor } = this.props

    const {
      copyRight,
      thread,
      curView,
      publishing,
      success,
      error,
      warn,
      isEdit,
      statusMsg,
      editData,
      mentionListData,
      referUsersData,
    } = postEditor

    return (
      <Wrapper>
        <Header
          isEdit={isEdit}
          curView={curView}
          thread={thread}
          referUsers={referUsersData}
        />
        <View
          curView={curView}
          editData={editData}
          thread={thread}
          copyRight={copyRight}
          mentionList={mentionListData}
        />
        <ArticleEditFooter
          isEdit={isEdit}
          publishing={publishing}
          success={success}
          error={error}
          warn={warn}
          statusMsg={statusMsg}
          onCancle={canclePublish}
          onPublish={onPublish}
        />
      </Wrapper>
    )
  }
}

export default inject(storePlug('postEditor'))(observer(PostEditorContainer))
