import React from 'react'

import { ICON_CMD } from '@config'

import { numberWithCommas } from '@utils'
import {
  Wrapper,
  CountItem,
  CountIcon,
  StarIcon,
  CountText,
} from './styles/repo_counters'

const RepoCounters = ({ repo }) => (
  <Wrapper>
    <CountItem
      href={`${repo.repoUrl}/stargazers`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <StarIcon src={`${ICON_CMD}/repo_star.svg`} />
      <CountText>{numberWithCommas(repo.starCount)}</CountText>
    </CountItem>
    <CountItem
      href={`${repo.repoUrl}/network/members`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <CountIcon src={`${ICON_CMD}/repo_fork.svg`} />
      <CountText>{numberWithCommas(repo.forkCount)}</CountText>
    </CountItem>
    <CountItem
      href={`${repo.repoUrl}/watchers`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <CountIcon src={`${ICON_CMD}/repo_watch.svg`} />
      <CountText>{numberWithCommas(repo.watchCount)}</CountText>
    </CountItem>
  </Wrapper>
)

export default React.memo(RepoCounters)
