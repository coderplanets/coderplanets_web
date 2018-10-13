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
    title: 'login',
    desc: '第三方账号登录',
    raw: 'login',
    logo: `${ICON_CMD}/login.svg`,

    threads: {
      github: {
        title: 'github',
        desc: '使用 github 账号登录',
        raw: 'github',
        logo: `${ICON_CMD}/shell_github.svg`,
      },
      weixin: {
        title: 'weixin',
        desc: '使用微信账号登录',
        raw: 'weixin',
        logo: `${ICON_CMD}/shell_weixin.png`,
      },
      weibo: {
        title: 'weibo',
        desc: '使用微博账号登录',
        raw: 'weibo',
        logo: `${ICON_CMD}/shell_weibo.png`,
      },
      twitter: {
        title: 'twitter',
        desc: 'sign in with twitter account',
        raw: 'twitter',
        logo: `${ICON_CMD}/shell_twitter.svg`,
      },
      google: {
        title: 'google',
        desc: 'sign in with google account',
        raw: 'google',
        logo: `${ICON_CMD}/shell_google.svg`,
      },
    },
  },
}

export default cmds
