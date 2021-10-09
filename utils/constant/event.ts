const EVENT = {
  // every time when session come back
  SESSION_ROUTINE: 'SESSION_ROUTINE',
  LOGIN_PANEL: 'LOGIN_PANEL',
  LOGIN: 'LOGIN',
  // error
  ERR_RESCUE: 'ERR_RESCUE',

  AUTH_WARNING: 'AUTH_WARNING',
  LOGOUT: 'LOGOUT',
  // drawer
  DRAWER: {
    OPEN: 'DRAWER_OPEN',
    CLOSE: 'DRAWER_CLOSE',
    AFTER_CLOSE: 'AFTER_DRAWER_CLOSE',
    CONTENT_DRAGABLE: 'CONTENT_DRAGABLE',
  },

  UPVOTE_ON_ARTICLE_LIST: 'UPVOTE_ON_ARTICLE_LIST',
  // share
  SHARE: 'SHARE',

  // report
  REPORT: 'REPORT',
  // new end
  USER_LISTER_OPEN: 'USER_LISTER_OPEN',
  CALL_CASHIER: 'CALL_CASHIER',

  //
  PREVIEW_ARTICLE: 'PREVIEW_ARTICLE',

  // TAB
  COMMUNITY_TAB_CHANGE: 'COMMUNITY_TAB_CHANGE',
  ARTICLE_THREAD_CHANGE: 'ARTICLE_THREAD_CHANGE',
  // old
  COMMUNITY_CHANGE: 'COMMUNITY_CHANGE',

  // refresh
  RELOAD_ARTICLE: 'RELOAD_ARTICLE',
  REFRESH_COMMUNITIES: 'REFRESH_COMMUNITIES',
  REFRESH_ARTICLES: 'REFRESH_ARTICLES',
  REFRESH_POSTS: 'REFRESH_POSTS',
  REFRESH_REPOS: 'REFRESH_REPOS',
  REFRESH_JOBS: 'REFRESH_JOBS',
  REFRESH_REACTIONS: 'REFRESH_REACTIONS',
  // sync repo
  SYNC_REPO: 'SYNC_REPO',

  // Draft editor
  DRAFT_INSERT_SNIPPET: 'DRAFT_INSERT_SNIPPET',

  // favorites
  SET_FAVORITE_CONTENT: 'SET_FAVORITE_CONTENT',
  // customization
  SET_C11N: 'SET_C11N',
  // bills
  NEW_BILLS: 'NEW_BILLS',

  // doramon
  QUERY_DORAMON: 'QUERY_DORAMON',

  // set/unset community
  MIRROR_TO_COMMUNITY: 'MIRROR_TO_COMMUNITY',
  MOVE_TO_COMMUNITY: 'MOVE_TO_COMMUNITY',
  SET_TAG: 'SET_TAG',

  JOIN_US: 'JOIN_US',
  //
  C11N_DENSITY_CHANGE: 'C11N_DENSITY_CHANGE',
}

export default EVENT
