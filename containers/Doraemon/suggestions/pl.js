/*
 *
 * programing languages
 *
 */

// import R from 'ramda' // cause babel build error, don't kown way
import forEachObjIndexed from 'ramda/src/forEachObjIndexed'

const meta = {
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
  meta[k].title = k
  meta[k].desc = `${k} desc`
  meta[k].raw = k
}, meta)

const languages = {
  BlackeScript: { ...meta },
  Js: { ...meta },
  Javascript: { ...meta },
  Java: { ...meta },
  Nodejs: { ...meta },
  Julia: { ...meta },
  R: { ...meta },
  Ruby: { ...meta },
  Rust: { ...meta },
  Red: { ...meta },
  Python: { ...meta },
  Php: { ...meta },
  Perl: { ...meta },
  Prolog: { ...meta },
  C: { ...meta },
  'C++': { ...meta },
  'C#': { ...meta },
  Clojure: { ...meta },
  Crystal: { ...meta },
  Lisp: { ...meta },
  Lua: { ...meta },
  Fortran: { ...meta },
  'F#': { ...meta },
  Dart: { ...meta },
  Delphi: { ...meta },
  Elixir: { ...meta },
  Erlang: { ...meta },
  Elm: { ...meta },
  Go: { ...meta },
  Groovy: { ...meta },
  Gradle: { ...meta },
  Haskell: { ...meta },
  Kotlin: { ...meta },
  'Objectivc-C': { ...meta },
  OCaml: { ...meta },
  Swift: { ...meta },
  Scala: { ...meta },
  Scheme: { ...meta },
  Typescript: { ...meta },
  Tcl: { ...meta },
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
