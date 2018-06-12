/*
 * CommunitiesStore store
 *
 */

import R from 'ramda'
import { types as t, getParent } from 'mobx-state-tree'

import { markStates, makeDebugger } from '../../utils'
import { Community } from '../SharedModel'

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

const CommunitiesStore = t
  .model('CommunitiesStore', {
    entries: t.optional(t.array(Community), []),
    pageNumber: t.optional(t.number, 1),
    pageSize: t.optional(t.number, 20), // TODO: USE CONSTANTS
    totalCount: t.optional(t.number, 0),
    totalPages: t.optional(t.number, 0),

    // filter: {catalogry ... }

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
        title: 'javascript',
      }

      return {
        header: {},
        body: {},
        threads: [],
        title: defaultCommunity.title,
        raw: defaultCommunity.title,
      }

      /*
         let { mainPath } = curRoute
         mainPath = R.isEmpty(mainPath) ? defaultCommunity.title : mainPath
         try {
         return {
         header: R.pick(['title', 'desc', 'raw'], self.all[mainPath]),
         body: R.omit(['desc', 'title', 'raw', 'parent'], self.all[mainPath]),
         threads: R.path(['threads'], self.all[mainPath]),
         title: R.path(['title'], self.all[mainPath]),
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
      return 'javascript'
      /*

         const { curRoute } = self.root
         const { mainPath } = curRoute
         const defaultCommunity = 'javascript'

         return R.isEmpty(mainPath) ? defaultCommunity : mainPath
       */
    },
  }))
  .actions(self => ({
    toggleSubscribe(community) {
      const index = R.findIndex(R.propEq('id', community.id), self.entries)
      if (index === -1) return false

      if (self.entries[index].viewerHasSubscribed) {
        self.entries[index].viewerHasSubscribed = false
        self.entries[index].subscribersCount -= 1
      } else {
        self.entries[index].viewerHasSubscribed = true
        self.entries[index].subscribersCount += 1
      }
    },
    load(sobj) {
      self.markState(sobj)
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
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunitiesStore
