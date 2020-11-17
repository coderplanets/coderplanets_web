import React from 'react'

import { Wrapper, Planet, Hole } from './styles/spin_planet'

const SpinPlanet = () => {
  return (
    <Wrapper testId="spin-planet">
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

export default React.memo(SpinPlanet)
