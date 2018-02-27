/*
 *
 * Navigator
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'

import { makeDebugger, getSVGIconPath } from '../../utils'
import { Breadcrumbs, Logo, LogoText, BetaText } from './style'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Navigator:index')
/* eslint-enable no-unused-vars */

const Navigator = () => {
  return (
    <Breadcrumbs>
      <Logo path={getSVGIconPath('site_logo')} />
      <LogoText>coderplanets</LogoText>
      <BetaText>working in progess</BetaText>
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

/*
<UL>
<LI>
<A>
<span>coderplants</span>
</A>
</LI>
<LI>
<A>
<span>working in progress</span>
</A>
</LI>
<LI active>
<A>
<span>帖子：我是一个人</span>
</A>
</LI>
<LI>
<A>
<span>Checkout</span>
</A>
</LI>
</UL>
 */
