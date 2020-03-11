/*
 *
 * EmptyThread
 *
 */

import React from 'react'
import T from 'prop-types'

import { ISSUE_ADDR } from '@config'

import { buildLog, Trans } from '@utils'
import {
  Icon404,
  Wrapper,
  Icon,
  Text,
  Title,
  DetailText,
  DescWrapper,
  IssueLink,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:EmptyThread:index')

const DescContent = ({ community, thread }) => (
  <React.Fragment>
    <div>
      如果你有 {community} 相关的
      <DetailText>优质</DetailText>
      {Trans(thread)}
      ，欢迎一起分享 / 交流
    </div>
    <div>
      若是网站的问题，恳请你
      <IssueLink
        href={`${ISSUE_ADDR}/new`}
        rel="noopener noreferrer"
        target="_blank"
      >
        提交issue
      </IssueLink>
      <DetailText>，以便于开发者排查修复。</DetailText>
    </div>
  </React.Fragment>
)

const EmptyThread = ({ community, thread }) => (
  <Wrapper>
    <Icon>
      <Icon404 />
    </Icon>
    <Text>
      <Title>
        {community} 社区内未找到
        <DetailText>符合</DetailText>
        相关
        <DetailText>条件的</DetailText>
        {`${Trans(thread)}`}
        <DetailText>信息</DetailText>
      </Title>
      <DescWrapper>
        <DescContent community={community} thread={thread} />
      </DescWrapper>
    </Text>
  </Wrapper>
)

EmptyThread.propTypes = {
  // https://www.npmjs.com/package/prop-types
  community: T.string.isRequired,
  thread: T.string.isRequired,
}

EmptyThread.defaultProps = {}

// 如果你发现是网站的问题，恳请你在这里提交
export default React.memo(EmptyThread)
