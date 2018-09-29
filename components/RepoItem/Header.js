import React from 'react'

import { ICON_CMD } from '../../config'

import Popover from '../Popover'
import { Space } from '../BaseStyled'

import {
  Wrapper,
  LangDot,
  PopoverInfo,
  Title,
  Owner,
  RepoName,
  TitleTag,
  TitleTagDot,
  StatusInfo,
  StatusSection,
  StarIcon,
  StatusNum,
  ForkIcon,
} from './styles/header'

import { cutFrom, numberWithCommas } from '../../utils'

const Header = ({ entry, onTitleSelect }) => (
  <Wrapper onClick={onTitleSelect.bind(this, entry)}>
    <Title>
      <Popover
        placement="bottom"
        trigger="hover"
        content={<PopoverInfo>{entry.primaryLanguage.name}</PopoverInfo>}
      >
        <LangDot color={entry.primaryLanguage.color} />
      </Popover>
      <Owner>{entry.ownerName}</Owner>
      <RepoName> / {cutFrom(entry.title, 20)}</RepoName>
    </Title>
    <TitleTag>
      <TitleTagDot />
      音频
    </TitleTag>
    <StatusInfo>
      <StatusSection>
        <StarIcon src={`${ICON_CMD}/repo_star.svg`} />
        <StatusNum>{numberWithCommas(entry.starCount)}</StatusNum>
      </StatusSection>
      <Space right="3px" />
      <StatusSection>
        <ForkIcon src={`${ICON_CMD}/repo_fork.svg`} />
        <StatusNum>{numberWithCommas(entry.forkCount)}</StatusNum>
      </StatusSection>
    </StatusInfo>
  </Wrapper>
)

export default Header
