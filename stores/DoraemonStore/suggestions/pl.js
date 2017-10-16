/*
 *
 * programing languages
 *
 */

// import R from 'ramda' // cause babel build error, don't kown way
import forEachObjIndexed from 'ramda/src/forEachObjIndexed'
import forEach from 'ramda/src/forEach'
import keys from 'ramda/src/keys'
import clone from 'ramda/src/clone'

const meta = {
  posts: {},
  tuts: {},
  users: {},
  map: {},
  news: {},
  videos: {},
  meetups: {},
  jobs: {},
}

forEachObjIndexed((v, k) => {
  meta[k].title = k
  meta[k].desc = `${k} desc`
  meta[k].raw = k
}, meta)

const languages = {
  BlackeScript: { ...clone(meta) },
  Js: { ...clone(meta) },
  Javascript: { ...clone(meta) },
  Java: { ...clone(meta) },
  Nodejs: { ...clone(meta) },
  Julia: { ...clone(meta) },
  R: { ...clone(meta) },
  Ruby: { ...clone(meta) },
  Rust: { ...clone(meta) },
  Red: { ...clone(meta) },
  Python: { ...clone(meta) },
  Php: { ...clone(meta) },
  Perl: { ...clone(meta) },
  Prolog: { ...clone(meta) },
  C: { ...clone(meta) },
  'C++': { ...clone(meta) },
  'C#': { ...clone(meta) },
  Clojure: { ...clone(meta) },
  Crystal: { ...clone(meta) },
  Lisp: { ...clone(meta) },
  Lua: { ...clone(meta) },
  Fortran: { ...clone(meta) },
  'F#': { ...clone(meta) },
  Dart: { ...clone(meta) },
  Delphi: { ...clone(meta) },
  Elixir: { ...clone(meta) },
  Erlang: { ...clone(meta) },
  Elm: { ...clone(meta) },
  Go: { ...clone(meta) },
  Groovy: { ...clone(meta) },
  Gradle: { ...clone(meta) },
  Haskell: { ...clone(meta) },
  Kotlin: { ...clone(meta) },
  'Objectivc-C': { ...clone(meta) },
  OCaml: { ...clone(meta) },
  Swift: { ...clone(meta) },
  Scala: { ...clone(meta) },
  Scheme: { ...clone(meta) },
  Typescript: { ...clone(meta) },
  Tcl: { ...clone(meta) },
}

forEachObjIndexed((v, k) => {
  languages[k].title = k
  languages[k].desc = `${k} deault desc`
  languages[k].raw = k

  forEach(metaKey => {
    languages[k][metaKey].raw = `${k}--${metaKey}`
  }, keys(meta))
}, languages)

languages['C++'].raw = 'Cpp'
languages['C#'].raw = 'CSharp'
languages['F#'].raw = 'FSharp'
languages['Objectivc-C'].raw = 'objectiveC'

export default languages
