/*
 *
 * GlobalLayout
 *
 */

import React, { useEffect } from 'react'

import { ANCHOR } from '@/constant'
import AnalysisService from '@/services/Analysis'
import { useNetwork, useShortcut, usePlatform, useDevice } from '@/hooks'
import { pluggedIn } from '@/utils'

import ThemePalette from '@/containers/layout/ThemePalette'
import Header from '@/containers/unit/Header'
import Sidebar from '@/containers/unit/Sidebar'
import ModeLine from '@/containers/unit/ModeLine'
import Drawer from '@/containers/tool/Drawer'
import CustomScroller from '@/components/CustomScroller'

import { TStore } from './store'
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

type TProps = {
  globalLayout?: TStore
  children: React.ReactNode
  seoConfig: Record<string, unknown>
  errorCode?: 400 | 500 | null
  errorPath?: string | null
  noSidebar?: boolean
  noFooter?: boolean

  metric: string
}

const GlobalLayoutContainer: React.FC<TProps> = ({
  globalLayout: store,
  seoConfig,
  errorCode,
  errorPath,
  children,
  noSidebar = false,
  noFooter = false,
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

export default pluggedIn(GlobalLayoutContainer) as React.FC<TProps>
