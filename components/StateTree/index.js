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

/* apathy flat ocean tube */
const StateTree = ({ json }) => {
  return (
    <div>
      <ReactJson
        src={json}
        theme="rjv-default"
        name="rootStore"
        collapsed={1}
        iconStyle="circle"
        displayDataTypes={false}
        enableClipboard={false}
      />
    </div>
  )
}

StateTree.propTypes = {
  // https://www.npmjs.com/package/prop-types
}

StateTree.defaultProps = {}

export default StateTree
