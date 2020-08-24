/*
 *
 * CrashErrorHint
 *
 */

import React, { useEffect, useState } from 'react'
import T from 'prop-types'
import { contains, keys } from 'ramda'

import dynamic from 'next/dynamic'

import { DEFAULT_THEME } from '@/config'
import { TYPE } from '@/constant'
import { buildLog, BStore, themeSkins } from '@/utils'

import EXECUTES from './executes'

import { Wrapper, Desc, UL, Li, Action, Footer } from './styles'

export const DynamicHeader = dynamic(() => import('./Header'), {
  /* eslint-disable react/display-name */
  loading: () => <div />,
  ssr: false,
})

/* eslint-disable-next-line */
const log = buildLog('c:CrashErrorHint:index')

/**
 * NOTE:  the default theme system is not valid when this Component rendered
 * so to theme this component we should get the current theme name in localStorage
 * then pass the values to the styles
 *
 */
const CrashErrorHint = ({ onReport }) => {
  const [themeName, setThemeName] = useState(DEFAULT_THEME)
  const [executeIndex, setExecuteIndex] = useState(0)

  useEffect(() => {
    // init theme settings
    const cusThemeName = BStore.get(TYPE.CUR_THEME)
    if (cusThemeName && contains(cusThemeName, keys(themeSkins))) {
      setThemeName(cusThemeName)
    }

    // init timer
    const timer = setTimeout(() => setExecuteIndex(executeIndex + 1), 3000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setExecuteIndex(
        executeIndex >= EXECUTES.length - 1 ? 0 : executeIndex + 1,
      )
    }, 3000)

    return () => clearInterval(timer)
  }, [executeIndex])

  return (
    <Wrapper testid="crashErrorHint" t={themeName}>
      <div />
      <div>
        <DynamicHeader index={executeIndex} themeName={themeName} />
        <Desc t={themeName}>
          本次请求因为未知原因崩溃，请尝试重新刷新页面或通过以下渠道给我们反馈：
        </Desc>
        <UL t={themeName}>
          <Li>
            重新<Action t={themeName}>刷新页面</Action>
          </Li>
          <Li onClick={onReport}>
            在线
            <Action t={themeName} noUnderline>
              报告错误
            </Action>
          </Li>
          <Li>
            在 <Action t={themeName}>Github</Action>上提交 issue
          </Li>
        </UL>
      </div>
      <Footer t={themeName}>
        sorry to see this, please try <Action t={themeName}>reload page</Action>
        , <Action t={themeName}>report error</Action> or report issue on{' '}
        <Action t={themeName}>github</Action>
      </Footer>
    </Wrapper>
  )
}

CrashErrorHint.propTypes = {
  onReport: T.func.isRequired,
}

CrashErrorHint.defaultProps = {}

export default React.memo(CrashErrorHint)
