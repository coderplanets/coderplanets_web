/*
 * CommunitiesStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

// import { makeDebugger } from '../../utils/debug'
import { isObject, mapKeys } from '../../utils/functions'

// TODO; pl framework cmd -> plLanguages frameworks cmds
import pl from '../DoraemonStore/suggestions/pl'
import framework from '../DoraemonStore/suggestions/framework'

import PlModel from './PlModel'
import FrameworkModel from './FrameworkModel'

// const debug = makeDebugger('S:CommunitiesStore')

export const CommunitiesDefaults = {
  languages: {},
  frameworks: {},
}

export const CommunitiesStore = t
  .model('CommunitiesStore', {
    // id: t.identifier(),
    languages: t.map(PlModel),
    frameworks: t.map(FrameworkModel),
    // jobs: ...
    // themes: ...
    // debug: ...
    // user: ...
    // cmds: t.map(CmdModel),
  })
  .views(self => ({
    get app() {
      return getParent(self)
    },
    get all() {
      return mapKeys(
        R.toLower,
        R.mergeAll([self.languages.toJSON(), self.frameworks.toJSON()])
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
    },

    markState(sobj) {
      if (!isObject(sobj)) {
        throw new Error('S:CommunitiesStore markState get no object params')
      }
      R.forEachObjIndexed((val, key) => {
        self[key] = val
      }, sobj)
    },
  }))
