import React from 'react'
import styled from 'styled-components'

import Home from 'react-icons/lib/fa/home'
import Feature from 'react-icons/lib/fa/black-tie'
import Theme from 'react-icons/lib/fa/dashboard'
import I18n from 'react-icons/lib/fa/language'
import Example from 'react-icons/lib/fa/github-square'
import Cmd from 'react-icons/lib/fa/cogs'
import GraphQL from 'react-icons/lib/fa/crosshairs'

import { theme } from '../../utils/functions'

const StyleIcon = styled.span`
  color: ${theme('font')};
  font-size: 20px;
  margin-right: 10px;
`

export const HomeIcon = props => (
  <StyleIcon {...props}>
    <Home />
  </StyleIcon>
)

export const FeatureIcon = props => (
  <StyleIcon {...props}>
    <Feature />
  </StyleIcon>
)

export const ThemeIcon = props => (
  <StyleIcon {...props}>
    <Theme />
  </StyleIcon>
)

export const I18nIcon = props => (
  <StyleIcon {...props}>
    <I18n />
  </StyleIcon>
)

export const ExampleIcon = props => (
  <StyleIcon {...props}>
    <Example />
  </StyleIcon>
)

export const CmdIcon = props => (
  <StyleIcon {...props}>
    <Cmd />
  </StyleIcon>
)

export const GraphQLIcon = props => (
  <StyleIcon {...props}>
    <GraphQL />
  </StyleIcon>
)
