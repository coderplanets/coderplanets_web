/*
 * CommunitiesStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { makeDebugger } from '../../utils/debug'
import { isObject, mapKeys } from '../../utils/functions'

// import { allSuggestions } from '../../containers/Doraemon/suggestions'

// TODO; pl framework cmd -> plLanguages frameworks cmds
import pl from '../../containers/Doraemon/suggestions/pl'
import framework from '../../containers/Doraemon/suggestions/framework'
// import cmd from '../../containers/Doraemon/suggestions/cmd'

import PlModel from './PlModel'
import FrameworkModel from './FrameworkModel'
// import CmdModel from './CmdModel'

const debug = makeDebugger('S:CommunitiesStore')

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

    get oneForTest() {
      // const one = self.frameworks.toJSON()
      // return one.React
      const one = self.languages.toJSON()
      // return one.Javascript
      // console.log('fuck one: ', one)
      return R.pick(['Javascript'], one)
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

      //  self.communities.put(suggestion)
      debug('after communities: ', self.all)
      debug('the real allSuggestions: ', self.all)
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
