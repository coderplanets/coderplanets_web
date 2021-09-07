import { FC, memo } from 'react'
import { useTheme } from 'styled-components'

import type { TThemeMap } from '@/spec'
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

type TProps = {
  className: string
}

const PlanetDriver: FC<TProps> = ({ className }) => {
  const theme = useTheme() as TThemeMap

  return (
    <PlanetDriverIcon
      className={className}
      src={`${ICON_BASE}/404/not-found-${theme.name}.png`}
      angle={getRandomAngle()}
    />
  )
}

export default memo(PlanetDriver)
