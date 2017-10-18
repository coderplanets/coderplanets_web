/*
 *
 * cmds
 *
 */

import R from 'ramda'

import { themeKeys } from '../../../utils/themes'

// const theme = R.map(v => ({ [v]: { title: v, desc: v, new: {} } }))(themeKeys)

const cmds = {
  Debug: {},
  Themes: {},
  Login: {},
  History: { title: 'history', desc: 'me desc', raw: 'History' },
  '>': { title: 'history go forward', desc: 'goforward desc', raw: 'hforward' },
  '<': { title: 'history go back', desc: 'goback desc', raw: 'hbackward' },
  '?': { title: 'question', desc: 'question desc', raw: 'question' },
  Me: { title: 'me', desc: 'me desc', raw: 'Me' },
  User: { title: 'user', desc: 'user desc', raw: 'User' },
  // name theme will confilct styled/helper theme in 'utils/functions'
  Jobs: { title: 'jobs', desc: 'jobs desc', raw: 'Jobs' },
  // ClubOverflow: {},
}

R.map(
  v =>
    (cmds.Themes[v] = {
      title: v,
      desc: `${v} theme`,
      raw: `themes--${v}`,
      detail: {},
    }),
  themeKeys
)
cmds.Themes.title = 'themes'
cmds.Themes.desc = 'theme desc'
cmds.Themes.raw = 'Themes'

cmds.Debug = {
  title: 'debug',
  desc: 'set debug',
  raw: 'Debug',
  debug: {
    title: '设置完成',
    desc: '生效需要重新刷新页面',
    raw: 'debug--write',
  },
  github: {
    title: 'Readme on github',
    desc: 'debug github page',
    raw: 'debug--github',
  },
}

cmds.Login = {
  title: 'login',
  desc: '登陆 desc',
  raw: 'Login',
  web: {
    title: 'coder-club 账号',
    desc: '使用 coder-club 账号登陆',
    raw: 'login--coderclub',
  },
  github: {
    title: 'github 登陆',
    desc: '使用 github open id 登陆',
    raw: 'login--github',
  },
  forgot: {
    title: '忘记密码',
    desc: '可通过邮件或手机找回',
    raw: 'login--forgot',
    writeemail: {
      title: '发送邮件找回',
      desc: '可通过邮件或手机找回',
      raw: 'login--forgot--email',
    },
  },
  register: {
    title: '注册账号',
    desc: '注册 coder-club 账号',
    raw: 'login--register',
  },
}

export default cmds
