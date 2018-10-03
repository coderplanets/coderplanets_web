import React from 'react'

import { DotDivider, ContributorList, Button } from '../../components'

import {
  Wrapper,
  Divider,
  Text,
  Title,
  JoinText,
  ViewsText,
  SyncWrapper,
} from './styles/note'

// import fakeusers from './fakeusers'

const Note = ({ onSync, contributors, views, addContributor }) => (
  <Wrapper>
    <Divider />
    <Text>
      <Title>本页贡献者</Title> <DotDivider /> <JoinText>参与编辑</JoinText>
      <ViewsText>浏览: {views}</ViewsText>
    </Text>
    <ContributorList
      users={contributors}
      showAdder
      addContributor={addContributor}
    />
    <SyncWrapper>
      <Button size="small" type="primary" ghost onClick={onSync}>
        同步 cheatseet
      </Button>
    </SyncWrapper>
  </Wrapper>
)

export default Note
