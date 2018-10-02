import React from 'react'

import { DotDivider, ContributorList } from '../../components'

import {
  Wrapper,
  Divider,
  Text,
  Title,
  JoinText,
  ViewsText,
} from './styles/note'

import fakeusers from './fakeusers'

const Note = () => (
  <Wrapper>
    <Divider />
    <Text>
      <Title>本页贡献者</Title> <DotDivider /> <JoinText>参与编辑</JoinText>
      <ViewsText>浏览: 244</ViewsText>
    </Text>
    <ContributorList users={fakeusers} showAdder />
  </Wrapper>
)

export default Note
