/*
 * CommunitiesStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { makeDebugger } from '../../utils/debug'
import { isObject } from '../../utils/functions'

import { allSuggestions } from '../../containers/Doraemon/suggestions'

// TODO; pl framework cmd -> plLanguages frameworks cmds
import pl from '../../containers/Doraemon/suggestions/pl'
import framework from '../../containers/Doraemon/suggestions/framework'
// import cmd from '../../containers/Doraemon/suggestions/cmd'

import PlModel from './PlModel'
import FrameworkModel from './FrameworkModel'
// import CmdModel from './CmdModel'

const debug = makeDebugger('S:CommunitiesStore')

const CommunitiesStore = t
  .model('CommunitiesStore', {
    languages: t.map(PlModel),
    frameworks: t.map(FrameworkModel),
    // themes: ...
    // debug: ...
    // user: ...
    // jobs: ...
    //  cmds: t.map(CmdModel),
  })
  .views(self => ({
    get app() {
      return getParent(self)
    },
    get allCommunities() {
      return R.mergeAll([
        self.languages.toJSON(),
        self.frameworks.toJSON(),
        //   self.cmds.toJSON(),
      ])
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

      /*
      R.forEachObjIndexed((v, k) => {
        self.cmds.set(k, v)
      }, cmd)
      */

      //  self.communities.put(suggestion)
      debug('after communities: ', self.allCommunities)
      debug('the real allSuggestions: ', allSuggestions)
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

export default CommunitiesStore
