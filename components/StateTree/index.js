import React from 'react'
import dynamic from 'next/dynamic'

import { StateViewerWrapper, StateTreeHeader } from './styles'

const StateTreeWithNoSSR = dynamic(import('./StateTree'), {
  ssr: false,
})

// 这里显示的是 Mobx 的 store, &nbsp;&nbsp;Apollo Client 的状态请使用
// Apollo devtools 查看

const StateViewer = ({ json }) => (
  <StateViewerWrapper>
    <StateTreeHeader>
      应用状态树 -- 方便调试及 issue 报告， 仅在 beta 版
      中默认显示，后期会作为插件形式供自定义显示, 更多详情。
    </StateTreeHeader>
    <StateTreeWithNoSSR json={json} />
  </StateViewerWrapper>
)

export default StateViewer
