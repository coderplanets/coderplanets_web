import React from 'react'

import RepoCounters from './RepoCounters'
import ContributorList from './ContributorList'

import {
  Wrapper,
  ReleaseWrapper,
  ReleaseTag,
  Label,
  Divider,
} from './styles/repo_status_card'

const RepoStatusCard = ({ data }) => (
  <Wrapper>
    <ReleaseWrapper>
      <Label>Release:</Label>
      <ReleaseTag>{data.releaseTag}</ReleaseTag>
    </ReleaseWrapper>
    <Divider />
    <Label>Build by</Label>
    <ContributorList items={data.contributors} readOnly />
    <Divider />
    <RepoCounters repo={data} />
  </Wrapper>
)

export default RepoStatusCard
