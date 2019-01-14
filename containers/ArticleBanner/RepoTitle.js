import React from 'react'

import Popover from '../../components/Popover'

import {
  Wrapper,
  LanguageDot,
  LanguagePopover,
  TitleLink,
  Slash,
} from './styles/repo_title'

import { cutFrom } from '../../utils'

const RepoTitle = ({ repo }) => (
  <Wrapper>
    <Popover
      content={<LanguagePopover>{repo.primaryLanguage.name}</LanguagePopover>}
      placement="bottom"
      trigger="hover"
    >
      <LanguageDot color={repo.primaryLanguage.color} />
    </Popover>
    <TitleLink href={repo.ownerUrl} rel="noopener noreferrer" target="_blank">
      {repo.ownerName}
    </TitleLink>
    <Slash>/</Slash>
    <TitleLink href={repo.repoUrl} rel="noopener noreferrer" target="_blank">
      {cutFrom(repo.title, 20)}
    </TitleLink>{' '}
  </Wrapper>
)

export default RepoTitle
