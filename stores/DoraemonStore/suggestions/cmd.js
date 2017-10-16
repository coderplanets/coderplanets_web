/*
 *
 * cmds
 *
 */

import R from 'ramda'

import { themeKeys } from '../../../utils/themes'

// const theme = R.map(v => ({ [v]: { title: v, desc: v, new: {} } }))(themeKeys)

const cmds = {
  Debug: { title: 'debug', desc: 'debug desc', raw: 'Debug' },
  History: { title: 'history', desc: 'me desc', raw: 'History' },
  '>': { title: 'history go forward', desc: 'goforward desc', raw: 'hforward' },
  '<': { title: 'history go back', desc: 'goback desc', raw: 'hback' },
  '?': { title: 'question', desc: 'question desc', raw: 'question' },
  Me: { title: 'me', desc: 'me desc', raw: 'Me' },
  User: { title: 'user', desc: 'user desc', raw: 'User' },
  // name theme will confilct styled/helper theme in 'utils/functions'
  Themes: {},
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

export default cmds
