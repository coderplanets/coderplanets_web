/*
 *
 * ErrorPage
 *
 */

import React from 'react'
import T from 'prop-types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { values } from 'ramda'

import { METRIC } from '@/constant'
import { ICON_BASE } from '@/config'
import { buildLog } from '@/utils'

import SpinPlanet from './SpinPlanet'
import CodeSnippets from './CodeSnippets'

import NotFoundMessage from './NotFoundMessage'
import ErrorDesc from './ErrorDesc'

import {
  Wrapper,
  HintWrapper,
  IconsWrapper,
  TextWrapper,
  HintTitle,
  LogoWrapper,
  SiteLogo,
  SiteTitle,
  FooterWrapper,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ErrorPage:index')

const ErrorPage = ({ testid, errorCode, metric, target }) => {
  const router = useRouter()

  return (
    <Wrapper testid={testid}>
      <Link href="/" passHref>
        <LogoWrapper testid="site-logo">
          <SiteLogo src={`${ICON_BASE}/site_logo.svg`} />
          <SiteTitle>CoderPlanets</SiteTitle>
        </LogoWrapper>
      </Link>

      {/* <SpinPlanet /> */}
      <HintWrapper>
        <IconsWrapper>
          <SpinPlanet />
          <CodeSnippets errorCode={errorCode} path={target || router.asPath} />
        </IconsWrapper>
        <TextWrapper>
          {/** TODO:   */}
          {errorCode === 404 ? (
            <NotFoundMessage metric={metric} path={target || router.asPath} />
          ) : (
            <HintTitle>服务器发生错误</HintTitle>
          )}
          <ErrorDesc errorCode={errorCode} />
        </TextWrapper>
      </HintWrapper>
      <FooterWrapper />
    </Wrapper>
  )
}

ErrorPage.propTypes = {
  testid: T.string,
  errorCode: T.oneOf([404, 500]),
  metric: T.oneOf(values(METRIC)),
  target: T.string,
}

ErrorPage.defaultProps = {
  testid: 'error-page',
  errorCode: 404,
  metric: METRIC.COMMUNITY,
  target: '',
}

export default React.memo(ErrorPage)
