import React from 'react'

import { ICON_CMD } from '../../config'

import {
  Wrapper,
  TitlesWrapper,
  TitleLink,
  CountsWrapper,
  CountItem,
  CountIcon,
  StarIcon,
  CountText,
  CountDivider,
} from './styles/header'

const TitlesInfo = ({ repo }) => (
  <TitlesWrapper>
    <TitleLink href={repo.ownerUrl} rel="noopener noreferrer" target="_blank">
      {repo.ownerName}
    </TitleLink>{' '}
    /{' '}
    <TitleLink href={repo.repoUrl} rel="noopener noreferrer" target="_blank">
      {repo.title}
    </TitleLink>{' '}
  </TitlesWrapper>
)
const CountsInfo = ({ repo }) => (
  <CountsWrapper>
    <CountItem
      href={`${repo.repoUrl}/watchers`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <CountIcon src={`${ICON_CMD}/repo_watch.svg`} />
      <CountText>Watch: {repo.watchCount}</CountText>
      <CountDivider src={`${ICON_CMD}/more.svg`} />
    </CountItem>
    <CountItem
      href={`${repo.repoUrl}/stargazers`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <StarIcon src={`${ICON_CMD}/repo_star.svg`} />
      <CountText>Star: {repo.starCount}</CountText>
      <CountDivider src={`${ICON_CMD}/more.svg`} />
    </CountItem>
    <CountItem
      href={`${repo.repoUrl}/network/members`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <CountIcon src={`${ICON_CMD}/repo_fork.svg`} />
      <CountText>Fork: {repo.forkCount}</CountText>
    </CountItem>
  </CountsWrapper>
)

const Header = ({ repo }) => (
  <Wrapper>
    <TitlesInfo repo={repo} />
    <CountsInfo repo={repo} />
  </Wrapper>
)

export default Header
