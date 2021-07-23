/*
 *
 * GlobalLayout
 *
 */

import React, { FC, ReactNode, useEffect } from 'react'

import type { TSEO, TMetric } from '@/spec'
import { ANCHOR, SIZE, C11N, BODY_SCROLLER } from '@/constant'
import AnalysisService from '@/services/Analysis'
import { useNetwork, useShortcut, usePlatform, useDevice } from '@/hooks'
import { pluggedIn } from '@/utils'

import ThemePalette from '@/containers/layout/ThemePalette'
import Header from '@/containers/unit/Header'
import Sidebar from '@/containers/unit/Sidebar'
import ModeLine from '@/containers/unit/ModeLine'
import Drawer from '@/containers/tool/Drawer'

import CustomScroller from '@/components/CustomScroller'

import type { TStore } from './store'
import SEO from './SEO'

import {
  AbuseReport,
  Doraemon,
  ErrorBox,
  Footer,
  ErrorPage,
  Share,
} from './dynamic'

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
  children: ReactNode
  seoConfig: TSEO
  errorCode?: number // 400 | 500 | 404
  errorPath?: string | null
  noSidebar?: boolean
  noFooter?: boolean

  metric: TMetric
}

const GlobalLayoutContainer: FC<TProps> = ({
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
                // noSidebar={noSidebar}
              >
                {!noSidebar && bannerLayout !== C11N.HOLY_GRAIL && <Sidebar />}
                <AbuseReport />
                <Drawer />
                <Share />
                <Doraemon />
                <ErrorBox />
                <ContentWrapper
                  offsetLeft={sidebarPin}
                  className={ANCHOR.GLOBAL_BLUR_CLASS}
                >
                  <CustomScroller
                    instanceKey={BODY_SCROLLER}
                    direction="vertical"
                    height="100vh"
                    barSize={SIZE.MEDIUM}
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

export default pluggedIn(GlobalLayoutContainer) as FC<TProps>
