import React from 'react'

import { TYPE } from '@/constant'
import C11NSettingPanel from '@/containers/C11NSettingPanel'
import {
  AccountViewer,
  PostViewer,
  JobViewer,
  MailsViewer,
  RepoViewer,
  VideoViewer,
  // editors
  AccountEditor,
  PostEditor,
  JobEditor,
  VideoEditor,
  RepoEditor,
  // utils
  StateTree,
} from './dynamics'

import { Wrapper } from './styles/viewer'
import DefaultViewer from './DefaultViewer'
import { closePreview } from './logic'

const renderViewer = (type, root, attachment, attUser) => {
  switch (type) {
    case TYPE.PREVIEW_ACCOUNT_VIEW:
      return <AccountViewer />

    case TYPE.PREVIEW_USER_VIEW:
      return <AccountViewer user={attUser} />

    case TYPE.PREVIEW_ACCOUNT_EDIT:
      return <AccountEditor />

    // post
    case TYPE.PREVIEW_POST_VIEW:
      return <PostViewer attachment={attachment} />

    case TYPE.PREVIEW_POST_CREATE:
      return <PostEditor onClose={closePreview} />

    case TYPE.PREVIEW_POST_EDIT:
      return <PostEditor onClose={closePreview} attachment={attachment} />

    // job
    case TYPE.PREVIEW_JOB_CREATE:
      return <JobEditor onClose={closePreview} />

    case TYPE.PREVIEW_JOB_VIEW:
      return <JobViewer attachment={attachment} />

    case TYPE.PREVIEW_JOB_EDIT:
      return <JobEditor onClose={closePreview} attachment={attachment} />

    // repo
    case TYPE.PREVIEW_REPO_VIEW:
      return <RepoViewer attachment={attachment} />

    case TYPE.PREVIEW_REPO_CREATE:
      return <RepoEditor />

    // video
    case TYPE.PREVIEW_VIDEO_EDIT:
      return <VideoEditor attachment={attachment} />

    case TYPE.PREVIEW_VIDEO_VIEW:
      return <VideoViewer attachment={attachment} />

    case TYPE.PREVIEW_VIDEO_CREATE:
      return <VideoEditor />

    case TYPE.PREVIEW_MAILS_VIEW:
      return <MailsViewer />

    case TYPE.PREVIEW_ROOT_STORE:
      return <StateTree json={root.toJSON()} />

    case TYPE.PREVIEW_C11N_SETTINGS:
      return <C11NSettingPanel />

    default:
      return <DefaultViewer />
  }
}

const Viewer = ({ type, root, attachment, attUser }) => (
  <Wrapper>{renderViewer(type, root, attachment, attUser)}</Wrapper>
)

export default React.memo(Viewer)
