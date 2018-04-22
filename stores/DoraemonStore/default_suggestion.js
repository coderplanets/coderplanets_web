/*
   those are the default cmd
   theme --
   user --
   cheatsheet -- TODO
   login --
 */
import { ICON_ASSETS } from '../../config'

const cmds = {
  theme: {
    title: 'theme',
    desc: 'theme desc..',
    raw: 'theme',
    logo: `${ICON_ASSETS}/cmd/themes.svg`,

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
    logo: `${ICON_ASSETS}/cmd/users.svg`,
  },
  cheatsheet: {
    title: 'cheatsheet',
    desc: 'Cheatsheet desc',
    raw: 'cheatsheet',
    logo: `${ICON_ASSETS}/cmd/cheatsheet.svg`,
    threads: {
      react: {
        title: 'javascript',
        desc: 'javascript cheatsheet',
        raw: 'javascript',
        logo: `${ICON_ASSETS}/pl/javascript.svg`,
        threads: {
          react2: {
            title: 'javascript2',
            desc: 'javascript2 cheatsheet',
            raw: 'javascript2',
            logo: `${ICON_ASSETS}/pl/javascript.svg`,
          },
        },
      },
    },
  },
  login: {
    title: '登陆',
    desc: '登陆 desc',
    raw: 'login',
    logo: `${ICON_ASSETS}/cmd/login.svg`,

    threads: {
      github: {
        title: 'github 登陆',
        desc: '使用 github open id 登陆',
        raw: 'login--github',
        logo: `${ICON_ASSETS}/cmd/github.svg`,
      },
    },
  },
}

export default cmds
