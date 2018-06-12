/*
 * rootStore store
 *
 */

import { types as t } from 'mobx-state-tree'

import { makeDebugger, markStates } from '../../utils'
import RouteStore from '../RouteStore'
import CommunitiesStore from '../CommunitiesStore'
import { ThemeStore, ThemeDefaults } from '../ThemeStore'

import {
  // domain
  UsersStore,
  AccountStore,
  BodylayoutStore,
  ApiLayoutStore,
  HeaderStore,
  BannerStore,
  ContentStore,
  CurCommunity,
  // papers
  PostsThreadStore,
  JobsThreadStore,
  //
  CommunitiesContentStore,
  CheatSheetContentStore,
  // viewers
  ArticleViwerStore,
  AccountViewerStore,
  CommentsStore,
  TutsViewerStore,
  MapViewerStore,
  JobsViewerStore,
  CheatSheetPaperStore,
  // toolbox
  DoraemonStore,
  PreviewStore,
  SidebarStore,
  TypeWriterStore,
  AccountEditorStore,
} from '../storeIndex'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:rootStore')
/* eslint-enable no-unused-vars */

const rootStore = t
  .model({
    // domain stores
    account: t.optional(AccountStore, {}),
    users: t.maybe(UsersStore),
    route: t.optional(RouteStore, {}),
    curCommunity: t.optional(CurCommunity, {}),
    communities: t.optional(CommunitiesStore, {}),
    comments: t.optional(CommentsStore, {}),
    theme: t.optional(ThemeStore, ThemeDefaults),
    appLocale: t.optional(t.enumeration('locale', ['zh', 'en']), 'zh'),
    appLangs: t.map(t.frozen),
    // domain end

    // toolbox
    sidebar: t.optional(SidebarStore, { menuItems: [] }),
    preview: t.optional(PreviewStore, { visible: false }),
    doraemon: t.optional(DoraemonStore, {}),
    typeWriter: t.optional(TypeWriterStore, {}),
    accountEditor: t.optional(AccountEditorStore, {}),
    // toolbox end

    // layouts > xxx > papers
    // layouts
    bodylayout: t.optional(BodylayoutStore, {}),
    apiLayout: t.optional(ApiLayoutStore, {}),
    header: t.optional(HeaderStore, {}),
    banner: t.optional(BannerStore, {}),
    content: t.optional(ContentStore, {}),
    // layouts end

    // content
    communitiesContent: t.optional(CommunitiesContentStore, {}),
    cheatSheatContent: t.optional(CheatSheetContentStore, {}),
    // content end

    // papers
    postsThread: t.optional(PostsThreadStore, {}),
    jobsThread: t.optional(JobsThreadStore, {}),
    cheatSheetPaper: t.optional(CheatSheetPaperStore, {}),

    // viewers (for preview usage)
    articleViwer: t.optional(ArticleViwerStore, {}),
    accountViewer: t.optional(AccountViewerStore, {}),

    // TODO rename to xxPaper
    tutsViewer: t.optional(TutsViewerStore, {}),
    mapViewer: t.optional(MapViewerStore, {}),
    jobsViewer: t.optional(JobsViewerStore, {}),
  })
  .views(self => ({
    get locale() {
      return self.appLocale
    },
    get langs() {
      return self.appLangs
    },
    get langMessages() {
      // TODO: try - catch
      // return self.langs.toJSON()[self.appLocale]
      return self.langs.get(self.locale)
    },
    get doraemonVisible() {
      // TODO self.doraemon.visible
      return self.doraemon.visible
    },
    // TODO: remove it
    get curPath() {
      return self.route.curPath
    },
    // TODO: rename to routeInfo
    get curRoute() {
      return self.route.curRoute
    },
    get accountInfo() {
      return self.account.accountInfo
    },
  }))
  .actions(self => ({
    afterCreate() {
      // self.communities.load()
      self.sidebar.load()
    },

    setHeaderFix(fix) {
      self.header.setFix(fix)
    },
    openDoraemon() {
      self.doraemon.open()
    },
    openPreview(type) {
      self.preview.open(type)
    },
    closePreview() {
      self.preview.close()
    },
    changeTheme(name) {
      self.theme.changeTheme(name)
    },
    changeLocale(locale) {
      self.appLocale = locale
    },
    setLangMessages(key, val) {
      // self.appLangs.set({ en: { fic: 2 } })
      self.appLangs.set(key, val)
    },
    isLocaleExist(locale) {
      return !!self.langs.get(locale)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default rootStore
