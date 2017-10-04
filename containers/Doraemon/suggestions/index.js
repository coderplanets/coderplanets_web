// import R from 'ramda'

export { default as pl } from './pl'
export { default as framework } from './framework'
export { default as cmd } from './cmd'

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
