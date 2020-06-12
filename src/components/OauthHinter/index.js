/*
 *
 * OauthHinter
 *
 */

import React from 'react'

import { ICON_CMD, ISSUE_ADDR } from '@/config'
import { buildLog } from '@/utils'

import {
  Container,
  HintWrapper,
  IconsWrapper,
  TextWrapper,
  HintTitle,
  HintDesc,
  CPSMdLogoWrapper,
  CPSMdLogo,
  CPSLogoIcon,
  LinkIcon,
  GithubLogoIcon,
  FooterWrapper,
  IssueLink,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:OauthHinter:index')

const OauthHinter = () => (
  <Container>
    <CPSMdLogoWrapper>
      <CPSMdLogo src={`${ICON_CMD}/cps_logo_md.png`} />
    </CPSMdLogoWrapper>
    <HintWrapper>
      <IconsWrapper>
        <CPSLogoIcon src={`${ICON_CMD}/keyboard_logo.png`} />
        <LinkIcon src={`${ICON_CMD}/oauth_link.svg`} />
        <GithubLogoIcon src={`${ICON_CMD}/github.svg`} />
      </IconsWrapper>
      <TextWrapper>
        <HintTitle>绑定成功，请稍等</HintTitle>
        <HintDesc>如果长时间未响应，请关闭页面重新尝试</HintDesc>
      </TextWrapper>
    </HintWrapper>
    <FooterWrapper>
      please{' '}
      <IssueLink
        href={`${ISSUE_ADDR}/new`}
        rel="noopener noreferrer"
        target="_blank"
      >
        report issue
      </IssueLink>{' '}
      if you think sth goes wrong.
    </FooterWrapper>
  </Container>
)

export default OauthHinter
