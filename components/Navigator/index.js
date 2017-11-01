/*
 *
 * Navigator
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'

import { makeDebugger } from '../../utils/functions'
import { Breadcrumbs, UL, LI, A } from './style'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Navigator:index')
/* eslint-enable no-unused-vars */

const Navigator = () => {
  return (
    <Breadcrumbs>
      <UL>
        <LI>
          <A>
            <span>Coder-Club</span>
          </A>
        </LI>
        <LI>
          <A>
            <span>Js</span>
          </A>
        </LI>
        <LI active>
          <A>
            <span>帖子：我是一个人哈哈</span>
          </A>
        </LI>
        <LI>
          <A>
            <span>Checkout</span>
          </A>
        </LI>
      </UL>
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
