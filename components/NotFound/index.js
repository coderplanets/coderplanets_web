/*
 *
 * NotFound
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { ICON_BASE, ISSUE_ADDR } from '@config'

import { makelogger } from '@utils'
import {
  Icon404,
  Wrapper,
  Icon,
  Text,
  Title,
  DescWrapper,
  IssueLink,
  Desc,
} from './styles'

/* eslint-disable-next-line */
const log = makelogger('c:NotFound:index')

const DefaultDesc = () => (
  <React.Fragment>
    <div>
      如果没有你关注的语言或框架，你可以
      <IssueLink
        href={`${ISSUE_ADDR}/new`}
        rel="noopener noreferrer"
        target="_blank"
      >
        提交请求
      </IssueLink>
      ，管理员会在第一时间添加。
    </div>
    <div>
      如果你发现是网站的问题，恳请你
      <IssueLink
        href={`${ISSUE_ADDR}/new`}
        rel="noopener noreferrer"
        target="_blank"
      >
        提交issue
      </IssueLink>
      ，以便于开发者在第一时间修复。
    </div>
  </React.Fragment>
)

const NotFound = ({ msg, desc }) => (
  <Wrapper>
    <Icon>
      <Icon404 src={`${ICON_BASE}/404/nofound1.svg`} />
    </Icon>
    <Text>
      <Title>{msg}</Title>
      <DescWrapper>
        {R.isEmpty(desc) ? <DefaultDesc /> : <Desc>{desc}</Desc>}
      </DescWrapper>
    </Text>
  </Wrapper>
)

NotFound.propTypes = {
  // https://www.npmjs.com/package/prop-types
  msg: PropTypes.string,
  desc: PropTypes.string,
}

NotFound.defaultProps = {
  msg: '哦豁! 你所期待的内容没有找到 ...',
  desc: '',
}

// 如果你发现是网站的问题，恳请你在这里提交
export default NotFound
