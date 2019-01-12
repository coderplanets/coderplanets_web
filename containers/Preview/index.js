/*
 *
 * Preview
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'

// viewers
// import ArticleViwer from '../ArticleViwer'
import PostViewer from '../PostViewer'
import JobViewer from '../JobViewer'
// import AccountViewer from '../AccountViewer'
import VideoViewer from '../VideoViewer'
import RepoViewer from '../RepoViewer'
import MailsViewer from '../MailsViewer'
// eiditors
import VideoEditor from '../VideoEditor'
import RepoEditor from '../RepoEditor'

import { StateTree, EditorLoading } from '../../components'

import {
  PreviewOverlay,
  PreviewWrapper,
  PreviewCloser,
  PreviewContent,
  Closer,
  CloserInner,
} from './styles'

import { makeDebugger, storePlug, TYPE } from '../../utils'
import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Preview')

let DynamicPostEditor = null
let DynamicJobEditor = null
let DynamicAccountViewer = null
let DynamicAccountEditor = null

const CloseBtn = ({ type }) => (
  <PreviewCloser onClick={logic.closePreview}>
    <Closer type={type}>
      <CloserInner />
    </Closer>
  </PreviewCloser>
)

const Viewer = ({ type, root, attachment, attUser }) => {
  switch (type) {
    // account
    case TYPE.PREVIEW_ACCOUNT_VIEW: {
      return <DynamicAccountViewer />
    }
    case TYPE.PREVIEW_USER_VIEW: {
      return <DynamicAccountViewer user={attUser} />
    }
    case TYPE.PREVIEW_ACCOUNT_EDIT: {
      return <DynamicAccountEditor />
    }
    // post
    case TYPE.PREVIEW_POST_VIEW: {
      return <PostViewer attachment={attachment} />
    }
    case TYPE.PREVIEW_POST_CREATE: {
      return <DynamicPostEditor onClose={logic.closePreview} />
    }
    case TYPE.PREVIEW_POST_EDIT: {
      return (
        <DynamicPostEditor
          onClose={logic.closePreview}
          attachment={attachment}
        />
      )
    }
    // job
    case TYPE.PREVIEW_JOB_CREATE: {
      return <DynamicJobEditor onClose={logic.closePreview} />
    }
    case TYPE.PREVIEW_JOB_VIEW: {
      return <JobViewer attachment={attachment} />
    }
    case TYPE.PREVIEW_JOB_EDIT: {
      return (
        <DynamicJobEditor
          onClose={logic.closePreview}
          attachment={attachment}
        />
      )
    }
    // repo
    case TYPE.PREVIEW_REPO_VIEW: {
      return <RepoViewer attachment={attachment} />
    }
    case TYPE.PREVIEW_REPO_CREATE: {
      return <RepoEditor />
    }
    // video
    case TYPE.PREVIEW_VIDEO_EDIT: {
      return <VideoEditor attachment={attachment} />
    }
    case TYPE.PREVIEW_VIDEO_VIEW: {
      return <VideoViewer attachment={attachment} />
    }
    case TYPE.PREVIEW_VIDEO_CREATE: {
      return <VideoEditor />
    }
    case TYPE.PREVIEW_MAILS_VIEW: {
      return <MailsViewer />
    }
    // utils
    default: {
      return <StateTree json={root.toJSON()} />
    }
  }
}

class PreviewContainer extends React.Component {
  componentDidMount() {
    const { preview } = this.props
    logic.init(preview)

    DynamicPostEditor = dynamic({
      loader: () => import('../PostEditor'),
      /* eslint-disable-next-line */
      loading: () => <EditorLoading />,
      ssr: false,
    })

    DynamicJobEditor = dynamic({
      loader: () => import('../JobEditor'),
      /* eslint-disable-next-line */
      loading: () => <EditorLoading />,
      ssr: false,
    })

    DynamicAccountViewer = dynamic({
      loader: () => import('../AccountViewer'),
      ssr: false,
    })

    DynamicAccountEditor = dynamic({
      loader: () => import('../AccountEditor'),
      ssr: false,
    })
  }

  render() {
    const { preview } = this.props
    const { visible, type, root, attachmentData, attUserData } = preview

    return (
      <React.Fragment>
        <PreviewOverlay visible={visible} onClick={logic.closePreview} />
        <PreviewWrapper visible={visible} type={type}>
          <CloseBtn type={type} />
          <PreviewContent>
            <Viewer
              type={type}
              root={root}
              attachment={attachmentData}
              attUser={attUserData}
            />
          </PreviewContent>
        </PreviewWrapper>
      </React.Fragment>
    )
  }
}

export default inject(storePlug('preview'))(observer(PreviewContainer))
