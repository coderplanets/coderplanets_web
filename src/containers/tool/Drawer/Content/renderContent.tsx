import { FC } from 'react'
import { TYPE } from '@/constant'
import ModeLineMenu from '@/containers/unit/ModeLineMenu'
import type { TUser } from '@/spec'

// import PlaceHolder from './PlaceHolder'

import {
  ArticleViewer,
  MailsViewer,
  // editors
  AccountEditor,
  // utils
  C11NSettingPanel,
  // userlister
  UserLister,
} from '../dynamics'

const renderContent = (
  type: string,
  attUser: TUser,
  userListerType: string,
  mmType?,
) => {
  if (!type) return <div />

  console.log('# mmType -> ', mmType)

  switch (type) {
    case TYPE.DRAWER.ACCOUNT_EDIT:
      return <AccountEditor />

    // case TYPE.DRAWER.REPO_CREATE:
    //   return <RepoEditor />

    case TYPE.DRAWER.MAILS_VIEW:
      return <MailsViewer />

    case TYPE.DRAWER.C11N_SETTINGS:
      return <C11NSettingPanel />

    case TYPE.DRAWER.MODELINE_MENU:
      // @ts-ignore
      return <ModeLineMenu type={mmType} />

    case TYPE.DRAWER.USER_LISTER: {
      return <UserLister type={userListerType} />
    }

    default:
      // TYPE.DRAWER.[ARTICLE]_VIEW:
      return <ArticleViewer />
  }
}

export default renderContent
