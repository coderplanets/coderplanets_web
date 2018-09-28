import React from 'react'

import { ICON_CMD } from '../../config'

import { Space } from '../BaseStyled'
import Popover from '../Popover'

import {
  Wrapper,
  TitlesWrapper,
  LanguageDot,
  LanguagePopover,
  TitleLink,
  CountsWrapper,
  CountItem,
  CountIcon,
  StarIcon,
  CountText,
  CountDivider,
} from './styles/header'

import { numberWithCommas } from '../../utils'

const TitlesInfo = ({ repo }) => (
  <TitlesWrapper>
    <Popover
      content={<LanguagePopover>javascript</LanguagePopover>}
      placement="bottom"
      trigger="hover"
    >
      <LanguageDot />
    </Popover>
    <TitleLink href={repo.ownerUrl} rel="noopener noreferrer" target="_blank">
      {repo.ownerName}
    </TitleLink>
    <Space left="4px" />/{''}
    <Space right="4px" />
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
      <CountText>{numberWithCommas(repo.watchCount)}</CountText>
      <CountDivider src={`${ICON_CMD}/more.svg`} />
    </CountItem>
    <CountItem
      href={`${repo.repoUrl}/stargazers`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <StarIcon src={`${ICON_CMD}/repo_star.svg`} />
      <CountText>{numberWithCommas(repo.starCount)}</CountText>
      <CountDivider src={`${ICON_CMD}/more.svg`} />
    </CountItem>
    <CountItem
      href={`${repo.repoUrl}/network/members`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <CountIcon src={`${ICON_CMD}/repo_fork.svg`} />
      <CountText>{numberWithCommas(repo.forkCount)}</CountText>
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
