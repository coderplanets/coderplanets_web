import React from 'react'

import { ICON_CMD } from '@/config'

import { numberWithCommas, cutRest } from '@/utils/helper'
import Tooltip from '@/components/Tooltip'

import {
  Wrapper,
  TitlesWrapper,
  LanguageDot,
  LanguagePopover,
  TitleLink,
  Slash,
  CountsWrapper,
  CountItem,
  CountIcon,
  StarIcon,
  CountText,
  CountDivider,
} from './styles/header'

const TitlesInfo = ({ repo }) => (
  <TitlesWrapper>
    <Tooltip
      content={<LanguagePopover>{repo.primaryLanguage.name}</LanguagePopover>}
      placement="bottom"
    >
      <LanguageDot color={repo.primaryLanguage.color} />
    </Tooltip>
    <TitleLink href={repo.ownerUrl} rel="noopener noreferrer" target="_blank">
      {repo.ownerName}
    </TitleLink>
    <Slash>/</Slash>
    <TitleLink href={repo.repoUrl} rel="noopener noreferrer" target="_blank">
      {cutRest(repo.title, 20)}
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

export default React.memo(Header)
