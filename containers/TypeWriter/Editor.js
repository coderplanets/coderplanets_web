/*
 * Editor based on Draft
 */

import React from 'react'
// import PropTypes from 'prop-types'

import EditorHeader from './EditorHeader'
import BodyEditor from './BodyEditor'
import EditorFooter from './EditorFooter'

import { Wrapper, TitleInput, FooterWrapper } from './styles/editor'
import { titleOnChange, bodyOnChange } from './logic'

const Editor = ({ thread, editData }) => {
  const { title, body } = editData
  return (
    <Wrapper>
      <EditorHeader thread={thread} editData={editData} />
      <TitleInput
        placeholder="标 题."
        defaultValue=""
        value={title}
        onChange={titleOnChange}
      />

      <br />
      <BodyEditor onChange={bodyOnChange} body={body} />
      <FooterWrapper>
        <EditorFooter thread={thread} editData={editData} />
      </FooterWrapper>
    </Wrapper>
  )
}

export default Editor
