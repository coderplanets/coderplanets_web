/*
 *
 * GlobalLayout
 *
 */

import React, { useEffect } from 'react'
import T from 'prop-types'

import { ANCHOR, ROUTE } from '@/constant'
import { connectStore } from '@/utils'
import AnalysisService from '@/services/Analysis'

import { useNetwork, useShortcut, useMedia, usePlatform } from '@/hooks'

import ThemePalette from '@/containers/layout/ThemePalette'
import Header from '@/containers/unit/Header'
import Sidebar from '@/containers/unit/Sidebar'
import ModeLine from '@/containers/unit/ModeLine'
import Drawer from '@/containers/tool/Drawer'
import CustomScroller from '@/components/CustomScroller'

import { Doraemon, ErrorBox, Footer, ErrorPage } from './dynamic'

import SEO from './SEO'

import {
  Wrapper,
  InnerWrapper,
  BodyWrapper,
  ContentWrapper,
  ContentPinWrapper,
} from './styles'

import {
  useInit,
  openDoraemon,
  logBuddha,
  bodyScrollDirectionOnChange,
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
  const { online } = useNetwork()
  const media = useMedia()
  const platform = usePlatform()

  // load debug graph
  useEffect(() => logBuddha(), [])

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
      <ThemePalette>
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
                  className={ANCHOR.GLOBAL_BLUR_CLASS}
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
                      onScrollDirectionChange={(direction) =>
                        bodyScrollDirectionOnChange(direction)
                      }
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
                        <Footer metric={metric} />
                      </div>
                    </CustomScroller>
                  </ContentWrapper>
                </ContentPinWrapper>
              </InnerWrapper>
            </React.Fragment>
          )}
          <ModeLine />
        </Wrapper>
      </ThemePalette>
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
