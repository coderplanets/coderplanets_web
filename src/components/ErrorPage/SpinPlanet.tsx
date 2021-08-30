import { FC, memo } from 'react'

import { Wrapper, Planet, Hole } from './styles/spin_planet'

type TProps = {
  scale?: number
}

const SpinPlanet: FC<TProps> = ({ scale = 1 }) => {
  return (
    <Wrapper scale={scale}>
      <Planet>
        <Hole />
        <Hole />
        <Hole />
        <Hole />
        <Hole />
      </Planet>
    </Wrapper>
  )
}

export default memo(SpinPlanet)
