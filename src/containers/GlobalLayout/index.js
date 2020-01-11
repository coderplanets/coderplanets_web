/*
 *
 * GlobalLayout
 *
 */

import React from 'react'
import T from 'prop-types'

import useNetwork from 'react-use/lib/useNetwork'

// custom overlayscrollbars
// see: https://github.com/KingSora/OverlayScrollbars/tree/master/packages/overlayscrollbars-react
import 'overlayscrollbars/css/OverlayScrollbars.css'

import { ICON_CMD } from '@config'
import { connectStore } from '@utils'
import { useShortcut, useMedia, usePlatform } from '@hooks'

import AnalysisService from '@services/Analysis'
import ThemeWrapper from '@containers/ThemeWrapper'
import MultiLanguage from '@containers/MultiLanguage'

import Sidebar from '@containers/Sidebar'
import Preview from '@containers/Preview'
import Doraemon from '@containers/Doraemon'
import Route from '@containers/Route'
import Header from '@containers/Header'
import ErrorBox from '@containers/ErrorBox'
import Footer from '@containers/Footer'
import ErrorPage from '@components/ErrorPage'

import SEO from './SEO'

import {
  Wrapper,
  InnerWrapper,
  SubCommunitiesExpander,
  ExpanderIcon,
} from './styles'
import { useInit, openDoraemon, queryDoraemon } from './logic'

const GlobalLayoutContainer = ({
  globalLayout,
  page,
  seoConfig,
  errorCode,
  errorPath,
  children,
  noSidebar,
  metric,
}) => {
  const { online } = useNetwork()

  const media = useMedia()
  const platform = usePlatform()

  useInit(globalLayout, { online, media, platform })

  useShortcut('ctrl+p', openDoraemon)
  const { sidebarPin } = globalLayout

  return (
    <AnalysisService>
      <ThemeWrapper>
        <Wrapper>
          {errorCode ? (
            <ErrorPage errorCode={errorCode} page={page} target={errorPath} />
          ) : (
            <MultiLanguage>
              <SEO page={page} config={seoConfig} />
              <InnerWrapper sidebarPin={sidebarPin} noSidebar={noSidebar}>
                <SubCommunitiesExpander onClick={queryDoraemon('/')}>
                  <ExpanderIcon src={`${ICON_CMD}/expander_more.svg`} />
                </SubCommunitiesExpander>
                <Route />
                {!noSidebar && <Sidebar />}
                <Preview />
                <Doraemon />
                <ErrorBox />
                <Header metric={metric} />
                {children}
                <Footer />
              </InnerWrapper>
            </MultiLanguage>
          )}
        </Wrapper>
      </ThemeWrapper>
    </AnalysisService>
  )
}

GlobalLayoutContainer.propTypes = {
  children: T.arrayOf(T.element),
  globalLayout: T.object.isRequired,
  seoConfig: T.object.isRequired, // TODO:
  noSidebar: T.bool,
  page: T.string.isRequired,
  metric: T.oneOf(['default', 'article']),
  errorCode: T.oneOf([null, 404, 500]),
  errorPath: T.oneOfType([T.string, T.instanceOf(null)]),
}

GlobalLayoutContainer.defaultProps = {
  children: <div />,
  noSidebar: false,
  errorCode: null,
  errorPath: null,
  metric: 'default',
}

export default connectStore(GlobalLayoutContainer)
