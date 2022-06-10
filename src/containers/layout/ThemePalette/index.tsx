/*
 * make children compoent cound reach the props.theme object
 * because mobx's observer mechanism, we should manually watch the theme
 * otherwhise the render will not be triggled
 */

import { FC, Fragment, ReactNode } from 'react'
// import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import type { TThemeMap } from '@/spec'
import { ANCHOR } from '@/constant'
import { bond } from '@/utils/mobx'

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
      {/* @ts-ignore */}
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
      <Fragment>{children}</Fragment>
      {/* @ts-ignore */}
      <CodeSyxHighlight />
      <ThirdPartyOverWrite />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default bond(ThemeContainer, 'theme') as FC<TProps>

// about meta theme-color
// see: https://stackoverflow.com/questions/26960703/how-to-change-the-color-of-header-bar-and-address-bar-in-newest-chrome-version-o
