/*
 *
 * GlobalLayout
 *
 */

import { FC, ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { isMobile } from 'react-device-detect'

import type { TSEO, TMetric } from '@/spec'
import { SIZE, BODY_SCROLLER } from '@/constant'
import { bond } from '@/utils/mobx'

import ThemePalette from '@/containers/layout/ThemePalette'
import Header from '@/widgets/Header'

// import Header from '@/containers/unit/Header'
// import Footer from '@/containers/unit/Footer'
// import ModeLine from '@/containers/unit/ModeLine'

// import Drawer from '@/containers/tool/Drawer'
// import CustomScroller from '@/widgets/CustomScroller'

import type { TStore } from './store'
import SEO from './SEO'
import Wallpaper from './Wallpaper'

import { CustomScroller, Footer, ModeLine } from './dynamic'

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

  const { accountInfo, sidebarPin, curCommunity, wallpaper, wallpapers } = store

  return (
    <ThemePalette>
      <Addon />
      <Wallpaper wallpaper={wallpaper} wallpapers={wallpapers}>
        <CustomScroller
          instanceKey={BODY_SCROLLER}
          direction="vertical"
          height="100vh"
          barSize={SIZE.MEDIUM}
          showShadow={false}
          onScrollDirectionChange={onPageScrollDirhange}
          autoHide
        >
          <Wrapper>
            <SEO metric={metric} config={seoConfig} />
            <InnerWrapper metric={metric} sidebarPin={sidebarPin}>
              {/* @ts-ignore */}
              <ContentWrapper offsetLeft={sidebarPin}>
                {/* @ts-ignore */}

                <Header
                  metric={metric}
                  accountInfo={accountInfo}
                  community={curCommunity}
                />
                <BodyWrapper isMobile={isMobile}>
                  {childrenWithProps(children, { metric })}
                </BodyWrapper>
                {/* @ts-ignore */}
                {!noFooter && <Footer metric={metric} />}
              </ContentWrapper>
            </InnerWrapper>
            {/* @ts-ignore */}
            {isMobile && <ModeLine metric={metric} />}
          </Wrapper>
        </CustomScroller>
      </Wallpaper>
    </ThemePalette>
  )
}

export default bond(GlobalLayoutContainer, 'globalLayout') as FC<TProps>
