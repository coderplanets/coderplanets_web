/*
 * CommunitiesStore store
 *
 */

// import R from 'ramda'
import { types as t, getParent } from 'mobx-state-tree'

import { makeDebugger } from '../../utils'
// import { Community } from '../SharedModel'

// TODO; pl framework cmd -> plLanguages frameworks cmds
/* import { pl, framework, database } from '../DoraemonStore/suggestions' */
// import { pl } from '../DoraemonStore/suggestions'

// import PlModel from './PlModel'

// import FrameworkModel from './FrameworkModel'
// / import DatabaseModel from './DatabaseModel'
// import CheatSheetModal from './CheatSheetModal'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:communities')
/* eslint-enable no-unused-vars */
// const debug = makeDebugger('S:CommunitiesStore')

export const Community = t.model('Community', {
  id: t.identifier(),
  /* id: t.string, */
  title: t.string,
  desc: t.string,
  raw: t.string,
  logo: t.string,
  recentContributesDigest: t.optional(t.array(t.number), []),
  subscribersCount: t.optional(t.number, 0),
  viewerHasSubscribed: t.maybe(t.boolean),
})

const CommunitiesStore = t
  .model('CommunitiesStore', {
    entries: t.optional(t.array(Community), []),
    pageNumber: t.optional(t.number, 1),
    pageSize: t.optional(t.number, 20), // TODO: USE CONSTANTS
    totalCount: t.optional(t.number, 1),
    totalPages: t.optional(t.number, 1),

    // id: t.identifier(),
    // languages: t.map(PlModel),
    // frameworks: t.map(FrameworkModel),
    // databases: t.map(DatabaseModel),
    // cheatsheet: t.optional(CheatSheetModal, { title: '', desc: '', raw: '' }),
    // jobs: ...
    // themes: ...
    // debug: ...
    // user: ...
    // cmds: t.map(CmdModel),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get all() {
      return {
        entries: self.entries,
        pageNumber: self.pageNumber,
        pageSize: self.pageSize,
        totalCount: self.totalCount,
        totalPages: self.totalPages,
      }
      // return R.mergeAll([
      // self.getLanguageLike(),
      // { cheatsheet: self.cheatsheet.toJSON() },
      // ])
      // return self.getLanguageLike()
    },
    get curCommunity() {
      // const { curRoute } = self.root
      const defaultCommunity = {
        title: 'js',
      }

      return {
        header: {},
        body: {},
        threads: [],
        title: defaultCommunity.title,
      }

      /*
      let { mainQuery } = curRoute
      mainQuery = R.isEmpty(mainQuery) ? defaultCommunity.title : mainQuery
      try {
        return {
          header: R.pick(['title', 'desc', 'raw'], self.all[mainQuery]),
          body: R.omit(['desc', 'title', 'raw', 'parent'], self.all[mainQuery]),
          threads: R.path(['threads'], self.all[mainQuery]),
          title: R.path(['title'], self.all[mainQuery]),
        }
      } catch (e) {
        return {
          header: {},
          body: {},
          threads: [],
          title: defaultCommunity.title,
        }
      }
      */
    },
    get curCommunityName() {
      return 'js'
      /*

         const { curRoute } = self.root
         const { mainQuery } = curRoute
         const defaultCommunity = 'js'

         return R.isEmpty(mainQuery) ? defaultCommunity : mainQuery
       */
    },
  }))
  .actions(self => ({
    load(data) {
      self.entries = data.entries
      self.pageNumber = data.pageNumber
      self.pageSize = data.pageSize
      self.totalCount = data.totalCount
      self.totalPages = data.totalPages
      /*
         R.forEachObjIndexed((v, k) => {
         self.languages.set(k, v)
         }, pl)
       */
      /*
         R.forEachObjIndexed((v, k) => {
         self.frameworks.set(k, v)
         }, framework)

         R.forEachObjIndexed((v, k) => {
         self.databases.set(k, v)
         }, database)
       */
      /*
         self.cheatsheet = {
         title: 'cheatsheet',
         desc: 'cheatsheet desc',
         raw: 'cheatsheet',
         }
       */
    },
  }))

export default CommunitiesStore
