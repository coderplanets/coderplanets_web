/*
 *
 * PostEditor
 *
 */

import React from 'react'
/* import PropTypes from 'prop-types' */
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'

import { makeDebugger, storePlug } from 'utils'

import ArticleEditFooter from 'components/ArticleEditFooter'
import { ArticleContentLoading } from 'components/LoadingEffects'
import Modal from 'components/Modal'

import Editor from './Editor'
import Preview from './Preview'
import Header from './Header'
import RadarNote from './RadarNote'

import { Wrapper, ViewerWrapper } from './styles'

import {
  init,
  uninit,
  changeView,
  onPublish,
  canclePublish,
  onRadarNoteCLose,
} from './logic'

export const DynamicMarkDownHelper = dynamic({
  loader: () => import('./MarkDownHelper'),
  /* eslint-disable-next-line */
  loading: () => <ArticleContentLoading />,
  ssr: false,
})

/* eslint-disable-next-line */
const debug = makeDebugger('C:PostEditor')

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
      isEdit,
      editData,
      mentionListData,
      referUsersData,
      contentDomId,
      showRadarNote,
    } = postEditor

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
          onCancle={canclePublish}
          onPublish={onPublish}
        />
      </Wrapper>
    )
  }
}

export default inject(storePlug('postEditor'))(observer(PostEditorContainer))
