/*
 *
 * PromptIcon
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'
import PlanetDriver from './PlanetDriver'

/* eslint-disable-next-line */
const log = buildLog('w:PromptIcon:index')

type TProps = {
  type?: 'planet-driver' | 'others'
  className?: string
}

const PromptIcon: FC<TProps> = ({
  type = 'planet-driver',
  className = 'promotIcon-class',
}) => {
  switch (type) {
    case 'planet-driver':
      return <PlanetDriver className={className} />

    default:
      return <h3>other pics</h3>
  }
}

export default memo(PromptIcon)
