/*
 * render the icon based on suggestion type
 *
 */

import React from 'react'
import R from 'ramda'

import * as SuggestionIcons from './styles/suggestionIcons'
// import { makeDebugger } from '../../utils/debug'

// const debug = makeDebugger('C:UniversePanel:NodeIcon')

const NodeIcon = ({ title }) => {
  // const title = 'Javascript'
  const lowerTitle = R.toLower(title)
  // debug('title: ', lowerTitle)
  if (R.contains(lowerTitle, SuggestionIcons.langImgIcons)) {
    return (
      <SuggestionIcons.IconImg
        src={`/static/nodeIcons/programmingL/${lowerTitle}.png`}
        alt={lowerTitle}
      />
    )
  }
  const defaultIcon = SuggestionIcons.javascript
  const allIcons = { ...SuggestionIcons }
  const Icon = allIcons[lowerTitle] ? allIcons[lowerTitle] : defaultIcon

  return <Icon />
}

export default NodeIcon
