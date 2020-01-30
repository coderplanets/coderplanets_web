/*
 *
 * FiltersMenu
 *
 */

import React from 'react'
import T from 'prop-types'

import { Wrapper } from './styles'

import { buildLog } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('c:FiltersMenu:index')

const FiltersMenu = props => {
  return <div>FiltersMenu component</div>
}

FiltersMenu.propTypes = {
  // https://www.npmjs.com/package/prop-types
}

FiltersMenu.defaultProps = {}

export default React.memo(FiltersMenu)
