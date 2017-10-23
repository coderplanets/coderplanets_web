/*
*
* frameworks
*
*/

import forEachObjIndexed from 'ramda/src/forEachObjIndexed'
import forEach from 'ramda/src/forEach'
import keys from 'ramda/src/keys'
import clone from 'ramda/src/clone'

const meta = {
  // users: {},
  map: {},
  videos: {},
  github: {},
  meetups: {},
  posts: {},
  news: {},
  jobs: {},
  tuts: {},
  users: {},
}

forEachObjIndexed((v, k) => {
  meta[k].title = k
  meta[k].desc = `${k} desc`
  meta[k].raw = k
}, meta)

const frameworks = {
  React: { ...clone(meta), parent: 'javascript' },
  Angular: { ...clone(meta), parent: 'javascript' },
  Electron: { ...clone(meta), parent: 'javascript' },
  D3: { ...clone(meta), parent: 'javascript' },
  Vue: { ...clone(meta), parent: 'javascript' },
  Meteor: { ...clone(meta), parent: 'javascript' },
  Webpack: { ...clone(meta), parent: 'javascript' },
  Laravel: { ...clone(meta), parent: 'php' },
  Drupal: { ...clone(meta), parent: 'php' },
  Wordpress: { ...clone(meta), parent: 'php' },
  Zend: { ...clone(meta), parent: 'php' },
  Django: { ...clone(meta), parent: 'python' },
  Phoenix: { ...clone(meta), parent: 'elixir' },
  Rails: { ...clone(meta), parent: 'ruby' },
  Docker: { ...clone(meta), parent: 'go' },
}

forEachObjIndexed((v, k) => {
  frameworks[k].title = k
  frameworks[k].desc = `${k} deault desc`
  frameworks[k].raw = k

  forEach(metaKey => {
    frameworks[k][metaKey].raw = `${k}--${metaKey}`
  }, keys(meta))
}, frameworks)

export default frameworks
