/*
 * render the icon based on suggestion type
 *
 */

import React from 'react'
import R from 'ramda'

import * as SuggestionIcons from './styles/suggestionIcons'

const allIcons = { ...SuggestionIcons }
const defaultIcon = SuggestionIcons.javascript

// import { makeDebugger } from '../../utils/debug'

// const debug = makeDebugger('C:Doraemon:NodeIcon')

// sucks need refactor
const NodeIcon = ({ raw }) => {
  // const raw = 'Javascript'
  const lowerRaw = R.toLower(raw)
  // debug('raw: ', lowerRaw)
  if (R.contains(lowerRaw, SuggestionIcons.langImgIcons)) {
    return (
      <SuggestionIcons.IconImg
        src={`/static/nodeIcons/programmingL/${lowerRaw}.png`}
        alt={lowerRaw}
      />
    )
  }
  let Icon

  if (lowerRaw === 'hforward') {
    Icon = allIcons.forward
  } else if (lowerRaw === 'hback') {
    Icon = allIcons.backward
  } else if (lowerRaw === 'question') {
    Icon = allIcons.question
  } else {
    Icon = allIcons[lowerRaw] ? allIcons[lowerRaw] : defaultIcon
  }
  return <Icon />
}

export default NodeIcon
