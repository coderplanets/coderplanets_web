import React from 'react'

import { TYPE } from '@/constant'
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
  C11NSettingPanel,
  MobileHeaderNavi,
} from '../dynamics'

import { Wrapper } from '../styles/content'
import DefaultViewer from './DefaultContent'
import { closeDrawer } from '../logic'

const renderContent = (type, root, attachment, attUser) => {
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
      return <PostEditor onClose={closeDrawer} />

    case TYPE.PREVIEW_POST_EDIT:
      return <PostEditor onClose={closeDrawer} attachment={attachment} />

    // job
    case TYPE.PREVIEW_JOB_CREATE:
      return <JobEditor onClose={closeDrawer} />

    case TYPE.PREVIEW_JOB_VIEW:
      return <JobViewer attachment={attachment} />

    case TYPE.PREVIEW_JOB_EDIT:
      return <JobEditor onClose={closeDrawer} attachment={attachment} />

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

    case TYPE.PREVIEW_MOBILE_NAVI_MENU:
      return <MobileHeaderNavi />

    default:
      return <DefaultViewer />
  }
}

const Content = ({ type, root, attachment, attUser }) => (
  <Wrapper>{renderContent(type, root, attachment, attUser)}</Wrapper>
)

export default React.memo(Content)
