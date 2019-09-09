/*
 * Editor based on Draft
 */

import React from 'react'
// import T from 'prop-types'
import dynamic from 'next/dynamic'

// import MarkdownEditor from '@components/MarkdownEditor'
import ArticleEditToolbar from '@components/ArticleEditToolbar'
import { ArticleContentLoading } from '@components/LoadingEffects'

import EditorFooter from './EditorFooter'

import { Wrapper, TitleInput, FooterWrapper } from './styles/editor'

import {
  inputOnChange,
  // bodyInputOnChange,
  // onMention,
  // onMentionSearch,
  changeView,
} from './logic'

export const DynamicRichEditor = dynamic({
  loader: () => import('@containers/RichEditor'),
  /* eslint-disable-next-line */
  loading: () => <ArticleContentLoading />,
  ssr: false,
})

const Editor = ({ thread, isEdit, editData }) => {
  const { title /* body */ } = editData

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
      <DynamicRichEditor thread={thread} editData={editData} isEdit={isEdit} />

      <FooterWrapper>
        <EditorFooter thread={thread} isEdit={isEdit} editData={editData} />
      </FooterWrapper>
    </Wrapper>
  )
}

export default Editor
