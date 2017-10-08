/*
*
* frameworks
*
*/

import forEachObjIndexed from 'ramda/src/forEachObjIndexed'

const meta = {
  users: {},
  maps: {},
  video: {},
  github: {},
  meetups: {},
}

forEachObjIndexed((v, k) => {
  meta[k].title = k
  meta[k].desc = `${k} desc`
  meta[k].raw = k
}, meta)

const frameworks = {
  React: { ...meta, parent: 'javascript' },
  Django: { ...meta, parent: 'python' },
  Phoenix: { ...meta, parent: 'elixir' },
  Docker: { ...meta, parent: 'go' },
}

forEachObjIndexed((v, k) => {
  frameworks[k].title = k
  frameworks[k].desc = `${k} deault desc?`
  frameworks[k].raw = k
}, frameworks)

export default frameworks
