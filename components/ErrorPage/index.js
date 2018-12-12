/*
 *
 * ErrorPage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { withTheme } from 'styled-components'

import { ICON_CMD, ISSUE_ADDR } from '../../config'

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

const NotFoundMessage = ({ page, target }) => {
  switch (page) {
    case 'user': {
      return (
        <HintTitle>
          未找到该用户
          {!R.isEmpty(target) ? <span>: {target}</span> : null}
        </HintTitle>
      )
    }
    default: {
      return <HintTitle>页面未找到</HintTitle>
    }
  }
}

const ErrorPage = ({ errorCode, page, target }) => (
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
          <NotFoundMessage page={page} target={target} />
        ) : (
          <HintTitle>服务器发生错误</HintTitle>
        )}
        <HintDesc>
          如果你觉得是站点的问题, 恳请你
          <IssueLink
            href={`${ISSUE_ADDR}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            提交 Issue
          </IssueLink>
          , 以便于开发人员及时修复.
        </HintDesc>
      </TextWrapper>
    </HintWrapper>
    <FooterWrapper />
  </Container>
)

ErrorPage.propTypes = {
  errorCode: PropTypes.number,
  page: PropTypes.string,
  target: PropTypes.string,
}

ErrorPage.defaultProps = {
  errorCode: 404,
  page: '',
  target: '',
}

export default withTheme(ErrorPage)
