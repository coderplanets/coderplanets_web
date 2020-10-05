/*
 *
 * GlobalLayout
 *
 */

import React, { useEffect } from 'react'
import T from 'prop-types'

import { TYPE, ROUTE } from '@/constant'
import { connectStore } from '@/utils'

import CustomScroller from '@/components/CustomScroller'

import {
  useNetwork,
  useShortcut,
  useMedia,
  usePlatform,
  // useResize,
} from '@/hooks'

import AnalysisService from '@/services/Analysis'
import ThemeWrapper from '@/containers/ThemeWrapper'

import Header from '@/containers/unit/Header'
import Sidebar from '@/containers/unit/Sidebar'
import Drawer from '@/containers/Drawer'

import { Doraemon, ErrorBox, Footer, ErrorPage } from './dynamic'

import SEO from './SEO'

import {
  Wrapper,
  InnerWrapper,
  BodyWrapper,
  ContentWrapper,
  ContentPinWrapper,
} from './styles'

import { useInit, openDoraemon, logBuddha } from './logic'

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

  const { online } = useNetwork()
  const media = useMedia()
  const platform = usePlatform()

  useInit(store, { online, media, platform })
  useShortcut('Control+P', openDoraemon)

  const {
    sidebarPin,
    accountInfo: {
      customization: { bannerLayout },
    },
  } = store

  /*
   * solve page jump when switch beteen threads
   * 要给 innerWrapper 一个最小宽度，否则在切换不同 Threads
   * 时，由于 loading 效果的不同会导致页面横向跳动
   */
  // useResize(() => setInnerMinWidth('none'))

  return (
    <AnalysisService>
      <ThemeWrapper>
        <Wrapper>
          {errorCode ? (
            <ErrorPage errorCode={errorCode} page={page} target={errorPath} />
          ) : (
            <React.Fragment>
              <SEO page={page} config={seoConfig} />

              <InnerWrapper sidebarPin={sidebarPin} noSidebar={noSidebar}>
                {!noSidebar && <Sidebar />}
                <Drawer />
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
                    <CustomScroller
                      direction="vertical"
                      height="100vh"
                      barSize="medium"
                      showShadow={false}
                      autoHide
                    >
                      <div>
                        <Header metric={metric} />
                        <BodyWrapper
                          layout={bannerLayout}
                          mobile={media.mobile}
                        >
                          {children}
                        </BodyWrapper>
                        <Footer />
                      </div>
                    </CustomScroller>
                  </ContentWrapper>
                </ContentPinWrapper>
              </InnerWrapper>
            </React.Fragment>
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
