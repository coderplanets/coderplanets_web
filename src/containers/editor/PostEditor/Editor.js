/*
 * Editor based on Draft
 */

import React from 'react'
// import T from 'prop-types'

import MarkdownEditor from '@/components/MarkdownEditor'
import ArticleEditToolbar from '@/components/ArticleEditToolbar'
import EditorFooter from './EditorFooter'

import { Wrapper, TitleInput, FooterWrapper } from './styles/editor'

import {
  inputOnChange,
  bodyInputOnChange,
  onMention,
  onMentionSearch,
  changeView,
} from './logic'

const Editor = ({ thread, isEdit, editData, mentionList }) => {
  const { title, body } = editData

  return (
    <Wrapper>
      <ArticleEditToolbar
        thread={thread}
        editData={editData}
        onCopyrightChange={() => inputOnChange('copyRight')}
        onLinkAddrChange={() => inputOnChange('linkAddr')}
        onPreview={() => changeView('PREVIEW_VIEW')}
      />
      <TitleInput
        placeholder="标 题."
        defaultValue=""
        value={title}
        onChange={() => inputOnChange('title')}
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
        <EditorFooter thread={thread} isEdit={isEdit} editData={editData} />
      </FooterWrapper>
    </Wrapper>
  )
}

export default React.memo(Editor)
