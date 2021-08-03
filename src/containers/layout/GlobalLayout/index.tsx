/*
 *
 * GlobalLayout
 *
 */

import { FC, Fragment, ReactNode } from 'react'
import dynamic from 'next/dynamic'

import type { TSEO, TMetric } from '@/spec'
import { ANCHOR, SIZE, C11N, BODY_SCROLLER } from '@/constant'
import { pluggedIn } from '@/utils/mobx'
import usePlatform from '@/hooks/usePlatform'

import ThemePalette from '@/containers/layout/ThemePalette'
import Header from '@/components/Header'

// import Header from '@/containers/unit/Header'
// import ModeLine from '@/containers/unit/ModeLine'

// import Drawer from '@/containers/tool/Drawer'
// import CustomScroller from '@/components/CustomScroller'

import type { TStore } from './store'
import SEO from './SEO'

import { CustomScroller, Sidebar, Footer, ErrorPage, ModeLine } from './dynamic'
import { Wrapper, InnerWrapper, BodyWrapper, ContentWrapper } from './styles'
import { useInit, onPageScrollDirhange, childrenWithProps } from './logic'

const Addon = dynamic(() => import('./Addon'), {
  ssr: false,
})

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
  const { isMobile } = usePlatform()
  // load debug graph
  // useInit(store, { isMobile })

  const { sidebarPin, c11n, curCommunity } = store
  const { bannerLayout } = c11n

  return (
    <ThemePalette>
      <Wrapper>
        {errorCode ? (
          <ErrorPage errorCode={errorCode} metric={metric} target={errorPath} />
        ) : (
          <Fragment>
            <SEO metric={metric} config={seoConfig} />
            <InnerWrapper metric={metric} sidebarPin={sidebarPin}>
              {!noSidebar && bannerLayout !== C11N.HOLY_GRAIL && <Sidebar />}
              <Addon />
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
                  onScrollDirectionChange={onPageScrollDirhange}
                  autoHide
                >
                  <div>
                    <Header
                      metric={metric}
                      c11n={c11n}
                      community={curCommunity}
                    />
                    <BodyWrapper layout={bannerLayout} isMobile={isMobile}>
                      {childrenWithProps(children, { metric })}
                    </BodyWrapper>
                    {!noFooter && <Footer metric={metric} />}
                  </div>
                </CustomScroller>
              </ContentWrapper>
            </InnerWrapper>
          </Fragment>
        )}
        <ModeLine metric={metric} />
      </Wrapper>
    </ThemePalette>
  )
}

export default pluggedIn(GlobalLayoutContainer) as FC<TProps>
