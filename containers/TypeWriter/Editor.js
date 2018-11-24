/*
 * Editor based on Draft
 */

import React from 'react'
// import PropTypes from 'prop-types'

import EditorHeader from './EditorHeader'
import BodyEditor from './BodyEditor'
import EditorFooter from './EditorFooter'

import { Wrapper, TitleInput, FooterWrapper } from './styles/editor'
import {
  inputOnChange,
  bodyInputOnChange,
  onMention,
  onMentionSearch,
} from './logic'

const Editor = ({ thread, editData, mentionList }) => {
  const { title, body } = editData

  return (
    <Wrapper>
      <EditorHeader thread={thread} editData={editData} />
      <TitleInput
        placeholder="标 题."
        defaultValue=""
        value={title}
        onChange={inputOnChange.bind(this, 'title')}
      />

      <br />
      <BodyEditor
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
