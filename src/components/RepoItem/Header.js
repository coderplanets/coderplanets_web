import React from 'react'

import { ICON_CMD } from '@/config'

import { cutRest, numberWithCommas } from '@/utils'
import Tooltip from '@/components/Tooltip'
import { Space } from '@/components/Common'
import InlineTags from '@/components/InlineTags'

import {
  Wrapper,
  LangDot,
  PopoverInfo,
  Title,
  Owner,
  RepoName,
  TagsWrapper,
  StatusInfo,
  StatusSection,
  ForkSection,
  StarIcon,
  StatusNum,
  ForkIcon,
} from './styles/header'

const Header = ({ entry, onPreview }) => {
  return (
    <Wrapper onClick={() => onPreview(entry)}>
      <Title>
        <Tooltip
          placement="bottom"
          content={<PopoverInfo>{entry.primaryLanguage.name}</PopoverInfo>}
        >
          <LangDot color={entry.primaryLanguage.color} />
        </Tooltip>
        <Owner>{entry.ownerName}</Owner>
        <RepoName> / {cutRest(entry.title, 20)}</RepoName>
        <TagsWrapper>
          <InlineTags data={entry.tags} />
        </TagsWrapper>
      </Title>
      <StatusInfo>
        <StatusSection>
          <StarIcon src={`${ICON_CMD}/repo_star.svg`} />
          <StatusNum>{numberWithCommas(entry.starCount)}</StatusNum>
        </StatusSection>
        <Space right={3} />
        <ForkSection>
          <ForkIcon src={`${ICON_CMD}/repo_fork.svg`} />
          <StatusNum>{numberWithCommas(entry.forkCount)}</StatusNum>
        </ForkSection>
      </StatusInfo>
    </Wrapper>
  )
}

export default React.memo(Header)
