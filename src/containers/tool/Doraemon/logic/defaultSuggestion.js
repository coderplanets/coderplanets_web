/*
   those are the default cmd
   theme --
   user --
   login --
 */
import { ICON_CMD } from '@/config'
import { themeMeta } from '@/utils/themes'

const cmds = {
  theme: {
    title: 'theme',
    desc: 'awesome themes for hackers',
    raw: 'theme',
    logo: `${ICON_CMD}/themes.svg`,

    threads: { ...themeMeta },
  },
  user: {
    title: 'user',
    desc: 'user desc..',
    raw: 'user',
    logo: `${ICON_CMD}/users.svg`,
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
