/*
 * render the icon based on suggestion type
 *
 */

import React from 'react'
import R from 'ramda'

import { Wrapper, Icon, ThemeDot } from './styles/suggest_icon'
import { DEFAULT_ICON } from '../../config/assets'

import { themeCoverMap, NON_FILL_COMMUNITY } from '../../utils'
// const debug = makeDebugger('C:Doraemon:NodeIcon')

const SuggestIcon = ({ suggestion: { raw, logo, cmd } }) => {
  /* const lowerRaw = R.toLower(raw) */
  if (cmd === 'theme') {
    return <ThemeDot bg={themeCoverMap[raw]} />
  }
  return (
    <React.Fragment>
      {logo ? (
        <Wrapper>
          <Icon
            src={logo || DEFAULT_ICON}
            nonFill={R.contains(raw, NON_FILL_COMMUNITY)}
          />
        </Wrapper>
      ) : null}
    </React.Fragment>
  )
}

export default SuggestIcon
