/*
 *
 * cmds
 *
 */

import R from 'ramda'

import { themeNames } from '../../../utils/themes'

const theme = R.map(v => ({ title: v, desc: v }))(themeNames)

const cmds = {
  Debug: {},
  History: {},
  '<': {},
  '>': {},
  '?': {},
  Me: {},
  User: {},
  Theme: { ...theme },
  Jobs: {},
  ClubOverflow: {},
}

export default cmds
