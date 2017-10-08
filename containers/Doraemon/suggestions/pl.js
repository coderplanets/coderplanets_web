/*
 *
 * programing languages
 *
 */

// import R from 'ramda' // cause babel build error, don't kown way
import forEachObjIndexed from 'ramda/src/forEachObjIndexed'

const plMeta = {
  posts: {},
  tuts: {},
  users: {},
  map: {},
  news: {},
  video: {},
  meetups: {},
  jobs: {},
}

forEachObjIndexed((v, k) => {
  plMeta[k].title = k
  plMeta[k].desc = `${k} desc`
  plMeta[k].raw = k
}, plMeta)

const languages = {
  BlackeScript: { ...plMeta },
  Js: { ...plMeta },
  Javascript: { ...plMeta },
  Java: { ...plMeta },
  Nodejs: { ...plMeta },
  Julia: { ...plMeta },
  R: { ...plMeta },
  Ruby: { ...plMeta },
  Rust: { ...plMeta },
  Red: { ...plMeta },
  Python: { ...plMeta },
  Php: { ...plMeta },
  Perl: { ...plMeta },
  Prolog: { ...plMeta },
  C: { ...plMeta },
  'C++': { ...plMeta },
  'C#': { ...plMeta },
  Clojure: { ...plMeta },
  Crystal: { ...plMeta },
  Lisp: { ...plMeta },
  Lua: { ...plMeta },
  Fortran: { ...plMeta },
  'F#': { ...plMeta },
  Dart: { ...plMeta },
  Delphi: { ...plMeta },
  Elixir: { ...plMeta },
  Erlang: { ...plMeta },
  Elm: { ...plMeta },
  Go: { ...plMeta },
  Groovy: { ...plMeta },
  Gradle: { ...plMeta },
  Haskell: { ...plMeta },
  Kotlin: { ...plMeta },
  'Objectivc-C': { ...plMeta },
  OCaml: { ...plMeta },
  Swift: { ...plMeta },
  Scala: { ...plMeta },
  Scheme: { ...plMeta },
  Typescript: { ...plMeta },
  Tcl: { ...plMeta },
}

forEachObjIndexed((v, k) => {
  languages[k].title = k
  languages[k].desc = `${k} deault desc?`
  languages[k].raw = k
}, languages)

languages['C++'].raw = 'Cpp'
languages['C#'].raw = 'CSharp'
languages['F#'].raw = 'FSharp'
languages['Objectivc-C'].raw = 'objectiveC'

export default languages
