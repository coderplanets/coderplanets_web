/*
 *
 * ConstructingThread
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_BASE, ISSUE_ADDR } from '@/config'
import { buildLog } from '@/utils/logger'
import { Trans } from '@/utils/i18n'
import {
  Wrapper,
  ConstructIcon,
  Icon,
  Text,
  Title,
  DescWrapper,
  IssueLink,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ConstructingThread:index')

const ISSUE_NUM = {
  group: '330',
  company: '331',
}

const ConstructingThread = ({ thread }) => (
  <Wrapper>
    <Icon>
      <ConstructIcon src={`${ICON_BASE}/404/constructing.svg`} />
    </Icon>
    <Text>
      <Title>
        【{Trans(thread)}
        】版块正在设计/施工中
      </Title>
      <DescWrapper>
        您的宝贵意见或想法非常重要，欢迎参与
        <IssueLink
          href={`${ISSUE_ADDR}/${ISSUE_NUM[thread] || ''}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          社区讨论
        </IssueLink>
        。
      </DescWrapper>
    </Text>
  </Wrapper>
)

ConstructingThread.propTypes = {
  // https://www.npmjs.com/package/prop-types
  thread: T.string.isRequired,
}

ConstructingThread.defaultProps = {}

export default React.memo(ConstructingThread)
