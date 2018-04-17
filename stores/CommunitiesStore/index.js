/*
 * CommunitiesStore store
 *
 */

import R from 'ramda'
import { types as t, getParent } from 'mobx-state-tree'

import { mapKeys, makeDebugger } from '../../utils'

// TODO; pl framework cmd -> plLanguages frameworks cmds
/* import { pl, framework, database } from '../DoraemonStore/suggestions' */
import { pl } from '../DoraemonStore/suggestions'

import PlModel from './PlModel'

// import FrameworkModel from './FrameworkModel'
// / import DatabaseModel from './DatabaseModel'
// import CheatSheetModal from './CheatSheetModal'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:communities')
/* eslint-enable no-unused-vars */
// const debug = makeDebugger('S:CommunitiesStore')

export const CommunitiesDefaults = {
  languages: {},
  frameworks: {},
  databases: {},
}

export const CommunitiesStore = t
  .model('CommunitiesStore', {
    // TODO: refactor:  subscribed-communities, all-communities
    // id: t.identifier(),
    languages: t.map(PlModel),
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
      return R.mergeAll([
        self.getLanguageLike(),
        // { cheatsheet: self.cheatsheet.toJSON() },
      ])
      // return self.getLanguageLike()
    },
    get curCommunity() {
      const { curRoute } = self.root
      const defaultCommunity = {
        title: 'js',
      }

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
    },
    get curCommunityName() {
      const { curRoute } = self.root
      const { mainQuery } = curRoute
      const defaultCommunity = 'js'

      return R.isEmpty(mainQuery) ? defaultCommunity : mainQuery
    },
  }))
  .actions(self => ({
    load() {
      R.forEachObjIndexed((v, k) => {
        self.languages.set(k, v)
      }, pl)

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
    getLanguageLike() {
      return mapKeys(
        R.toLower,
        R.mergeAll([
          self.languages.toJSON(),
          /* self.frameworks.toJSON(), */
          /* self.databases.toJSON(), */
        ])
      )
    },
  }))
