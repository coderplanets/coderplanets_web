/*
 * make children compoent cound reach the props.theme object
 * because mobx's observer mechanism, we should manually watch the theme
 * otherwhise the render will not be triggled
 */

import { FC, ReactNode } from 'react'
// import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import type { TThemeMap } from '@/spec'
import { ANCHOR } from '@/constant'
import { pluggedIn } from '@/utils/mobx'

import ThirdPartyOverWrite from './ThirdPartyOverWrite'
import ScrollBarStyle from './ScrollBarStyle'
import GlobalStyle from './GlobalStyle'
import { NextNprogress, CodeSyxHighlight } from './dynamic'

type TProps = {
  children: ReactNode
  theme?: {
    themeData: TThemeMap
  }
}

const ThemeContainer: FC<TProps> = ({ children, theme: { themeData } }) => {
  // see https://css-tricks.com/meta-theme-color-and-trickery/
  // theme seems conflict with manifest
  return (
    <ThemeProvider theme={themeData}>
      {/* <Head>
        <meta
          name="theme-color"
          content={themeData.mobileTab}
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content={themeData.mobileTab}
          media="(prefers-color-scheme: dark)"
        />
      </Head> */}

      <ScrollBarStyle />
      <NextNprogress
        color={themeData.logoText}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        options={{
          minimum: 0.1,
          parent: `#${ANCHOR.GLOBAL_HEADER_ID}`,
        }}
        showOnShallow
      />
      <div>{children}</div>
      <CodeSyxHighlight />
      <ThirdPartyOverWrite />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default pluggedIn(ThemeContainer) as FC<TProps>

// about meta theme-color
// see: https://stackoverflow.com/questions/26960703/how-to-change-the-color-of-header-bar-and-address-bar-in-newest-chrome-version-o
