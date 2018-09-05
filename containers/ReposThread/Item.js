import React from 'react'
/* import TimeAgo from 'timeago-react' */

import { ICON_CMD } from '../../config'

import { Space } from '../../components'
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
} from './styles/item'

import { cutFrom } from '../../utils'
import * as logic from './logic'

const fakeBuilders = [
  {
    avatar: 'http://robohash.org/set_set2/bgset_bg1/ivxebJQeJz',
    link: 'xxx',
    nickname: 'user1',
  },
  {
    avatar: 'http://robohash.org/set_set1/bgset_bg2/K9q2gg',
    link: 'xxx',
    nickname: 'user1',
  },
  {
    avatar: 'http://robohash.org/set_set1/bgset_bg2/K9q2gg',
    link: 'xxx',
    nickname: 'user1',
  },
  {
    avatar: 'http://robohash.org/set_set1/bgset_bg2/K9q2gg',
    link: 'xxx',
    nickname: 'user1',
  },
  {
    avatar: 'http://robohash.org/set_set3/bgset_bg1/bURifG',
    link: 'xxx',
    nickname: 'user1',
  },
  {
    avatar: 'http://robohash.org/set_set1/bgset_bg1/poWVpD',
    link: 'xxx',
    nickname: 'user1',
  },
  {
    avatar: 'https://avatars2.githubusercontent.com/u/6184465?v=4',
    link: 'xxx',
    nickname: 'user1',
  },
]

const Item = ({ data, active, index }) => (
  <Wrapper current={data} active={active} index={index}>
    <Main>
      <TopHalf>
        <Breif onClick={logic.onTitleSelect.bind(this, data)}>
          <Title>
            <Producer>{data.producer}</Producer>
            <RepoName> / {data.repoName}</RepoName>
          </Title>
          <TitleTag>
            <TitleTagDot />
            音频
          </TitleTag>
          <StatusInfo>
            <StatusSection>
              <StarIcon src={`${ICON_CMD}/repo_star.svg`} />
              <StatusNum>{data.repoStarCount}</StatusNum>
            </StatusSection>
            <Space right="3px" />
            <StatusSection>
              <ForkIcon src={`${ICON_CMD}/repo_fork.svg`} />
              <StatusNum>{data.repoForkCount}</StatusNum>
            </StatusSection>
          </StatusInfo>
        </Breif>
      </TopHalf>

      <SecondHalf>
        <BodyDigest>{cutFrom(data.desc, 180)}</BodyDigest>
      </SecondHalf>

      <BuildByWrapper>
        <div>Build by </div>
        <BuilderList entries={fakeBuilders} />
      </BuildByWrapper>
    </Main>
  </Wrapper>
)

export default Item
