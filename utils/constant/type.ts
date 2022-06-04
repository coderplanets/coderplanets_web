import { merge, keys, reduce } from 'ramda'

import type { TArticleThread } from '@/spec'

import { ARTICLE_THREAD } from './thread'

type TArticleOpt =
  | `${Uppercase<TArticleThread>}_EDIT`
  | `${Uppercase<TArticleThread>}_VIEW`
  | `${Uppercase<TArticleThread>}_CREATE`

const DRAWER_ARTICLE_CRUD = reduce(
  merge,
  {},
  keys(ARTICLE_THREAD).map((T) => {
    return {
      [`${T}_VIEW`]: `${T}_VIEW`,
      [`${T}_CREATE`]: `${T}_CREATE`,
      [`${T}_EDIT`]: `${T}_EDIT`,
    }
  }),
) as Record<TArticleOpt, string>

const TYPE = {
  CUR_THEME: 'cur_theme',

  // actions
  FAVORITE: 'FAVORITE',
  STAR: 'STAR',

  USER_LISTER_FAVORITES: 'USER_LISTER_FAVORITES',
  USER_LISTER_STARS: 'USER_LISTER_STARS',
  USER_LISTER_COMMUNITY_EDITORS: 'USER_LISTER_COMMUNITY_EDITORS',
  USER_LISTER_COMMUNITY_SUBSCRIBERS: 'USER_LISTER_COMMUNITY_SUBSCRIBERS',

  USER_LISTER_FOLLOWINGS: 'USER_LISTER_FOLLOWINGS',
  USER_LISTER_FOLLOWERS: 'USER_LISTER_FOLLOWERS',

  // drawer types
  DRAWER: {
    ACCOUNT_VIEW: 'ACCOUNT_VIEW',
    USER_VIEW: 'USER_VIEW',
    ACCOUNT_EDIT: 'ACCOUNT_EDIT',

    MAILS_VIEW: 'MAILS_VIEW',
    DASHBOARD_DESC: 'DASHBOARD_DESC',

    ...DRAWER_ARTICLE_CRUD,

    // c11n settings
    C11N_SETTINGS: 'C11N_SETTINGS',

    // custom background editor
    CUSTOM_BG_EDITOR: 'CUSTOM_BG_EDITOR',

    // user lister
    USER_LISTER: 'USER_LISTER',

    // modeline
    MODELINE_MENU: 'MODELINE_MENU',
  },

  REPORT: {
    ARTICLE: 'ARTICLE',
    USER: 'USER',
    COMMENT: 'COMMENT',
    COMMUNITY: 'COMMUNITY',
  },

  // modeline menu type
  MM_TYPE: {
    GLOBAL_MENU: 'global_menu',
    COMMUNITY: 'community',
    FILTER: 'filter',
    EXPLORE: 'explore',
    PUBLISH: 'publish',
    SHARE: 'share',
    REPORT: 'report',
    COLLECT: 'collect',
    SEARCH: 'search',
    MORE: 'more',
    UPVOTE: 'upvote',
  },

  RES_STATE: {
    LOADING: 'LOADING',
    DONE: 'DONE',
    EMPTY: 'EMPTY',
  },
  // TODO: remove PAGE STATE
  LOADING: 'LOADING',
  NOT_FOUND: 'NOT_FOUND',
  RESULT: 'RESULT',
  RESULT_EMPTY: 'RESULT_EMPTY',
  // filters
  ASC_INSERTED: 'ASC_INSERTED',
  DESC_INSERTED: 'DESC_INSERTED',
  MOST_LIKES: 'MOST_LIKES',
  MOST_DISLIKES: 'MOST_DISLIKES',
}

export default TYPE
