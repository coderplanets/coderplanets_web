import React from 'react'
// import styled from 'styled-components'

import { FormattedMessage as I18n } from 'react-intl'
import lang from './lang'

import A from '../../components/A'
import {
  Center,
  HorizontalCenter,
  Title,
  Ul,
  Li,
  Margin,
} from '../../components/BaseStyled'

const Feature = () => {
  return (
    <Center>
      <HorizontalCenter>
        <Title>
          <I18n {...lang.featureTitle} />
        </Title>
      </HorizontalCenter>
      <br />
      <Margin left="8vw">
        <Ul>
          <Li>
            <I18n {...lang.feature1} />{' '}
            <A href="https://zeit.co/blog/next3">next.js</A>
          </Li>
          <Li>
            <I18n {...lang.feature2} />{' '}
            <A href="https://github.com/mobxjs/mobx">mobx</A> &&{' '}
            <A href="https://github.com/mobxjs/mobx-state-tree">
              mobx-state-tree
            </A>
          </Li>
          <Li>
            <I18n {...lang.feature3} />{' '}
            <A href="https://github.com/ramda/ramda">Ramada.js</A> &&{' '}
            <A href="https://github.com/ReactiveX/rxjs">Rx.js</A>
          </Li>
          <Li>
            <A href="https://www.styled-components.com">styled-component</A>
            <I18n {...lang.feature4} />
          </Li>
          <Li>
            <I18n {...lang.feature5} />
          </Li>
          <Li>
            <I18n {...lang.feature6} />
          </Li>
          <Li>
            <I18n {...lang.feature8} />
          </Li>
          <Li>
            <I18n {...lang.feature9} />
          </Li>
        </Ul>
      </Margin>
    </Center>
  )
}

export default Feature
