import React from 'react'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

import { TYPE } from '@constant'

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
  DynamicPostEditor2,
  DynamicJobEditor,
  DynamicVideoEditor,
  DynamicRepoEditor,
  //
  DynamicStateTree,
} from './DynamicComps'

import { Wrapper } from './styles/viewer'
import DefaultViewer from './DefaultViewer'
import { closePreview } from './logic'

const renderViewer = (type, root, attachment, attUser) => {
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
      return <DynamicPostEditor2 onClose={closePreview} />
    // return <DynamicPostEditor onClose={closePreview} />

    case TYPE.PREVIEW_POST_EDIT:
      return (
        <DynamicPostEditor onClose={closePreview} attachment={attachment} />
      )

    // job
    case TYPE.PREVIEW_JOB_CREATE:
      return <DynamicJobEditor onClose={closePreview} />

    case TYPE.PREVIEW_JOB_VIEW:
      return <DynamicJobViewer attachment={attachment} />

    case TYPE.PREVIEW_JOB_EDIT:
      return <DynamicJobEditor onClose={closePreview} attachment={attachment} />

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

    case TYPE.PREVIEW_ROOT_STORE:
      return <DynamicStateTree json={root.toJSON()} />

    default:
      return <DefaultViewer />
  }
}

const Viewer = ({ type, root, attachment, attUser }) => (
  <OverlayScrollbarsComponent
    options={{ scrollbars: { autoHide: 'scroll', autoHideDelay: 200 } }}
  >
    <Wrapper>{renderViewer(type, root, attachment, attUser)}</Wrapper>
  </OverlayScrollbarsComponent>
)

export default Viewer
