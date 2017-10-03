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

export const databases = {
  mysql: {},
}

const frameworkMeta = {
  type: 'framework',
  children: {
    users: {},
    maps: {},
    video: {},
    github: {},
    meetups: {},
  },
}

export const frameworks = {
  React: { ...frameworkMeta, parent: 'javascript' },
  Django: { ...frameworkMeta, parent: 'python' },
  Phoenix: { ...frameworkMeta, parent: 'elixir' },
}

const plMeta = {
  type: 'pl',
  children: {
    users: {},
    maps: {},
    video: {},
    github: {},
    meetups: {},
  },
}

export const langs = {
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

// simulate
export const javascript = {
  submenu: {
    tuts: {
      executor: {
        type: 'link',
        target: '/javascript/tuts',
      },
    },
    children: {
      users: {},
      maps: {},
      video: {},
      github: {},
      meetups: {},
    },
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
