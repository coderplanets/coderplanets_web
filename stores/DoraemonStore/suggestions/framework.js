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
  Django: { ...clone(meta), parent: 'python' },
  Phoenix: { ...clone(meta), parent: 'elixir' },
  Docker: { ...clone(meta), parent: 'go' },
}

/*
forEachObjIndexed((v, k) => {
  frameworks[k].title = k
  frameworks[k].desc = `${k} deault desc?`
  frameworks[k].raw = k
}, frameworks)
*/

forEachObjIndexed((v, k) => {
  frameworks[k].title = k
  frameworks[k].desc = `${k} deault desc`
  frameworks[k].raw = k

  forEach(metaKey => {
    frameworks[k][metaKey].raw = `${k}--${metaKey}`
  }, keys(meta))
}, frameworks)

export default frameworks
