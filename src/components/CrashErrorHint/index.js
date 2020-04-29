/*
 *
 * CrashErrorHint
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'

import { SpaceGrow } from '@components/Common'
import { Wrapper, Header, Title, UL, Li, Action, Footer } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:CrashErrorHint:index')

const CrashErrorHint = ({ onReport }) => {
  return (
    <Wrapper testid="crashErrorHint">
      <div />
      <div>
        <Header>
          <Title>心态崩了..</Title>
          <SpaceGrow />
        </Header>
        <p>
          本次请求因为未知原因崩溃，请尝试重新刷新页面或通过以下渠道给我们反馈：
        </p>
        <UL>
          <Li>
            重新<Action>刷新页面</Action>
          </Li>
          <Li onClick={onReport}>
            在线<Action noUnderline>报告错误</Action>
          </Li>
          <Li>
            在 <Action>Github</Action>上提交 issue
          </Li>
        </UL>
      </div>
      <Footer>
        sorry to see this, please try <Action>reload page</Action>,{' '}
        <Action>report error</Action> or report issue on <Action>github</Action>
      </Footer>
    </Wrapper>
  )
}

CrashErrorHint.propTypes = {
  onReport: T.func.isRequired,
}

CrashErrorHint.defaultProps = {}

export default React.memo(CrashErrorHint)
