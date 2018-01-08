/*
 * rootStore store
 *
 */

import { types as t } from 'mobx-state-tree'
import { makeDebugger } from '../../utils/functions'

import RouteStore from '../RouteStore'
import { CommunitiesStore, CommunitiesDefaults } from '../CommunitiesStore'
import { ThemeStore, ThemeDefaults } from '../ThemeStore'
import { PostsStore, PostsDefaults } from '../PostsStore'

import BodylayoutStore from '../BodylayoutStore'
import ApiLayoutStore from '../ApiLayoutStore'
import SidebarStore from '../SidebarStore'
import PreviewStore from '../PreviewStore'
import DoraemonStore from '../DoraemonStore'
import GithubEampleStore from '../GithubEampleStore'
import HeaderStore from '../HeaderStore'
import BannerStore from '../BannerStore'
import ContentStore from '../ContentStore'

import PostsViewerStore from '../PostsViewerStore'
import TutsViewerStore from '../TutsViewerStore'
import MapViewerStore from '../MapViewerStore'
import JobsViewerStore from '../JobsViewerStore'
import CheatSheetViewerStore from '../CheatSheetViewerStore'

const debug = makeDebugger('S:rootStore')

const rootStore = t
  .model({
    version: t.optional(t.string, '0.0.4'),
    // domain modal
    route: t.optional(RouteStore, {}),
    communities: t.optional(CommunitiesStore, CommunitiesDefaults),
    posts: t.optional(PostsStore, PostsDefaults),
    // subscriptions: ...
    // mySubscriptions: ...
    // posts: ...
    // TODO: account: ...{ config } ..
    theme: t.optional(ThemeStore, ThemeDefaults),
    appLocale: t.optional(t.enumeration('locale', ['zh', 'en']), 'zh'),
    appLangs: t.map(t.frozen),
    // domain end

    bodylayout: t.optional(BodylayoutStore, {}),
    apiLayout: t.optional(ApiLayoutStore, {}),
    header: t.optional(HeaderStore, {}),
    banner: t.optional(BannerStore, {}),
    content: t.optional(ContentStore, {}),
    sidebar: t.optional(SidebarStore, { menuItems: [] }),
    preview: t.optional(PreviewStore, { visible: false }),
    doraemon: t.optional(DoraemonStore, {}),
    github: t.optional(GithubEampleStore, {}),

    postsViewer: t.optional(PostsViewerStore, {}),
    tutsViewer: t.optional(TutsViewerStore, {}),
    mapViewer: t.optional(MapViewerStore, {}),
    jobsViewer: t.optional(JobsViewerStore, {}),
    cheatsheetViewer: t.optional(CheatSheetViewerStore, {}),
    /*
       cheatsheets ...
       posts ...
       videos ...
       jobs ...
       meetups ...
     */
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
    get curRoute() {
      return self.route.curRoute
    },
  }))
  .actions(self => ({
    afterCreate() {
      debug('after create loadMenuItem')
      self.communities.load()
      self.sidebar.load()
      self.posts.load()
    },
    openDoraemon() {
      self.doraemon.open()
    },
    openPreview(type) {
      self.preview.open(type)
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
  }))

export default rootStore
