/*
 *
 * ErrorPage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from 'styled-components'

import { ICON_CMD } from '../../config'

import {
  Container,
  HintWrapper,
  IconsWrapper,
  TextWrapper,
  HintTitle,
  HintDesc,
  LogoWrapper,
  ErrorDivider,
  ErrorNumber,
  Error404Icon,
  CPSMdLogo,
  FooterWrapper,
  IssueLink,
} from './styles'
import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:ErrorPage:index')
/* eslint-enable no-unused-vars */

const ErrorPage = ({ errorCode }) => (
  <Container>
    <LogoWrapper>
      <CPSMdLogo src={`${ICON_CMD}/cps_logo_md.png`} />
    </LogoWrapper>
    <HintWrapper>
      <IconsWrapper>
        <Error404Icon src={`${ICON_CMD}/cry.svg`} />
        <ErrorDivider />
        <ErrorNumber>{errorCode}</ErrorNumber>
      </IconsWrapper>
      <TextWrapper>
        {errorCode === 404 ? (
          <HintTitle>页面未找到</HintTitle>
        ) : (
          <HintTitle>服务器发生错误</HintTitle>
        )}
        <HintDesc>
          如果你觉得是站点的问题, 恳请你
          <IssueLink
            href="https://github.com/coderplanets/coderplanets_server/issues/new"
            rel="noopener noreferrer"
            target="_blank"
          >
            提交 Issue
          </IssueLink>
          , 以便于开发人员及时修复.
        </HintDesc>
        <HintDesc>如果没其他事的话， 5 秒钟后跳转回首页...</HintDesc>
      </TextWrapper>
    </HintWrapper>
    <FooterWrapper />
  </Container>
)

ErrorPage.propTypes = {
  errorCode: PropTypes.number,
}

ErrorPage.defaultProps = {
  errorCode: 404,
}

export default withTheme(ErrorPage)
