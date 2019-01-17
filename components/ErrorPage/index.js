/*
 *
 * ErrorPage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { ICON_CMD, ICON_BASE } from '../../config'

import NotFoundMessage from './NotFoundMessage'
import ErrorDesc from './ErrorDesc'

import {
  Container,
  HintWrapper,
  IconsWrapper,
  TextWrapper,
  HintTitle,
  LogoWrapper,
  ErrorDivider,
  ErrorNumber,
  Error404Icon,
  CPSMdLogo,
  FooterWrapper,
} from './styles'

import { makeDebugger, getRandomInt } from '../../utils'

/* eslint-disable-next-line */
const debug = makeDebugger('c:ErrorPage:index')

const rotateAngles = [
  'rotate(0deg)',
  'rotate(30deg)',
  'rotate(60deg)',
  'rotate(90deg)',
  'rotate(120deg)',
  'rotate(150deg)',
  'rotate(180deg)',
  'rotate(210deg)',
  'rotate(240deg)',
  'rotate(270deg)',
  'rotate(300deg)',
  'rotate(330deg)',
]

const getRandomAngle = () =>
  rotateAngles[getRandomInt(0, rotateAngles.length - 1)]

const ErrorPage = ({ errorCode, page, target, theme }) => (
  <Container>
    <LogoWrapper>
      <CPSMdLogo src={`${ICON_CMD}/cps_logo_md.png`} />
    </LogoWrapper>
    <HintWrapper>
      <IconsWrapper>
        <Error404Icon
          src={`${ICON_BASE}/404/not-found-${theme.name}.png`}
          angle={getRandomAngle()}
        />
        <ErrorDivider />
        <ErrorNumber>{errorCode}</ErrorNumber>
      </IconsWrapper>
      <TextWrapper>
        {errorCode === 404 ? (
          <NotFoundMessage page={page} target={target} />
        ) : (
          <HintTitle>服务器内部发生错误</HintTitle>
        )}
        <ErrorDesc errorCode={errorCode} />
      </TextWrapper>
    </HintWrapper>
    <FooterWrapper />
  </Container>
)

ErrorPage.propTypes = {
  errorCode: PropTypes.number,
  page: PropTypes.string,
  target: PropTypes.string,
  theme: PropTypes.object.isRequired,
}

ErrorPage.defaultProps = {
  errorCode: 404,
  page: '',
  target: '',
}

export default withTheme(ErrorPage)
