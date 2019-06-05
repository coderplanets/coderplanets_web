/*
 *
 * jobEditor
 *
 */

import React from 'react'
import dynamic from 'next/dynamic'

import { connectStore, makelogger } from '@utils'

import ArticleEditFooter from '@components/ArticleEditFooter'
import { ArticleContentLoading } from '@components/LoadingEffects'

import Editor from './Editor'
import Preview from './Preview'
// import MarkDownHelper from './MarkDownHelper'
import Header from './Header'

import { Wrapper, ViewerWrapper } from './styles'

import { useInit, changeView, onPublish, canclePublish } from './logic'

export const DynamicMarkDownHelper = dynamic({
  loader: () => import('./MarkDownHelper'),
  /* eslint-disable-next-line */
  loading: () => <ArticleContentLoading />,
  ssr: false,
})
/* eslint-disable-next-line */
const log = makelogger('C:JobEditor')

const View = ({
  isEdit,
  curView,
  thread,
  editData,
  mentionList,
  contentDomId,
}) => {
  if (curView === 'CREATE_VIEW' || curView === 'PREVIEW_VIEW') {
    return (
      <React.Fragment>
        <ViewerWrapper active={curView === 'CREATE_VIEW'}>
          <Editor
            isEdit={isEdit}
            thread={thread}
            editData={editData}
            mentionList={mentionList}
          />
        </ViewerWrapper>
        <ViewerWrapper active={curView === 'PREVIEW_VIEW'}>
          <Preview
            editData={editData}
            contentDomId={contentDomId}
            onBack={changeView.bind(this, 'CREATE_VIEW')}
          />
        </ViewerWrapper>
      </React.Fragment>
    )
  }
  return <DynamicMarkDownHelper />
}

const JobEditorContainer = ({ jobEditor, attachment }) => {
  useInit(jobEditor, attachment)

  const {
    copyRight,
    thread,
    curView,
    publishing,
    isEdit,
    editData,
    mentionListData,
    referUsersData,
    contentDomId,
  } = jobEditor

  return (
    <Wrapper>
      <Header isEdit={isEdit} curView={curView} referUsers={referUsersData} />
      <View
        isEdit={isEdit}
        curView={curView}
        editData={editData}
        thread={thread}
        copyRight={copyRight}
        mentionList={mentionListData}
        contentDomId={contentDomId}
      />
      <ArticleEditFooter
        isEdit={isEdit}
        publishing={publishing}
        onCancle={canclePublish}
        onPublish={onPublish}
      />
    </Wrapper>
  )
}

// JobEditorContainer.propTypes = {
// https://www.npmjs.com/package/prop-types
// closePreview: PropTypes.func.isRequired,
// }

// JobEditorContainer.defaultProps = {}

export default connectStore(JobEditorContainer)
