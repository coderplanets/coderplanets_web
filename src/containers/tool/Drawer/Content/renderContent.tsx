import { TYPE } from '@/constant'
import ModeLineMenu from '@/containers/unit/ModeLineMenu'
import type { TUser } from '@/spec'

import DashboardDesc from '@/widgets/DashboardDesc'
// import PlaceHolder from './PlaceHolder'

import {
  ArticleViewer,
  MailsViewer,
  // editors
  AccountEditor,
  WallpaperEditor,
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
  const { DRAWER } = TYPE

  switch (type) {
    case DRAWER.ACCOUNT_EDIT:
      // @ts-ignore
      return <AccountEditor />

    // case TYPE.DRAWER.REPO_CREATE:
    //   return <RepoEditor />

    case DRAWER.MAILS_VIEW:
      // @ts-ignore
      return <MailsViewer />

    case DRAWER.C11N_SETTINGS:
      // @ts-ignore
      return <C11NSettingPanel />

    case DRAWER.DASHBOARD_DESC:
      return <DashboardDesc />

    case DRAWER.CUSTOM_BG_EDITOR:
      // @ts-ignore
      return <WallpaperEditor />

    case DRAWER.MODELINE_MENU:
      // @ts-ignore
      return <ModeLineMenu type={mmType} />

    case DRAWER.USER_LISTER: {
      // @ts-ignore
      return <UserLister type={userListerType} />
    }

    default:
      // @ts-ignore
      return <ArticleViewer />
  }
}

export default renderContent
