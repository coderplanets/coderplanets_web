/*
 *
 * PromptIcon
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { buildLog } from '@utils'
import PlanetDriver from './PlanetDriver'

/* eslint-disable-next-line */
const log = buildLog('c:PromptIcon:index')

const PromptIcon = ({ type, className }) => {
  switch (type) {
    case 'planet-driver':
      return <PlanetDriver className={className} />

    default:
      return <h3>other pics</h3>
  }
}

PromptIcon.propTypes = {
  type: PropTypes.oneOf(['planet-driver']),
  // just for clean styled-component warnings
  className: PropTypes.string,
}

PromptIcon.defaultProps = {
  type: 'planet-driver',
  className: 'promptIcon-class',
}

export default React.memo(PromptIcon)
