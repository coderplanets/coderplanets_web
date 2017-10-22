/*
 * the entry of the App store
 *
 */

// import { onAction } from 'mobx-state-tree'

// import RootStore from './RootStore'
import IntroStore from './IntroStore'

let introStore = null

const createIntroStore = (isServer, langSetup) => {
  return IntroStore.create({ appLangs: langSetup })
}

function initIntroStore(isServer = false, langSetup) {
  if (introStore === null) {
    introStore = createIntroStore(isServer, langSetup)
  }

  /*
     onAction(rootStore, data => {
     console.log('onSnapshot: ', data)
     })
   */

  return introStore
}

export default initIntroStore
