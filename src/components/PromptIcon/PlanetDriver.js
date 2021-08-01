import React from 'react'
import T from 'prop-types'
import { useTheme } from 'styled-components'

import { ICON_BASE } from '@/config'

import { getRandomInt } from '@/utils/helper'
import { PlanetDriverIcon } from './styles'

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

const PlanetDriver = ({ className }) => {
  const theme = useTheme()
  return (
    <PlanetDriverIcon
      className={className}
      src={`${ICON_BASE}/404/not-found-${theme.name}.png`}
      angle={getRandomAngle()}
    />
  )
}

PlanetDriver.propTypes = {
  className: T.string.isRequired,
}

PlanetDriver.defaultProps = {}

export default PlanetDriver
