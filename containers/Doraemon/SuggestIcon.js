/*
 * render the icon based on suggestion type
 *
 */

import React from 'react'

import { Icon, ThemeDot } from './styles/suggest_icon'
import { DEFAULT_ICON } from '../../config/assets'

import { themeCoverMap } from '../../utils'
// const debug = makeDebugger('C:Doraemon:NodeIcon')

const NodeIcon = ({ suggestion: { raw, logo, cmd } }) => {
  /* const lowerRaw = R.toLower(raw) */
  if (cmd === 'theme') {
    return <ThemeDot bg={themeCoverMap[raw]} />
  }
  return <Icon src={logo || DEFAULT_ICON} />
}

export default NodeIcon
