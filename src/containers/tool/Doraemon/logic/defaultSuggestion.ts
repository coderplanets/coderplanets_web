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
        desc: '使用 Github 账号登入',
        raw: 'github',
        logo: `${ICON_CMD}/shell_github.svg`,
      },
      weixin: {
        title: 'weixin（暂未开放）',
        desc: '使用微信账号登入',
        raw: 'weixin',
        logo: `${ICON_CMD}/shell_weixin.png`,
      },
      // weibo: {
      //   title: 'weibo',
      //   desc: '使用微博账号登录',
      //   raw: 'weibo',
      //   logo: `${ICON_CMD}/shell_weibo.png`,
      // },
      apple: {
        title: 'Apple（暂未开放）',
        desc: '使用苹果账号登入',
        raw: 'apple',
        logo: `${ICON_CMD}/shell_apple.svg`,
      },
      twitter: {
        title: 'Twitter（暂未开放）',
        desc: '使用 Twitter 账号登入',
        raw: 'twitter',
        logo: `${ICON_CMD}/shell_twitter.svg`,
      },
      google: {
        title: 'Google（暂未开放）',
        desc: '使用 Google 账号登入',
        raw: 'google',
        logo: `${ICON_CMD}/shell_google.svg`,
      },
    },
  },
}

export default cmds
