import React from 'react'
import T from 'prop-types'

import StateTree from './StateTree'
import { StateViewerWrapper, StateTreeHeader } from './styles'

const StateViewer = ({ json }) => (
  <StateViewerWrapper>
    <StateTreeHeader>
      应用状态树 -- 方便调试及 issue 报告， 仅在 beta 版
      中默认显示，后期会作为插件形式供自定义显示。
    </StateTreeHeader>
    <StateTree json={json} />
  </StateViewerWrapper>
)

StateViewer.propTypes = {
  json: T.object.isRequired,
}

StateViewer.defaultProps = {}

export default StateViewer
