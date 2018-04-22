/*
 *
 * programing languages
 *
 */

// import R from 'ramda' // cause babel build error, don't kown way
import forEachObjIndexed from 'ramda/src/forEachObjIndexed'
// import forEach from 'ramda/src/forEach'
// import keys from 'ramda/src/keys'
import clone from 'ramda/src/clone'
import toLower from 'ramda/src/toLower'

const meta = {
  threads: [
    {
      title: 'posts',
      desc: 'posts desc',
    },
    {
      title: 'tuts',
      desc: 'tuts desc',
    },
    {
      title: 'users',
      desc: 'users desc',
    },
    {
      title: 'map',
      desc: 'map desc',
    },
    {
      title: 'videos',
      desc: 'videos desc',
    },
    {
      title: 'news',
      desc: 'news desc',
    },
    {
      title: 'cheatsheet',
      desc: 'cheatsheet desc',
    },
    {
      title: 'jobs',
      desc: 'jobs desc',
    },
  ],
}

//  Javascript: { ...clone(meta) },
// BlackeScript: { ...clone(meta) },
// Red: { ...clone(meta) },
// Prolog: { ...clone(meta) },
//  Crystal: { ...clone(meta) },
// Fortran: { ...clone(meta) },
// 'Objectivc-C': { ...clone(meta) },
// Scheme: { ...clone(meta) },
//   Tcl: { ...clone(meta) },

const languages = {
  Js: { ...clone(meta) },
  Nodejs: { ...clone(meta) },
  Java: { ...clone(meta) },
  Julia: { ...clone(meta) },
  R: { ...clone(meta) },
  Ruby: { ...clone(meta) },
  Rust: { ...clone(meta) },
  Python: { ...clone(meta) },
  Php: { ...clone(meta) },
  Perl: { ...clone(meta) },
  C: { ...clone(meta) },
  cpp: { ...clone(meta) },
  csharp: { ...clone(meta) },
  Clojure: { ...clone(meta) },
  Lisp: { ...clone(meta) },
  Lua: { ...clone(meta) },
  fsharp: { ...clone(meta) },
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
  OCaml: { ...clone(meta) },
  Swift: { ...clone(meta) },
  Scala: { ...clone(meta) },
  Typescript: { ...clone(meta) },
  Racket: { ...clone(meta) },
}
forEachObjIndexed((v, k) => {
  languages[k].title = k
  languages[k].desc = `${k} deault desc`
  languages[k].raw = k
  languages[
    k
  ].logo = `https://coderplanets.oss-cn-beijing.aliyuncs.com/icons/pl/${toLower(
    k
  )}.svg`
}, languages)

export default languages
