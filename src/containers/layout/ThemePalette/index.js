/*
 * make children compoent cound reach the props.theme object
 * because mobx's observer mechanism, we should manually watch the theme
 * otherwhise the render will not be triggled
 */

import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import NextNprogress from 'nextjs-progressbar'

import { ANCHOR } from '@/constant'
import { connectStore } from '@/utils'
import { usePlatform } from '@/hooks'

// import MarkDownStyle from './MarkDownStyle'
import CodeSyxHighlight from './CodeSyxHighlight'
import ThirdPartyOverWrite from './ThirdPartyOverWrite'
import GlobalStyle from './GlobalStyle'
import RichEditorStyle from './RichEditorStyle'

const ThemeContainer = ({ children, theme: { themeData } }) => {
  const { isMacOS, isMobile } = usePlatform()
  const showCustomScrollbar = !isMacOS || !isMobile

  return (
    <ThemeProvider theme={themeData}>
      <Head>
        <meta name="theme-color" content={themeData.mobileTab} />
      </Head>
      <NextNprogress
        color={themeData.logoText}
        startPosition={0.3}
        stopDelayMs={200}
        option={{
          minimum: 0.1,
          parent: `#${ANCHOR.GLOBAL_HEADER_ID}`,
        }}
      />
      <div>{children}</div>
      <CodeSyxHighlight />
      <ThirdPartyOverWrite />
      <RichEditorStyle />
      <GlobalStyle showCustomScrollbar={showCustomScrollbar} />
    </ThemeProvider>
  )
}

export default connectStore(ThemeContainer)

// about meta theme-color
// see: https://stackoverflow.com/questions/26960703/how-to-change-the-color-of-header-bar-and-address-bar-in-newest-chrome-version-o
