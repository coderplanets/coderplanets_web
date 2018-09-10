/*
   those are the default cmd
   theme --
   user --
   cheatsheet -- TODO
   login --
 */
import { ICON_CMD, ICON_BASE } from '../../../config'

const cmds = {
  theme: {
    title: 'theme',
    desc: 'theme desc..',
    raw: 'theme',
    logo: `${ICON_CMD}/themes.svg`,

    threads: {
      cyan: {
        title: 'cyan theme',
        desc: `cyan desc`,
        raw: `cyan`,
        cmd: 'theme',
      },
      solarized: {
        title: 'solarizedDark theme',
        desc: `solarizedDark desc`,
        raw: `solarized`,
        cmd: 'theme',
      },
    },
  },
  user: {
    title: 'user',
    desc: 'user desc..',
    raw: 'user',
    logo: `${ICON_CMD}/users.svg`,
  },
  cheatsheet: {
    title: 'cheatsheet',
    desc: 'Cheatsheet desc',
    raw: 'cheatsheet',
    logo: `${ICON_CMD}/cheatsheet.svg`,
    threads: {
      react: {
        title: 'javascript',
        desc: 'javascript cheatsheet',
        raw: 'javascript',
        logo: `${ICON_BASE}/pl/javascript.svg`,
        threads: {
          react2: {
            title: 'javascript2',
            desc: 'javascript2 cheatsheet',
            raw: 'javascript2',
            logo: `${ICON_BASE}/pl/javascript.svg`,
          },
        },
      },
    },
  },
  login: {
    title: '登陆',
    desc: '登陆 desc',
    raw: 'login',
    logo: `${ICON_CMD}/login.svg`,

    threads: {
      github: {
        title: 'github 登陆',
        desc: '使用 github open id 登陆',
        raw: 'github',
        logo: `${ICON_CMD}/github.svg`,
      },
    },
  },
}

export default cmds
