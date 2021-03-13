/*
 *
 * ErrorPage
 *
 */

import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

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

export type TProps = {
  errorCode?: number // 400 | 500 | 404
  target?: string
  testid?: string
  metric?: string
}

const ErrorPage: React.FC<TProps> = ({
  testid = 'error-page',
  errorCode,
  metric = METRIC.COMMUNITY,
  target = '',
}) => {
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
          <CodeSnippets path={target || router.asPath} />
        </IconsWrapper>
        <TextWrapper>
          {/** TODO:   */}
          {errorCode === 404 ? (
            <NotFoundMessage metric={metric} path={target || router.asPath} />
          ) : (
            <HintTitle testid={testid}>服务器发生错误</HintTitle>
          )}
          <ErrorDesc errorCode={errorCode} />
        </TextWrapper>
      </HintWrapper>
      <FooterWrapper />
    </Wrapper>
  )
}
export default React.memo(ErrorPage)
