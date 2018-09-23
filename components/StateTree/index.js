import React from 'react'
import dynamic from 'next/dynamic'

import Maybe from '../Maybe'
import { StateViewerWrapper, StateTreeHeader } from './styles'

let StateTreeWithNoSSR = null
// NOTE: dynamic import on top is not working
// const StateTreeWithNoSSR = dynamic(import('./StateTree'), { ssr: false })

// example: https://github.com/zeit/next.js/issues/219
export default class StateViewer extends React.Component {
  componentDidMount() {
    StateTreeWithNoSSR = dynamic(import('./StateTree'), { ssr: false })
  }

  render() {
    const { json } = this.props

    return (
      <StateViewerWrapper>
        <StateTreeHeader>
          应用状态树 -- 方便调试及 issue 报告， 仅在 beta 版
          中默认显示，后期会作为插件形式供自定义显示, 更多详情。
        </StateTreeHeader>
        <Maybe test={StateTreeWithNoSSR}>
          <StateTreeWithNoSSR json={json} />
        </Maybe>
      </StateViewerWrapper>
    )
  }
}
