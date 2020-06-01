/*
 *
 * ErrorPage
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'

import { buildLog } from '@/utils'
import NotFoundMessage from './NotFoundMessage'
import ErrorDesc from './ErrorDesc'

import {
  Wrapper,
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

/* eslint-disable-next-line */
const log = buildLog('c:ErrorPage:index')

const ErrorPage = ({ errorCode, page, target }) => (
  <Wrapper>
    <LogoWrapper>
      <CPSMdLogo src={`${ICON_CMD}/cps_logo_md.png`} />
    </LogoWrapper>
    <HintWrapper>
      <IconsWrapper>
        <Error404Icon />
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
  </Wrapper>
)

ErrorPage.propTypes = {
  errorCode: T.number,
  page: T.string,
  target: T.string,
}

ErrorPage.defaultProps = {
  errorCode: 404,
  page: '',
  target: '',
}

export default React.memo(ErrorPage)
