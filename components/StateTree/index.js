import React from 'react'
import dynamic from 'next/dynamic'

import { StateViewerWrapper, StateTreeHeader } from './styles'

const StateTreeWithNoSSR = dynamic(import('./StateTree'), {
  ssr: false,
})

const StateViewer = ({ json }) => {
  return (
    <StateViewerWrapper>
      <StateTreeHeader>
        这里显示的是 Mobx 的 store, &nbsp;&nbsp;Apollo Client 的状态请使用
        Apollo devtools 查看
      </StateTreeHeader>
      <StateTreeWithNoSSR json={json} />
    </StateViewerWrapper>
  )
}

export default StateViewer
