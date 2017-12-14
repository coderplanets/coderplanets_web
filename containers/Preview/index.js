/*
*
* Preview
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'

// import Link from 'next/link'

import { makeDebugger, storeSelector } from '../../utils/functions'
import * as logic from './logic'

import ThemeSelector from '../../components/ThemeSelector'
/* import StateTree from '../../components/StateTree' */

import {
  TheTitle,
  PreviewOverlay,
  PreviewWrapper,
  PreviewCloser,
  PreviewContent,
  PreviewHeader,
  PreviewBody,
  StateTreeHeader,
  Closer,
  CloserInner,
} from './styles'

const StateTreeWithNoSSR = dynamic(import('../../components/StateTree'), {
  ssr: false,
})

const debug = makeDebugger('C:Preview')

const CloseBtn = ({ type }) => (
  <PreviewCloser onClick={logic.closePreview}>
    <Closer type={type}>
      <CloserInner />
    </Closer>
  </PreviewCloser>
)

const AccountViewer = ({ themeKeys, curTheme }) => {
  return (
    <div>
      <TheTitle>
        <span>主题</span>
      </TheTitle>

      <ThemeSelector
        themeKeys={themeKeys}
        curTheme={curTheme}
        changeTheme={logic.changeTheme}
      />
    </div>
  )
}

const Viewer = ({ type, root, themeKeys, curTheme }) => {
  switch (type) {
    case 'account': {
      return <AccountViewer themeKeys={themeKeys} curTheme={curTheme} />
    }
    case 'post': {
      return (
        <div>
          <PreviewHeader>Preview header</PreviewHeader>post
        </div>
      )
    }
    default: {
      return (
        <div>
          <StateTreeHeader>
            这里显示的是 Mobx 的 store, &nbsp;&nbsp;Apollo Client 的状态请使用
            Apollo devtools 查看
          </StateTreeHeader>
          <StateTreeWithNoSSR json={root.toJSON()} />
        </div>
      )
    }
  }
}

class PreviewContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.preview)
  }

  render() {
    const { visible, type, themeKeys, curTheme, root } = this.props.preview

    /* debug('this.props.preview: ', this.props.preview.root.toJSON()) */

    return (
      <div>
        <PreviewOverlay visible={visible} onClick={logic.closePreview} />
        <PreviewWrapper visible={visible} type={type}>
          <CloseBtn type={type} />
          <PreviewContent>
            <Viewer
              type={type}
              root={root}
              themeKeys={themeKeys}
              curTheme={curTheme}
            />
            <PreviewBody>
              <h2>Preview body</h2>
            </PreviewBody>
          </PreviewContent>
        </PreviewWrapper>
      </div>
    )
  }
}

export default inject(storeSelector('preview'))(observer(PreviewContainer))
