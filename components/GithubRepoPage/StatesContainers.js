import React from 'react'

import {
  Wrapper,
  BoxWrapper,
  Label,
  Number,
  BuilderWrapper,
  Avatar,
  MoreText,
} from './styles/states_containers'

import fakeBuilders from './fakeUsers'

import { uid } from '../../utils'

const BuilderList = ({ entries }) => (
  <BuilderWrapper>
    {entries.map(builder => (
      <Avatar key={uid.gen()} src={builder.avatar} />
    ))}
    <MoreText>...</MoreText>
  </BuilderWrapper>
)

const StatesContainers = () => (
  <Wrapper>
    <BoxWrapper>
      <Label>Issue</Label>
      <Number>33</Number>
    </BoxWrapper>
    <BoxWrapper>
      <Label>PRs</Label>
      <Number>3</Number>
    </BoxWrapper>
    <BoxWrapper>
      <Label>Release</Label>
      <Number>3</Number>
    </BoxWrapper>
    <BoxWrapper>
      <Label>License</Label>
      <Number small>Apache-2.0</Number>
    </BoxWrapper>
    <BoxWrapper grow nomargin>
      <Label>Contributers (23)</Label>
      <BuilderList entries={fakeBuilders} />
    </BoxWrapper>
  </Wrapper>
)

export default StatesContainers
