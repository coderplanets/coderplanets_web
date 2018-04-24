/*
 *
 * Navigator
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'

import { makeDebugger, getSVGIconPath } from '../../utils'
import { ICON_ASSETS } from '../../config'

import { Breadcrumbs, Logo, LogoText, BetaLogo } from './style'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Navigator:index')
/* eslint-enable no-unused-vars */

const Navigator = () => {
  return (
    <Breadcrumbs>
      <Logo path={getSVGIconPath('site_logo')} />
      <LogoText>coderplanets</LogoText>
      <BetaLogo path={`${ICON_ASSETS}/cmd/beta.svg`} />
    </Breadcrumbs>
  )
}

/*
Navigator.propTypes = {
  // https://www.npmjs.com/package/prop-types
}

Navigator.defaultProps = {}
*/

export default Navigator
