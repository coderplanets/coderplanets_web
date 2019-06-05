/*
 *
 * StateTree
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import ReactJson from 'react-json-view'
import { withTheme } from 'styled-components'

/* import PropTypes from 'prop-types' */

import { makelogger } from '@utils'
/* eslint-disable-next-line */
const log = makelogger('c:StateTree:index')

// see all the options in:
// https://mac-s-g.github.io/react-json-view/demo/dist/
const getTreeTheme = name => {
  switch (name) {
    case 'monokai':
      return 'monokai'
    case 'solarizedDark':
      return 'solarized'
    case 'github':
      return 'summerfruit:inverted'
    case 'purple':
      return 'twilight'
    default:
      return 'rjv-default'
  }
}

const StateTree = ({ json, theme }) => (
  <ReactJson
    src={json}
    theme={getTreeTheme(theme.name)}
    name="rootStore"
    collapsed={1}
    iconStyle="circle"
    displayDataTypes={false}
    enableClipboard={false}
  />
)

StateTree.propTypes = {
  json: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

StateTree.defaultProps = {}

export default withTheme(StateTree)
