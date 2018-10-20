/*
 *
 * Preview
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'

// viewers
import ArticleViwer from '../ArticleViwer'
import AccountViewer from '../AccountViewer'
import VideoViewer from '../VideoViewer'
import RepoViewer from '../RepoViewer'
// eiditors
import AccountEditor from '../AccountEditor'
import VideoEditor from '../VideoEditor'
import RepoEditor from '../RepoEditor'

import { StateTree, TypeWriterLoading } from '../../components'

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

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Preview')
/* eslint-enable no-unused-vars */

const DynamicTypeWriter = dynamic({
  loader: () => import('../TypeWriter'),
  /* eslint-disable */
  loading: () => <TypeWriterLoading />,
  /* eslint-enable */
  srr: false,
})

const CloseBtn = ({ type }) => (
  <PreviewCloser onClick={logic.closePreview}>
    <Closer type={type}>
      <CloserInner />
    </Closer>
  </PreviewCloser>
)

// const Viewer = ({ type, root, themeKeys, curTheme }) => {
// <AccountViewer2 themeKeys={themeKeys} curTheme={curTheme} />

// TODO: post edit viewer
const Viewer = ({ type, root, attachment }) => {
  switch (type) {
    // account
    case TYPE.PREVIEW_ACCOUNT_VIEW: {
      return <AccountViewer />
    }
    case TYPE.PREVIEW_ACCOUNT_EDIT: {
      return <AccountEditor />
    }
    // post
    case TYPE.PREVIEW_POST_VIEW: {
      return <ArticleViwer attachment={attachment} />
    }
    case TYPE.PREVIEW_POST_CREATE: {
      return <DynamicTypeWriter onClose={logic.closePreview} />
    }
    case TYPE.PREVIEW_POST_EDIT: {
      return (
        <DynamicTypeWriter
          onClose={logic.closePreview}
          attachment={attachment}
        />
      )
    }
    // job
    case TYPE.PREVIEW_JOB_CREATE: {
      return <DynamicTypeWriter onClose={logic.closePreview} />
    }
    case TYPE.PREVIEW_JOB_VIEW: {
      return <ArticleViwer attachment={attachment} />
    }
    case TYPE.PREVIEW_JOB_EDIT: {
      return (
        <DynamicTypeWriter
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
      return <h3>PREVIEW_VIDEO_EDIT</h3>
    }
    case TYPE.PREVIEW_VIDEO_VIEW: {
      return <VideoViewer attachment={attachment} />
    }
    case TYPE.PREVIEW_VIDEO_CREATE: {
      return <VideoEditor />
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
  }

  render() {
    const { preview } = this.props
    const { visible, type, root, attachmentData } = preview

    return (
      <React.Fragment>
        <PreviewOverlay visible={visible} onClick={logic.closePreview} />
        <PreviewWrapper visible={visible} type={type}>
          <CloseBtn type={type} />
          <PreviewContent>
            <Viewer type={type} root={root} attachment={attachmentData} />
          </PreviewContent>
        </PreviewWrapper>
      </React.Fragment>
    )
  }
}

export default inject(storePlug('preview'))(observer(PreviewContainer))
