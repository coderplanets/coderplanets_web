import React from 'react'

import { ICON_CMD, ISSUE_ADDR } from '@config'
import {
  Wrapper,
  Selector,
  Issue,
  GithubIcon,
  Divider,
  IssueLinker,
} from './styles/footer'

const Footer = () => (
  <Wrapper>
    <Selector />
    <Issue>
      <GithubIcon src={`${ICON_CMD}/github.svg`} />
      <IssueLinker
        href={`${ISSUE_ADDR}/340`}
        rel="noopener noreferrer"
        target="_blank"
      >
        意见或建议
      </IssueLinker>
      <Divider>|</Divider>
      <IssueLinker
        href={`${ISSUE_ADDR}/new`}
        rel="noopener noreferrer"
        target="_blank"
      >
        报告 issue
      </IssueLinker>
    </Issue>
  </Wrapper>
)

export default Footer
