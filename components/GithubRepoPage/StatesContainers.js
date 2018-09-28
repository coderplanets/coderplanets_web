import React from 'react'
import R from 'ramda'

import Maybe from '../Maybe'

import {
  Wrapper,
  BoxWrapper,
  Label,
  Number,
  BuilderWrapper,
  Avatar,
  Linker,
} from './styles/states_containers'

import { uid } from '../../utils'

const BuilderList = ({ entries }) => (
  <BuilderWrapper id="fucking">
    {entries.map(builder => (
      <Linker
        key={uid.gen()}
        href={builder.htmlUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Avatar src={builder.avatar} />
      </Linker>
    ))}
  </BuilderWrapper>
)

const StatesContainers = ({ repo }) => (
  <Wrapper>
    <Linker
      href={`${repo.repoUrl}/issues`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <BoxWrapper>
        <Label>Issue</Label>
        <Number>{repo.issuesCount}</Number>
      </BoxWrapper>
    </Linker>
    <Linker
      href={`${repo.repoUrl}/pulls`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <BoxWrapper>
        <Label>PRs</Label>
        <Number>{repo.prsCount}</Number>
      </BoxWrapper>
    </Linker>
    <Linker
      href={`${repo.repoUrl}/releases`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <BoxWrapper>
        <Label>Release</Label>
        <Number>{repo.releaseTag || '--'}</Number>
      </BoxWrapper>
    </Linker>
    <Linker
      href={`${repo.repoUrl}/blob/master/LICENSE`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <BoxWrapper>
        <Label>License</Label>
        <Number small={repo.license.length > 5}>
          {R.toUpper(repo.license)}
        </Number>
      </BoxWrapper>
    </Linker>
    <BoxWrapper grow nomargin nohover>
      <Label>Contributers</Label>
      <Maybe
        test={!R.isEmpty(repo.contributors)}
        loading={<div>api rate limit</div>}
      >
        <BuilderList entries={repo.contributors} />
      </Maybe>
    </BoxWrapper>
  </Wrapper>
)

export default StatesContainers
