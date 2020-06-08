/*
 *
 * PostEditor
 *
 */

import React from 'react'
/* import T from 'prop-types' */
import dynamic from 'next/dynamic'

import { connectStore, buildLog } from '@/utils'

import ArticleEditFooter from '@/components/ArticleEditFooter'
import { ArticleContentLoading } from '@/components/LoadingEffects'
import Modal from '@/components/Modal'

import Editor from './Editor'
import Preview from './Preview'
import Header from './Header'
import RadarNote from './RadarNote'

import { Wrapper, ViewerWrapper } from './styles'

import {
  useInit,
  changeView,
  onPublish,
  cancelPublish,
  onRadarNoteCLose,
} from './logic'

export const DynamicMarkDownHelper = dynamic({
  loader: () => import('./MarkDownHelper'),
  /* eslint-disable-next-line */
  loading: () => <ArticleContentLoading />,
  ssr: false,
})

/* eslint-disable-next-line */
const log = buildLog('C:PostEditor')

// const View = ({ curView, thread, copyRight, title, body, linkAddr }) => {
const View = ({
  curView,
  thread,
  isEdit,
  editData,
  mentionList,
  contentDomId,
}) => {
  if (curView === 'CREATE_VIEW' || curView === 'PREVIEW_VIEW') {
    return (
      <React.Fragment>
        <ViewerWrapper active={curView === 'CREATE_VIEW'}>
          <Editor
            thread={thread}
            editData={editData}
            isEdit={isEdit}
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

const PostEditorContainer = ({ postEditor: store, attachment }) => {
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
    showRadarNote,
  } = store

  log('editData in views: ', editData)

  return (
    <Wrapper>
      <Modal
        width="600px"
        show={showRadarNote}
        showCloseBtn
        onClose={onRadarNoteCLose}
      >
        <RadarNote />
      </Modal>
      <Header
        isEdit={isEdit}
        curView={curView}
        thread={thread}
        referUsers={referUsersData}
      />
      <View
        key={isEdit}
        curView={curView}
        editData={editData}
        isEdit={isEdit}
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

export default connectStore(PostEditorContainer)
