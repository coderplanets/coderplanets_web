/*
 *
 * GlobalLayout
 *
 */

import { FC, Fragment, ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { isMobile } from 'react-device-detect'

import type { TSEO, TMetric } from '@/spec'
import { ANCHOR, SIZE, C11N, BODY_SCROLLER } from '@/constant'
import { pluggedIn } from '@/utils/mobx'

import ThemePalette from '@/containers/layout/ThemePalette'
import Header from '@/widgets/Header'

// import Header from '@/containers/unit/Header'
// import ModeLine from '@/containers/unit/ModeLine'

// import Drawer from '@/containers/tool/Drawer'
// import CustomScroller from '@/widgets/CustomScroller'

import type { TStore } from './store'
import SEO from './SEO'

import { CustomScroller, Sidebar, Footer, ModeLine } from './dynamic'
import { Wrapper, InnerWrapper, BodyWrapper, ContentWrapper } from './styles'
import { useInit, onPageScrollDirhange, childrenWithProps } from './logic'

const Addon = dynamic(() => import('./Addon'), {
  ssr: false,
})

type TProps = {
  globalLayout?: TStore
  children: ReactNode
  seoConfig: TSEO
  noSidebar?: boolean
  noFooter?: boolean

  metric: TMetric
}

const GlobalLayoutContainer: FC<TProps> = ({
  globalLayout: store,
  seoConfig,
  children,
  noSidebar = false,
  noFooter = false,
  metric,
}) => {
  // load debug graph
  useInit(store, { isMobile })

  const { sidebarPin, c11n, curCommunity, accountInfo } = store
  const { bannerLayout } = c11n

  return (
    <ThemePalette>
      <Wrapper>
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
                <Header
                  metric={metric}
                  c11n={c11n}
                  accountInfo={accountInfo}
                  community={curCommunity}
                />
                <BodyWrapper layout={bannerLayout} isMobile={isMobile}>
                  {childrenWithProps(children, { metric })}
                </BodyWrapper>
                {!noFooter && <Footer metric={metric} />}
              </CustomScroller>
            </ContentWrapper>
          </InnerWrapper>
        </Fragment>
        {isMobile && <ModeLine metric={metric} />}
      </Wrapper>
    </ThemePalette>
  )
}

export default pluggedIn(GlobalLayoutContainer) as FC<TProps>
