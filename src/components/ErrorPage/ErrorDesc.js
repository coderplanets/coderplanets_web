import React from 'react'

import { ISSUE_ADDR } from '@/config'

import { HintDesc, IssueLink } from './styles'

const ErrorDesc = ({ errorCode }) => {
  switch (errorCode) {
    case 404:
      return (
        <HintDesc>
          如果是站点的问题, 欢迎在本站的
          <IssueLink
            href={`${ISSUE_ADDR}/new`}
            rel="noopener noreferrer"
            target="_blank"
          >
            反馈渠道
          </IssueLink>
          和我们取得联系。
        </HintDesc>
      )
    default:
      return (
        <HintDesc>
          工程师正在及时修复中, 相关进度可在本站的
          <IssueLink
            href={`${ISSUE_ADDR}/new`}
            rel="noopener noreferrer"
            target="_blank"
          >
            反馈渠道
          </IssueLink>
          查看，对此刻造成的不便非常抱歉。
        </HintDesc>
      )
  }
}

export default React.memo(ErrorDesc)
