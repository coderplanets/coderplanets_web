/*
 *
 * RepoItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '../../config'

import { Space } from '..'
import BuilderList from './BuilderList'

import {
  Wrapper,
  Main,
  TopHalf,
  Breif,
  Title,
  Producer,
  RepoName,
  TitleTag,
  StatusInfo,
  StatusSection,
  StarIcon,
  ForkIcon,
  StatusNum,
  SecondHalf,
  BodyDigest,
  TitleTagDot,
  BuildByWrapper,
} from './styles'

import fakeBuilders from './fakeUsers'
import { makeDebugger, cutFrom } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:RepoItem:index')
/* eslint-enable no-unused-vars */

const RepoItem = ({ entry, active, onTitleSelect }) => (
  <Wrapper active={active.id && entry.id !== active.id}>
    <Main>
      <TopHalf>
        <Breif onClick={onTitleSelect.bind(this, entry)}>
          <Title>
            <Producer>{entry.producer}</Producer>
            <RepoName> / {entry.repoName}</RepoName>
          </Title>
          <TitleTag>
            <TitleTagDot />
            音频
          </TitleTag>
          <StatusInfo>
            <StatusSection>
              <StarIcon src={`${ICON_CMD}/repo_star.svg`} />
              <StatusNum>{entry.repoStarCount}</StatusNum>
            </StatusSection>
            <Space right="3px" />
            <StatusSection>
              <ForkIcon src={`${ICON_CMD}/repo_fork.svg`} />
              <StatusNum>{entry.repoForkCount}</StatusNum>
            </StatusSection>
          </StatusInfo>
        </Breif>
      </TopHalf>

      <SecondHalf>
        <BodyDigest>{cutFrom(entry.desc, 180)}</BodyDigest>
      </SecondHalf>

      <BuildByWrapper>
        <div>Build by </div>
        <BuilderList entries={fakeBuilders} />
      </BuildByWrapper>
    </Main>
  </Wrapper>
)

RepoItem.propTypes = {
  active: PropTypes.object,

  entry: PropTypes.shape({
    title: PropTypes.string,
    digest: PropTypes.string,
    views: PropTypes.number,

    author: PropTypes.shape({
      nickname: PropTypes.string,
      avatar: PropTypes.string,
    }),
  }).isRequired,

  onTitleSelect: PropTypes.func,
}

RepoItem.defaultProps = {
  onTitleSelect: debug,
  active: {},
}

export default RepoItem
