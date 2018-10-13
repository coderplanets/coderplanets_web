/*
 *
 * EmptyThread
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_BASE, ISSUE_ADDR } from '../../config'
import { makeDebugger, Trans } from '../../utils'

import {
  Icon404,
  Wrapper,
  Icon,
  Text,
  Title,
  DescWrapper,
  IssueLink,
} from './styles'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:EmptyThread:index')
/* eslint-enable no-unused-vars */

const DescContent = ({ community, thread }) => (
  <React.Fragment>
    <div>
      如果你有 {community} 相关的优质
      {Trans(thread)}
      ，欢迎一起分享 / 交流
    </div>
    <div>
      若是网站的问题，恳请你
      <IssueLink href={ISSUE_ADDR} rel="noopener noreferrer" target="_blank">
        提交issue
      </IssueLink>
      ，以便于开发者排查修复。
    </div>
  </React.Fragment>
)

const EmptyThread = ({ community, thread }) => (
  <Wrapper>
    <Icon>
      <Icon404 src={`${ICON_BASE}/404/nofound1.svg`} />
    </Icon>
    <Text>
      <Title>
        {community} 社区内未找到符合相关条件的
        {`${Trans(thread)}信息`}
      </Title>
      <DescWrapper>
        <DescContent community={community} thread={thread} />
      </DescWrapper>
    </Text>
  </Wrapper>
)

EmptyThread.propTypes = {
  // https://www.npmjs.com/package/prop-types
  community: PropTypes.string.isRequired,
  thread: PropTypes.string.isRequired,
}

EmptyThread.defaultProps = {}

// 如果你发现是网站的问题，恳请你在这里提交
export default EmptyThread
