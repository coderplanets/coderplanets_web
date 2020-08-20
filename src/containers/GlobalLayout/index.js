/*
 *
 * GlobalLayout
 *
 */

import React, { useEffect, useState } from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { TYPE, ROUTE } from '@/constant'
import { connectStore } from '@/utils'

import {
  useNetwork,
  useShortcut,
  useMedia,
  usePlatform,
  useResize,
} from '@/hooks'

import AnalysisService from '@/services/Analysis'
import ThemeWrapper from '@/containers/ThemeWrapper'

import Header from '@/containers/Header'
import Sidebar from '@/containers/Sidebar'
import Preview from '@/containers/Preview'

import { Doraemon, ErrorBox, Footer, ErrorPage } from './dynamic'

import SEO from './SEO'

import {
  Wrapper,
  InnerWrapper,
  ContentWrapper,
  ContentPinWrapper,
  SubCommunitiesExpander,
  ExpanderIcon,
} from './styles'

import {
  useInit,
  openDoraemon,
  queryDoraemon,
  calcInitWidth,
  logBuddha,
} from './logic'

const GlobalLayoutContainer = ({
  globalLayout: store,
  page,
  seoConfig,
  errorCode,
  errorPath,
  children,
  noSidebar,
  metric,
}) => {
  useEffect(() => logBuddha(), [])

  const [innerMinWidth, setInnerMinWidth] = useState('100%')
  const { online } = useNetwork()
  const media = useMedia()
  const platform = usePlatform()

  useInit(store, { online, media, platform })

  useShortcut('Control+P', openDoraemon)
  const { sidebarPin } = store

  /*
   * solve page jump when switch beteen threads
   * 要给 innerWrapper 一个最小宽度，否则在切换不同 Threads
   * 时，由于 loading 效果的不同会导致页面横向跳动
   */
  const innerWrapperRef = React.createRef()

  useEffect(() => {
    if (errorCode === null) {
      setInnerMinWidth(calcInitWidth(innerWrapperRef))
    }
  }, [innerWrapperRef, errorCode])

  useEffect(() => {
    if (errorCode === null) {
      setInnerMinWidth(calcInitWidth(innerWrapperRef))
    }
  }, [innerMinWidth, innerWrapperRef, errorCode])

  useResize(() => setInnerMinWidth('none'))

  return (
    <AnalysisService>
      <ThemeWrapper>
        <Wrapper>
          {errorCode ? (
            <ErrorPage errorCode={errorCode} page={page} target={errorPath} />
          ) : (
            <div>
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
                      !!(page === ROUTE.COMMUNITY || page === ROUTE.DISCOVERY)
                    }
                  >
                    <Header metric={metric} />
                    {children}
                    <Footer />
                  </ContentWrapper>
                </ContentPinWrapper>
              </InnerWrapper>
            </div>
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
