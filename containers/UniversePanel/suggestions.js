// import R from 'ramda'

export const cmds = {
  Debug: {},
  History: {},
  '<': {},
  '>': {},
  Me: {},
  User: {},
  Theme: {},
  Jobs: {},
  ClubOverflow: {},
}

export const editors = {
  Emacs: {},
  Vim: {},
  Vscode: {},
  Atom: {},
  Webstorm: {},
  Phpstorm: {},
}

export const tools = {
  Docker: {},
  Github: {},
}

export const cheatsheets = {
  javascript: {
    desc: '',
  },
  // R.keys(langs)
}

export const langs = {
  BlackeScript: {},
  Js: {},
  Javascript: {},
  Java: {},
  Julia: {},
  R: {},
  Ruby: {},
  Rust: {},
  Red: {},
  Python: {},
  Php: {},
  Perl: {},
  Prolog: {},
  C: {},
  'C++': {},
  'C#': {},
  Clojure: {},
  Crystal: {},
  Lisp: {},
  Lua: {},
  Fortran: {},
  'F#': {},
  Dart: {},
  Delphi: {},
  Django: {},
  Elixir: {},
  Elm: {},
  Go: {},
  Groovy: {},
  Gradle: {},
  Haskell: {},
  Kotlin: {},
  'Objectivc-C': {},
  OCaml: {},
  Swift: {},
  Scala: {},
  Scheme: {},
  Typescript: {},
  Tcl: {},
}

// simulate
export const javascript = {
  submenu: {
    tuts: {
      executor: {
        type: 'link',
        target: '/javascript/tuts',
      },
    },
    users: {},
    maps: {},
    video: {},
    github: {},
    meetups: {},
  },

  executor: {
    type: 'link',
    target: '/javascript',
  },
}

export const debug = {
  // 直接执行
  executor: {
    type: 'cmd',
    target: 'setDebug', // ?
  },
}

const themeExecutor = {
  type: 'cmd',
  target: 'setTheme', // ?
}

export const theme = {
  // 直接执行或进入子菜单
  submenu: {
    cyan: {
      executor: {
        ...themeExecutor,
      },
    },
    muzli: {
      executor: {
        ...themeExecutor,
      },
    },
    solarizedDark: {
      executor: {
        ...themeExecutor,
      },
    },
  },

  executor: {
    type: 'submenu',
    target: 'setTheme', // ?
  },
}

export const history = {
  // 直接执行或进入子菜单
  submenu: {
    // ...
  },
  executor: {
    type: 'cmd',
    target: '/javascript', // ?
  },
}
