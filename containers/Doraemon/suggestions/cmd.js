/*
 *
 * cmds
 *
 */

import R from 'ramda'

import { themeNames } from '../../../utils/themes'

// const theme = R.map(v => ({ [v]: { title: v, desc: v, new: {} } }))(themeNames)

const cmds = {
  Debug: { title: 'debug', desc: 'debug desc', raw: 'Debug' },
  History: { title: 'history', desc: 'me desc', raw: 'History' },
  '>': { title: 'history go forward', desc: 'goforward desc', raw: 'hforward' },
  '<': { title: 'history go back', desc: 'goback desc', raw: 'hback' },
  '?': { title: 'question', desc: 'question desc', raw: 'question' },
  Me: { title: 'me', desc: 'me desc', raw: 'Me' },
  User: { title: 'user', desc: 'user desc', raw: 'User' },
  Theme: {},
  Jobs: { title: 'jobs', desc: 'jobs desc', raw: 'Jobs' },
  // ClubOverflow: {},
}

R.map(
  v => (cmds.Theme[v] = { title: v, desc: v, raw: v, detail: {} }),
  themeNames
)
cmds.Theme.title = 'theme title'
cmds.Theme.desc = 'theme desc'
cmds.Theme.raw = 'Theme'

export default cmds
