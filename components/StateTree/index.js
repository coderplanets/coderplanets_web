/*
 *
 * StateTree
 *
 */

import React from 'react'
import ReactJson from 'react-json-view'

/* import PropTypes from 'prop-types' */

import { makeDebugger } from '../../utils/functions'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:StateTree:index')
/* eslint-enable no-unused-vars */

const StateTree = ({ json }) => {
  return (
    <div>
      <ReactJson src={json} collapsed={1} />
    </div>
  )
}

StateTree.propTypes = {
  // https://www.npmjs.com/package/prop-types
}

StateTree.defaultProps = {}

export default StateTree
