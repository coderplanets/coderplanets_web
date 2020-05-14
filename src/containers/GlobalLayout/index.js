/*
 *
 * GlobalLayout
 *
 */

import React, { useEffect, useState } from 'react'
import T from 'prop-types'

import useNetwork from 'react-use/lib/useNetwork'

import { ICON_CMD } from '@/config'
import { TYPE } from '@/constant'
import { connectStore } from '@/utils'
import { useShortcut, useMedia, usePlatform, useResize } from '@/hooks'

import AnalysisService from '@/services/Analysis'
import ThemeWrapper from '@/containers/ThemeWrapper'
import MultiLanguage from '@/containers/MultiLanguage'

import Sidebar from '@/containers/Sidebar'
import Preview from '@/containers/Preview'
import Doraemon from '@/containers/Doraemon'
import Route from '@/containers/Route'
import Header from '@/containers/Header'
import ErrorBox from '@/containers/ErrorBox'
import Footer from '@/containers/Footer'
import ErrorPage from '@/components/ErrorPage'

import SEO from './SEO'

import {
  Wrapper,
  InnerWrapper,
  ContentWrapper,
  ContentPinWrapper,
  SubCommunitiesExpander,
  ExpanderIcon,
} from './styles'
import { useInit, openDoraemon, queryDoraemon, calcInitWidth } from './logic'

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
  const [innerMinWidth, setInnerMinWidth] = useState('100%')

  const { online } = useNetwork()

  const media = useMedia()
  const platform = usePlatform()

  useInit(globalLayout, { online, media, platform })

  useShortcut('ctrl+p', openDoraemon)
  const { sidebarPin } = globalLayout

  /*
   * solve page jump when switch beteen threads
   * 要给 innerWrapper 一个最小宽度，否则在切换不同 Threads
   * 时，由于 loading 效果的不同会导致页面横向跳动
   */
  const innerWrapperRef = React.createRef()

  useEffect(() => {
    setInnerMinWidth(calcInitWidth(innerWrapperRef))
  }, [innerWrapperRef])

  useEffect(() => {
    setInnerMinWidth(calcInitWidth(innerWrapperRef))
  }, [innerMinWidth, innerWrapperRef])

  useResize(() => setInnerMinWidth('none'))

  return (
    <AnalysisService>
      <ThemeWrapper>
        <Wrapper>
          {errorCode ? (
            <ErrorPage errorCode={errorCode} page={page} target={errorPath} />
          ) : (
            <MultiLanguage>
              <SubCommunitiesExpander onClick={queryDoraemon('/')}>
                <ExpanderIcon src={`${ICON_CMD}/expander_more.svg`} />
              </SubCommunitiesExpander>
              <SEO page={page} config={seoConfig} />
              <InnerWrapper
                sidebarPin={sidebarPin}
                noSidebar={noSidebar}
                ref={innerWrapperRef}
                minWidth={innerMinWidth}
              >
                <Route />
                {!noSidebar && <Sidebar />}
                <Preview />
                <Doraemon />
                <ErrorBox />
                <ContentPinWrapper
                  offsetLeft={sidebarPin}
                  className={TYPE.GLOBAL_BLUR_CLASS}
                >
                  <ContentWrapper
                    offsetLeft={
                      !!(page === 'community' || page === 'communities')
                    }
                  >
                    <Header metric={metric} />
                    {children}
                    <Footer />
                  </ContentWrapper>
                </ContentPinWrapper>
              </InnerWrapper>
            </MultiLanguage>
          )}
        </Wrapper>
      </ThemeWrapper>
    </AnalysisService>
  )
}

GlobalLayoutContainer.propTypes = {
  children: T.node,
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
