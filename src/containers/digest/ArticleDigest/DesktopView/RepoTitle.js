import React from 'react'

import Tooltip from '@/components/Tooltip'

import { cutRest } from '@/utils'
import {
  Wrapper,
  LanguageDot,
  LanguagePopover,
  TitleLink,
  Slash,
} from '../styles/desktop_view/repo_title'

const RepoTitle = ({ repo }) => (
  <Wrapper>
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
  </Wrapper>
)

export default React.memo(RepoTitle)
