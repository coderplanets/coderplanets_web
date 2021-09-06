import { TYPE } from '@/constant'
import ModeLineMenu from '@/containers/unit/ModeLineMenu'
import type { TUser } from '@/spec'

import PlaceHolder from './PlaceHolder'

import {
  ArticleViewer,
  MailsViewer,
  // editors
  AccountEditor,
  PostEditor,
  RepoEditor,
  // utils
  C11NSettingPanel,
} from '../dynamics'

const renderContent = (type: string, attUser: TUser, mmType?) => {
  switch (type) {
    case TYPE.DRAWER.ACCOUNT_EDIT:
      return <AccountEditor />

    // TODO: use general function
    case TYPE.DRAWER.POST_VIEW:
    case TYPE.DRAWER.JOB_VIEW:
    case TYPE.DRAWER.WORKS_VIEW:
      return <ArticleViewer />

    case TYPE.DRAWER.POST_CREATE:
      return <PostEditor />

    case TYPE.DRAWER.POST_EDIT:
      return <PostEditor />

    case TYPE.DRAWER.REPO_CREATE:
      return <RepoEditor />

    case TYPE.DRAWER.MAILS_VIEW:
      return <MailsViewer />

    case TYPE.DRAWER.C11N_SETTINGS:
      return <C11NSettingPanel />

    case TYPE.DRAWER.MODELINE_MENU:
      // @ts-ignore
      return <ModeLineMenu type={mmType} />

    default:
      return <PlaceHolder />
  }
}

export default renderContent
