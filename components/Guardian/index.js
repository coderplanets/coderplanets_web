/*
 *
 * Guardian
 *
*/

import React from 'react'
// import PropTypes from 'prop-types'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Guardian:index')
/* eslint-enable no-unused-vars */

class Guardian extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return <div>Guardian component</div>
  }
}

Guardian.propTypes = {
  // https://www.npmjs.com/package/prop-types
}

Guardian.defaultProps = {}

export default Guardian
