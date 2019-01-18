import React from 'react'

import { ISSUE_ADDR, EMAIL_SUPPORT } from '../../config'

import { HintDesc, IssueLink } from './styles'

const ErrorDesc = ({ errorCode }) => {
  switch (errorCode) {
    case 404:
      return (
        <HintDesc>
          如果你觉得是站点的问题, 可以在
          <IssueLink
            href={`${ISSUE_ADDR}/new`}
            rel="noopener noreferrer"
            target="_blank"
          >
            这里反馈
          </IssueLink>
          , 我们会第一时间处理。
        </HintDesc>
      )
    default:
      return (
        <React.Fragment>
          <HintDesc>
            抱歉带给您糟糕的体验, 恳请您
            <IssueLink
              href={`${ISSUE_ADDR}/new`}
              rel="noopener noreferrer"
              target="_blank"
            >
              提交 Issue
            </IssueLink>
            , 以便于开发人员及时修复。
          </HintDesc>

          <HintDesc small>
            若您不习惯于 Issue 的协作方式, 可以
            <IssueLink href={`mailto:${EMAIL_SUPPORT}`}>
              发送邮件
            </IssueLink>{' '}
            描述您遇到的问题 , 我们对此非常重视。
          </HintDesc>
        </React.Fragment>
      )
  }
}

export default ErrorDesc
