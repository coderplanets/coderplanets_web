import React from 'react'

import { getSVGIconPath } from '../../utils'
import {
  Wrapper,
  HeaderWrapper,
  Title,
  HelpText,
  IconList,
  PlanetsIcon,
} from './styles/planets'

const Planets = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>Live in 星球</Title>
        <HelpText>星球是什么？</HelpText>
      </HeaderWrapper>
      <IconList>
        <PlanetsIcon path={getSVGIconPath('js')} />
        <PlanetsIcon path={getSVGIconPath('elixir')} />
        <PlanetsIcon path={getSVGIconPath('go')} />
        <PlanetsIcon path={getSVGIconPath('php')} />
        <PlanetsIcon path={getSVGIconPath('perl')} />
        <PlanetsIcon path={getSVGIconPath('java')} />
        <PlanetsIcon path={getSVGIconPath('react')} />
        <PlanetsIcon path={getSVGIconPath('vue')} />
        <PlanetsIcon path={getSVGIconPath('angular')} />
        <PlanetsIcon path={getSVGIconPath('perl')} />
        <PlanetsIcon path={getSVGIconPath('java')} />
        <PlanetsIcon path={getSVGIconPath('ruby')} />
        <PlanetsIcon path={getSVGIconPath('typescript')} />
        <PlanetsIcon path={getSVGIconPath('python')} />
      </IconList>
    </Wrapper>
  )
}

export default Planets
