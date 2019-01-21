/*
 *
 * Preview
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import {
  DynamicAccountViewer,
  DynamicPostViewer,
  DynamicJobViewer,
  DynamicMailsViewer,
  DynamicRepoViewer,
  DynamicVideoViewer,
  // editors
  DynamicAccountEditor,
  DynamicPostEditor,
  DynamicJobEditor,
  DynamicVideoEditor,
  DynamicRepoEditor,
  //
  DynamicStateTree,
} from './DynamicComps'

import AddOn from './AddOn'

import { PreviewOverlay, PreviewWrapper, PreviewContent } from './styles'

import { makeDebugger, storePlug, TYPE } from '../../utils'
import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Preview')

const Viewer = ({ type, root, attachment, attUser }) => {
  switch (type) {
    case TYPE.PREVIEW_ACCOUNT_VIEW:
      return <DynamicAccountViewer />

    case TYPE.PREVIEW_USER_VIEW:
      return <DynamicAccountViewer user={attUser} />

    case TYPE.PREVIEW_ACCOUNT_EDIT:
      return <DynamicAccountEditor />

    // post
    case TYPE.PREVIEW_POST_VIEW:
      return <DynamicPostViewer attachment={attachment} />

    case TYPE.PREVIEW_POST_CREATE:
      return <DynamicPostEditor onClose={logic.closePreview} />

    case TYPE.PREVIEW_POST_EDIT:
      return (
        <DynamicPostEditor
          onClose={logic.closePreview}
          attachment={attachment}
        />
      )

    // job
    case TYPE.PREVIEW_JOB_CREATE:
      return <DynamicJobEditor onClose={logic.closePreview} />

    case TYPE.PREVIEW_JOB_VIEW:
      return <DynamicJobViewer attachment={attachment} />

    case TYPE.PREVIEW_JOB_EDIT:
      return (
        <DynamicJobEditor
          onClose={logic.closePreview}
          attachment={attachment}
        />
      )

    // repo
    case TYPE.PREVIEW_REPO_VIEW:
      return <DynamicRepoViewer attachment={attachment} />

    case TYPE.PREVIEW_REPO_CREATE:
      return <DynamicRepoEditor />

    // video
    case TYPE.PREVIEW_VIDEO_EDIT:
      return <DynamicVideoEditor attachment={attachment} />

    case TYPE.PREVIEW_VIDEO_VIEW:
      return <DynamicVideoViewer attachment={attachment} />

    case TYPE.PREVIEW_VIDEO_CREATE:
      return <DynamicVideoEditor />

    case TYPE.PREVIEW_MAILS_VIEW:
      return <DynamicMailsViewer />

    // utils
    default:
      return <DynamicStateTree json={root.toJSON()} />
  }
}

class PreviewContainer extends React.Component {
  componentDidMount() {
    const { preview } = this.props
    logic.init(preview)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { preview } = this.props
    const {
      visible,
      type,
      root,
      attachmentData,
      attUserData,
      imageUploading,
    } = preview

    return (
      <React.Fragment>
        <PreviewOverlay visible={visible} onClick={logic.closePreview} />
        <PreviewWrapper visible={visible} type={type}>
          <AddOn type={type} imageUploading={imageUploading} />
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
