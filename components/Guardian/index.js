/*
 *
 * Guardian
 *
*/

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { makeDebugger, BStore } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Guardian:index')
/* eslint-enable no-unused-vars */

class Guardian extends React.Component {
  passportValid() {
    const { require } = this.props
    const passports = BStore.get('passports')
    const checkPath = R.split('->', require)

    return !!R.path(checkPath, passports)
  }

  render() {
    const { children } = this.props

    return (
      <React.Fragment>
        {this.passportValid() ? (
          <React.Fragment>{children}</React.Fragment>
        ) : null}
      </React.Fragment>
    )
  }
}

Guardian.propTypes = {
  children: PropTypes.node.isRequired,
  require: PropTypes.string.isRequired,
}

Guardian.defaultProps = {}

export default Guardian
