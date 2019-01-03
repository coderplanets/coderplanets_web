/*
 * Editor based on Draft
 */

import React from 'react'
// import PropTypes from 'prop-types'

import { MarkdownEditor, ArticleEditToolbar } from '../../components'
import EditorFooter from './EditorFooter'

import { Wrapper, TitleInput, FooterWrapper } from './styles/editor'

import {
  inputOnChange,
  bodyInputOnChange,
  onMention,
  onMentionSearch,
  changeView,
} from './logic'

const Editor = ({ thread, editData, mentionList }) => {
  const { title, body } = editData

  return (
    <Wrapper>
      <ArticleEditToolbar
        thread={thread}
        editData={editData}
        onCopyrightChange={inputOnChange.bind(this, 'copyRight')}
        onLinkAddrChange={inputOnChange.bind(this, 'linkAddr')}
        onPreview={changeView.bind(this, 'PREVIEW_VIEW')}
      />
      <TitleInput
        placeholder="标 题."
        defaultValue=""
        value={title}
        onChange={inputOnChange.bind(this, 'title')}
      />

      <br />
      <MarkdownEditor
        onChange={bodyInputOnChange}
        body={body}
        mentionList={mentionList}
        onMention={onMention}
        onMentionSearch={onMentionSearch}
      />
      <FooterWrapper>
        <EditorFooter thread={thread} editData={editData} />
      </FooterWrapper>
    </Wrapper>
  )
}

export default Editor
