/*
*
* Preview
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'

// import Link from 'next/link'

import { makeDebugger, storeSelector } from '../../utils'
import * as logic from './logic'

import ThemeSelector from '../../components/ThemeSelector'
import PostViewer from './PostViewer'
/* import StateTree from '../../components/StateTree' */

import {
  TheTitle,
  PreviewOverlay,
  PreviewWrapper,
  PreviewCloser,
  PreviewContent,
  //  PreviewBody,
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
      <h3>mydearxym 登录信息</h3>
      <h3>个人介绍</h3>
      <h3>订阅的社区</h3>
      <h3>我的收藏</h3>
      <h3>我的帖子</h3>
      <h3>我的关注</h3>
      <h3>关注我的人</h3>
      <h3>主题切换</h3>
      <h3>最近七天日历活动表</h3>

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
      return <PostViewer />
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

    /*

    <PreviewBody>
      <h2>Preview body</h2>
    </PreviewBody>
     */

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
          </PreviewContent>
        </PreviewWrapper>
      </div>
    )
  }
}

export default inject(storeSelector('preview'))(observer(PreviewContainer))
