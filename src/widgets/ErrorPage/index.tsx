/*
 *
 * ErrorPage
 *
 */

import { FC, memo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'

import SpinPlanet from './SpinPlanet'
// import CodeSnippets from './CodeSnippets'

import NotFoundMessage from './NotFoundMessage'
import ErrorDesc from './ErrorDesc'

import {
  Wrapper,
  HintWrapper,
  IconsWrapper,
  Planet1Wrapper,
  Planet2Wrapper,
  OopsLetter,
  TextWrapper,
  HintTitle,
  LogoWrapper,
  SiteLogo,
  SiteTitle,
  FooterWrapper,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:ErrorPage:index')

export type TProps = {
  errorCode?: number // 400 | 500 | 404
  target?: string
  testid?: string
  metric?: TMetric
}

const ErrorPage: FC<TProps> = ({
  testid = 'error-page',
  errorCode = 500,
  metric = METRIC.COMMUNITY,
  target = '',
}) => {
  const router = useRouter()

  return (
    <Wrapper testid={testid}>
      <Link href="/" passHref>
        <LogoWrapper testid="site-logo">
          <SiteLogo />
          <SiteTitle>oderPlanets</SiteTitle>
        </LogoWrapper>
      </Link>

      <HintWrapper>
        <IconsWrapper>
          <Planet1Wrapper>
            <SpinPlanet scale={0.8} />
          </Planet1Wrapper>
          <Planet2Wrapper>
            <SpinPlanet scale={0.45} />
          </Planet2Wrapper>
          <OopsLetter>ps~</OopsLetter>
          {/* <CodeSnippets path={target || router.asPath} /> */}
        </IconsWrapper>
        <TextWrapper>
          {/** TODO:   */}
          {errorCode === 404 ? (
            <NotFoundMessage metric={metric} path={target || router.asPath} />
          ) : (
            <HintTitle testid={testid}>抱歉，服务器发生错误</HintTitle>
          )}
          <ErrorDesc code={errorCode} />
        </TextWrapper>
      </HintWrapper>
      <FooterWrapper />
    </Wrapper>
  )
}
export default memo(ErrorPage)
