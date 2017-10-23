/*
 *
 * database
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

const database = {
  Mysql: { ...clone(meta) },
  PostgreSQL: { ...clone(meta) },
  Mongodb: { ...clone(meta) },
  // ...
}

forEachObjIndexed((v, k) => {
  database[k].title = k
  database[k].desc = `${k} deault desc`
  database[k].raw = k

  forEach(metaKey => {
    database[k][metaKey].raw = `${k}--${metaKey}`
  }, keys(meta))
}, database)

export default database
