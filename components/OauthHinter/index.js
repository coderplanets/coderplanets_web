/*
 *
 * OauthHinter
 *
 */

import React from 'react'

import { withTheme } from 'styled-components'

import { ICON_CMD } from '../../config'

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
import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:OauthHinter:index')
/* eslint-enable no-unused-vars */

const OauthHinter = () => {
  return (
    <Container>
      <CPSMdLogoWrapper>
        <CPSMdLogo src={`${ICON_CMD}/cps_logo_md.png`} />
      </CPSMdLogoWrapper>
      <HintWrapper>
        <IconsWrapper>
          <CPSLogoIcon src={`${ICON_CMD}/keyboard_logo.svg`} />
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
          href="https://github.com/coderplanets/coderplanets_server/issues/new"
          rel="noopener noreferrer"
          target="_blank"
        >
          report issue
        </IssueLink>{' '}
        if you think sth goes wrong.
      </FooterWrapper>
    </Container>
  )
}

export default withTheme(OauthHinter)
