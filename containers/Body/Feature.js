import React from 'react'
// import styled from 'styled-components'

import A from '../../components/A'
import {
  Center,
  HorizontalCenter,
  Title,
  Ul,
  Li,
} from '../../components/BaseStyled'

const Feature = () => {
  return (
    <Center>
      <HorizontalCenter>
        <Title>主要特性</Title>
      </HorizontalCenter>
      <br />
      <Ul>
        <Li>
          server-side-render out of the box, power by{' '}
          <A href="https://zeit.co/blog/next3">next.js</A>
        </Li>
        <Li>
          elegant front-end ORM layer powered by{' '}
          <A href="https://github.com/mobxjs/mobx">mobx</A> &&{' '}
          <A href="https://github.com/mobxjs/mobx-state-tree">
            mobx-state-tree
          </A>
        </Li>
        <Li>awesome state manage use the full power of Ramada.js && Rx.js</Li>
        <Li>
          <A href="https://www.styled-components.com">styled-component</A> as
          the css solution
        </Li>
        <Li>multi language support</Li>
        <Li>well tested by use jest</Li>
        <Li>handy generators for quick development</Li>
        <Li>enjoyable dev experience by using modern web tools</Li>
      </Ul>
    </Center>
  )
}

export default Feature
