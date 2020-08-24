/*
 *
 * jobEditor
 *
 */

import React from 'react'
import dynamic from 'next/dynamic'

import { connectStore, buildLog } from '@/utils'

import ArticleEditFooter from '@/components/ArticleEditFooter'
import { ArticleContentLoading } from '@/components/LoadingEffects'

import Editor from './Editor'
import Preview from './Preview'
// import MarkDownHelper from './MarkDownHelper'
import Header from './Header'

import { Wrapper, ViewerWrapper } from './styles'

import { useInit, changeView, onPublish, cancelPublish } from './logic'

export const MarkDownHelper = dynamic(() => import('./MarkDownHelper'), {
  /* eslint-disable react/display-name */
  loading: () => <ArticleContentLoading />,
  ssr: false,
})

/* eslint-disable-next-line */
const log = buildLog('C:JobEditor')

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
      <>
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
            onBack={() => changeView('CREATE_VIEW')}
          />
        </ViewerWrapper>
      </>
    )
  }
  return <MarkDownHelper />
}

const JobEditorContainer = ({ jobEditor: store, attachment }) => {
  useInit(store, attachment)

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
  } = store

  log('editData in views: ', editData)

  return (
    <Wrapper>
      <Header isEdit={isEdit} curView={curView} referUsers={referUsersData} />
      <View
        key={isEdit}
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
        onCancel={cancelPublish}
        onPublish={onPublish}
      />
    </Wrapper>
  )
}

// JobEditorContainer.propTypes = {
// https://www.npmjs.com/package/prop-types
// closePreview: T.func.isRequired,
// }

// JobEditorContainer.defaultProps = {}

export default connectStore(JobEditorContainer)
