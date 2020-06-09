import React from 'react'
import { AnimateOnChange } from 'react-animation'

import { SpaceGrow } from '@/components/Common'

import EXECUTES from './executes'

import { Header, HintIcon, Title } from './styles'

const animate = {
  fade: {
    durationOut: 200,
  },
  bounce: {
    animationIn: 'bounceIn',
    animationOut: 'bounceOut',
    durationOut: 1000,
  },
}

const HeaderComp = ({ index, themeName }) => {
  return (
    <AnimateOnChange {...animate.fade}>
      <Header>
        <HintIcon src={EXECUTES[index].icon} />
        <Title t={themeName}>{EXECUTES[index].title}</Title>
        <SpaceGrow />
      </Header>
    </AnimateOnChange>
  )
}

export default React.memo(HeaderComp)
