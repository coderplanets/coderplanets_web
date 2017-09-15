/*
 * BodyStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import { makeDebugger } from '../../utils/debug'

// const debug = makeDebugger('S:BodyStore')

const BodyStore = t
  .model('BodyStore', {
    loading: t.optional(t.boolean, false),
  })
  .views(self => ({
    get app() {
      return getParent(self)
    },
    get theme() {
      return self.app.theme
    },
  }))
  .actions(self => ({
    changeTheme(name) {
      self.app.changeTheme(name)
    },
  }))

export default BodyStore
