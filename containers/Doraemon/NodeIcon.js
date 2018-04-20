/*
 * render the icon based on suggestion type
 *
 */

import React from 'react'

import { themeColorMap } from '../../utils'
import { NodeSVGIcon, ThemeDot } from './styles'
import { DEFAULT_ICON } from '../../config/assets'

// const debug = makeDebugger('C:Doraemon:NodeIcon')

const NodeIcon = ({ suggestion: { raw, logo, cmd } }) => {
  /* const lowerRaw = R.toLower(raw) */
  if (cmd === 'theme') {
    return <ThemeDot bg={themeColorMap[raw]} />
  }
  return <NodeSVGIcon path={logo || DEFAULT_ICON} />

  /*
     if (R.startsWith('theme--', raw)) {
     return <ThemeDot bg={themeColorMap[iconKey]} />
     } else if (iconKey === 'hbackward') {
     return <NodeSVGIcon reverse path={getSVGIconPath('forward')} />
     } else if (iconKey === 'write') {
     specialStyle = { width: '70%', marginLeft: 5 }
     } else if (iconKey === 'login') {
     specialStyle = { width: '70%', marginLeft: 5 }
     }

     return <NodeSVGIcon path={suggestion.logo} style={specialStyle} />
   */
}

export default NodeIcon
