/*
 *
 * programing languages
 *
 */

// import R from 'ramda' // cause babel build error, don't kown way
import map from 'ramda/src/map'

const plMetaData = [
  'posts',
  'tuts',
  'users',
  'map',
  'news',
  'video',
  'meetups',
  'jobs',
]
const plMeta = map(v => ({ title: v, desc: v }))(plMetaData)

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

  // Github: { ...plMeta },
}

export default languages
