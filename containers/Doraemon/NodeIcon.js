/*
 * render the icon based on suggestion type
 *
 */

import React from 'react'
import R from 'ramda'

import { getSVGIconPath, themeColorMap } from '../../utils'
import { NodeSVGIcon, ThemeDot } from './styles'

// const debug = makeDebugger('C:Doraemon:NodeIcon')

const getIconKey = R.compose(R.last, R.split('--'), R.toLower)

// sucks need refactor
const NodeIcon = ({ raw }) => {
  const lowerRaw = R.toLower(raw)
  const iconKey = getIconKey(lowerRaw)
  let specialStyle = {}

  if (R.startsWith('themes--', lowerRaw)) {
    return <ThemeDot bg={themeColorMap[iconKey]} />
  } else if (iconKey === 'hbackward') {
    return <NodeSVGIcon reverse path={getSVGIconPath('forward')} />
  } else if (iconKey === 'write') {
    specialStyle = { width: '70%', marginLeft: 5 }
  } else if (iconKey === 'login') {
    specialStyle = { width: '70%', marginLeft: 5 }
  }

  return <NodeSVGIcon path={getSVGIconPath(iconKey)} style={specialStyle} />
}

export default NodeIcon
