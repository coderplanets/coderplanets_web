/*
 *
 * PostEditor
 *
 */

import React from 'react'
/* import T from 'prop-types' */

import { connectStore, buildLog } from '@utils'

import ArticleEditFooter from '@components/ArticleEditFooter'
import Modal from '@components/Modal'

import Editor from './Editor'
// import Preview from './Preview'
import Header from './Header'
import RadarNote from './RadarNote'

import { Wrapper, ViewerWrapper } from './styles'

import {
  useInit,
  // changeView,
  onPublish,
  canclePublish,
  onRadarNoteCLose,
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:PostEditor')

const PostEditor2Container = ({ postEditor2, attachment }) => {
  useInit(postEditor2, attachment)

  const {
    // copyRight,
    thread,
    curView,
    publishing,
    isEdit,
    editData,
    mentionListData,
    referUsersData,
    // contentDomId,
    showRadarNote,
  } = postEditor2

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
      <ViewerWrapper>
        <Editor
          thread={thread}
          editData={editData}
          isEdit={isEdit}
          mentionList={mentionListData}
        />
      </ViewerWrapper>
      <ArticleEditFooter
        isEdit={isEdit}
        publishing={publishing}
        onCancle={canclePublish}
        onPublish={onPublish}
      />
    </Wrapper>
  )
}

export default connectStore(PostEditor2Container)
