/*
 * CommunitiesStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

// import { makeDebugger } from '../../utils/functions'
import { mapKeys } from '../../utils/functions'

// TODO; pl framework cmd -> plLanguages frameworks cmds
import { pl, framework, database } from '../DoraemonStore/suggestions'

import PlModel from './PlModel'
import FrameworkModel from './FrameworkModel'
import DatabaseModel from './DatabaseModel'

// const debug = makeDebugger('S:CommunitiesStore')

export const CommunitiesDefaults = {
  languages: {},
  frameworks: {},
  databases: {},
}

export const CommunitiesStore = t
  .model('CommunitiesStore', {
    // id: t.identifier(),
    languages: t.map(PlModel),
    frameworks: t.map(FrameworkModel),
    databases: t.map(DatabaseModel),
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
      return mapKeys(
        R.toLower,
        R.mergeAll([
          self.languages.toJSON(),
          self.frameworks.toJSON(),
          self.databases.toJSON(),
        ])
      )
    },
  }))
  .actions(self => ({
    load() {
      R.forEachObjIndexed((v, k) => {
        self.languages.set(k, v)
      }, pl)

      R.forEachObjIndexed((v, k) => {
        self.frameworks.set(k, v)
      }, framework)

      R.forEachObjIndexed((v, k) => {
        self.databases.set(k, v)
      }, database)
    },
  }))
