/*
 *
 * JobItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import TimeAgo from 'timeago-react'

import { ICON_CMD } from '../../config'

import {
  Wrapper,
  Avatar,
  TitleLink,
  LinkIcon,
  Main,
  TopHalf,
  Breif,
  Title,
  TitleTag,
  SecondHalf,
  BodyDigest,
  Extra,
  TitleTagDot,
  RightInfo,
  SalaryWrapper,
  CompanyTitle,
} from './styles'

import { makeDebugger, cutFrom } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:JobItem:index')
/* eslint-enable no-unused-vars */

const JobItem = ({ entry, active, onTitleSelect }) => (
  <Wrapper current={entry} active={active}>
    <div>
      <Avatar src={entry.author.avatar} alt="avatar" />
    </div>
    <Main>
      <TopHalf>
        <Breif onClick={onTitleSelect.bind(this, entry)}>
          <Title>{entry.title}</Title>
          <TitleLink>
            <LinkIcon src={`${ICON_CMD}/link.svg`} />
            <span style={{ marginLeft: 9 }}>拉钩</span>
          </TitleLink>
          <TitleTag>
            <TitleTagDot />
            成都
          </TitleTag>
        </Breif>
      </TopHalf>

      <SecondHalf>
        <Extra>
          mydearxym 发布于:{' '}
          <TimeAgo datetime={entry.insertedAt} locale="zh_CN" /> ⁝ 浏览:{' '}
          {entry.views}
        </Extra>
        <BodyDigest>{cutFrom(entry.digest, 90)}</BodyDigest>
      </SecondHalf>
    </Main>

    <RightInfo>
      <CompanyTitle>中央公园</CompanyTitle>
      <SalaryWrapper>15k - 30k</SalaryWrapper>
    </RightInfo>
  </Wrapper>
)

JobItem.propTypes = {
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

JobItem.defaultProps = {
  onTitleSelect: debug,
  active: {},
}

export default JobItem
