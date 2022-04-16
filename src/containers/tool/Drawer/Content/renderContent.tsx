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

  switch (type) {
    case TYPE.DRAWER.ACCOUNT_EDIT:
      // @ts-ignore
      return <AccountEditor />

    // case TYPE.DRAWER.REPO_CREATE:
    //   return <RepoEditor />

    case TYPE.DRAWER.MAILS_VIEW:
      // @ts-ignore
      return <MailsViewer />

    case TYPE.DRAWER.C11N_SETTINGS:
      // @ts-ignore
      return <C11NSettingPanel />

    case TYPE.DRAWER.MODELINE_MENU:
      // @ts-ignore
      return <ModeLineMenu type={mmType} />

    case TYPE.DRAWER.USER_LISTER: {
      // @ts-ignore
      return <UserLister type={userListerType} />
    }

    default:
      // @ts-ignore
      return <ArticleViewer />
  }
}

export default renderContent
