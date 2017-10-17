/*
 * render the icon based on suggestion type
 *
 */

import React from 'react'
import R from 'ramda'

import * as SuggestionIcons from './styles/suggestionIcons'
// import { makeDebugger } from '../../utils/debug'

import { themeColorMap } from '../../utils/themes/'

const Icons = { ...SuggestionIcons }
const DefaultIcon = SuggestionIcons.javascript

// const debug = makeDebugger('C:Doraemon:NodeIcon')

const getIconKey = R.compose(R.last, R.split('--'), R.toLower)

// sucks need refactor
const NodeIcon = ({ raw }) => {
  const lowerRaw = R.toLower(raw)
  // debug('raw: ', themeColorMap)
  if (R.contains(lowerRaw, SuggestionIcons.langImgIcons)) {
    return (
      <SuggestionIcons.IconImg
        src={`/static/nodeIcons/programmingL/${lowerRaw}.png`}
        alt={lowerRaw}
      />
    )
  }

  const iconKey = getIconKey(lowerRaw)

  if (R.startsWith('themes--', lowerRaw)) {
    return <Icons.themeDot bg={themeColorMap[iconKey]} />
  } else if (iconKey === 'hforward') {
    return <Icons.forward />
  } else if (iconKey === 'hbackward') {
    return <Icons.backward />
  } else if (iconKey === 'question') {
    return <Icons.question />
  }
  const Icon = Icons[iconKey] ? Icons[iconKey] : DefaultIcon
  return <Icon />
}

export default NodeIcon
