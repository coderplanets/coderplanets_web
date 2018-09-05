/*
 *
 * Navigator
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'

import { makeDebugger } from '../../utils'
import { ICON_CMD } from '../../config'

import { Breadcrumbs, Logo, LogoText, BetaLogo } from './style'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Navigator:index')
/* eslint-enable no-unused-vars */

const Navigator = () => (
  <Breadcrumbs>
    <Logo src={`${ICON_CMD}/keyboard_logo.svg`} />
    <LogoText>coderplanets</LogoText>
    <BetaLogo src={`${ICON_CMD}/beta.svg`} />
  </Breadcrumbs>
)

/*
Navigator.propTypes = {
  // https://www.npmjs.com/package/prop-types
}

Navigator.defaultProps = {}
*/

export default Navigator
