/*
 *
 * GlobalLayout
 *
 */

import React, { useEffect } from 'react'
import T from 'prop-types'
import { values } from 'ramda'

import { ANCHOR, METRIC } from '@/constant'
import AnalysisService from '@/services/Analysis'
import { useNetwork, useShortcut, usePlatform, useDevice } from '@/hooks'
import { connectStore } from '@/utils'

import ThemePalette from '@/containers/layout/ThemePalette'
import Header from '@/containers/unit/Header'
import Sidebar from '@/containers/unit/Sidebar'
import ModeLine from '@/containers/unit/ModeLine'
import Drawer from '@/containers/tool/Drawer'
import CustomScroller from '@/components/CustomScroller'

import SEO from './SEO'
import { Doraemon, ErrorBox, Footer, ErrorPage } from './dynamic'

import { Wrapper, InnerWrapper, BodyWrapper, ContentWrapper } from './styles'

import {
  useInit,
  openDoraemon,
  logBuddha,
  bodyScrollDirectionOnChange,
  childrenWithProps,
} from './logic'

const GlobalLayoutContainer = ({
  globalLayout: store,
  seoConfig,
  errorCode,
  errorPath,
  children,
  noSidebar,
  noFooter,
  metric,
}) => {
  const { online } = useNetwork()
  const platform = usePlatform()
  const { isMobile } = useDevice()

  // load debug graph
  useEffect(() => logBuddha(), [])

  useInit(store, { online, platform, isMobile })
  useShortcut('Control+P', openDoraemon)

  const {
    sidebarPin,
    accountInfo: {
      customization: { bannerLayout },
    },
  } = store

  return (
    <AnalysisService>
      <ThemePalette>
        <Wrapper>
          {errorCode ? (
            <ErrorPage
              errorCode={errorCode}
              metric={metric}
              target={errorPath}
            />
          ) : (
            <React.Fragment>
              <SEO metric={metric} config={seoConfig} />

              <InnerWrapper
                metric={metric}
                sidebarPin={sidebarPin}
                noSidebar={noSidebar}
              >
                {!noSidebar && <Sidebar />}
                <Drawer />
                <Doraemon />
                <ErrorBox />
                <ContentWrapper
                  offsetLeft={sidebarPin}
                  className={ANCHOR.GLOBAL_BLUR_CLASS}
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
                      <BodyWrapper layout={bannerLayout} isMobile={isMobile}>
                        {childrenWithProps(children, { metric })}
                      </BodyWrapper>
                      {!noFooter && <Footer metric={metric} />}
                    </div>
                  </CustomScroller>
                </ContentWrapper>
              </InnerWrapper>
            </React.Fragment>
          )}
          <ModeLine metric={metric} />
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
  noFooter: T.bool,
  metric: T.oneOf(values(METRIC)),
  errorCode: T.oneOf([null, 404, 500]),
  errorPath: T.oneOfType([T.string, T.instanceOf(null)]),
}

GlobalLayoutContainer.defaultProps = {
  children: <div />,
  noSidebar: false,
  noFooter: false,
  errorCode: null,
  errorPath: null,
  metric: METRIC.COMMUNITY,
}

export default connectStore(GlobalLayoutContainer)
