/*
 *
 * StateTree
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import ReactJson from 'react-json-view'

/* import PropTypes from 'prop-types' */

import { makeDebugger } from '../../utils'
/* eslint-disable-next-line */
const debug = makeDebugger('c:StateTree:index')

/* apathy flat ocean tube */
const StateTree = ({ json }) => (
  <ReactJson
    src={json}
    theme="rjv-default"
    name="rootStore"
    collapsed={1}
    iconStyle="circle"
    displayDataTypes={false}
    enableClipboard={false}
  />
)

StateTree.propTypes = {
  json: PropTypes.object.isRequired,
  // https://www.npmjs.com/package/prop-types
}

StateTree.defaultProps = {}

export default StateTree
