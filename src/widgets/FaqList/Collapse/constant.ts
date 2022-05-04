import { ICON } from '@/config'

export const MENU = {
  FOLD_ALL: {
    key: 'fold',
    icon: `${ICON}/menu/hot.svg`,
    title: '折叠全部',
  },
  UNFOLD_ALL: {
    key: 'unfold',
    icon: `${ICON}/menu/hot.svg`,
    title: '展开全部',
  },
  AUTH_EDIT: {
    key: 'edit',
    icon: `${ICON}/edit/publish-pen.svg`,
    title: '编辑',
  },
}

export const DEFAULT_MENU = [MENU.FOLD_ALL, MENU.UNFOLD_ALL, MENU.AUTH_EDIT]
