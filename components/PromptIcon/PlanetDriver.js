import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { ICON_BASE } from '../../config'

import { PlanetDriverIcon } from './styles'
import { getRandomInt } from '../../utils'

const getRandomAngle = () =>
  rotateAngles[getRandomInt(0, rotateAngles.length - 1)]

const rotateAngles = [
  'rotate(0deg)',
  'rotate(30deg)',
  'rotate(60deg)',
  'rotate(90deg)',
  'rotate(120deg)',
  'rotate(150deg)',
  'rotate(180deg)',
  'rotate(210deg)',
  'rotate(240deg)',
  'rotate(270deg)',
  'rotate(300deg)',
  'rotate(330deg)',
]

const PlanetDriver = ({ theme, className }) => (
  <PlanetDriverIcon
    className={className}
    src={`${ICON_BASE}/404/not-found-${theme.name}.png`}
    angle={getRandomAngle()}
  />
)

PlanetDriver.propTypes = {
  theme: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
}

PlanetDriver.defaultProps = {}

export default withTheme(PlanetDriver)
