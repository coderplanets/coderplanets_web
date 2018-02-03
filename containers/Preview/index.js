/*
*
* Preview
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'

// import Link from 'next/link'

import { makeDebugger, storeSelector, TYPE } from '../../utils'
import * as logic from './logic'

import ArticleViwer from '../ArticleViwer'
// import TypeWriter from '../TypeWriter'
import AccountViewer from '../AccountViewer'
import StateViwer from './StateViwer'
/* import StateTree from '../../components/StateTree' */

import {
  PreviewOverlay,
  PreviewWrapper,
  PreviewCloser,
  PreviewContent,
  Closer,
  CloserInner,
} from './styles'

const DynamicTypeWriter = dynamic(import('../TypeWriter'))
const debug = makeDebugger('C:Preview')

const CloseBtn = ({ type }) => (
  <PreviewCloser onClick={logic.closePreview}>
    <Closer type={type}>
      <CloserInner />
    </Closer>
  </PreviewCloser>
)

// const Viewer = ({ type, root, themeKeys, curTheme }) => {
// <AccountViewer2 themeKeys={themeKeys} curTheme={curTheme} />

// TODO: post edit viewer
// TODO: account edit viewer
// TODO:  sub viewers
const Viewer = ({ type, root }) => {
  switch (type) {
    case TYPE.PREVIEW_ACCOUNT: {
      return <AccountViewer />
    }
    case TYPE.PREVIEW_POST: {
      return <ArticleViwer />
    }
    case TYPE.PREVIEW_CREATE_POST: {
      return <DynamicTypeWriter onClose={logic.closePreview} />
    }

    default: {
      return <StateViwer json={root.toJSON()} />
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
            <div>
              <Viewer
                type={type}
                root={root}
                themeKeys={themeKeys}
                curTheme={curTheme}
              />
            </div>
          </PreviewContent>
        </PreviewWrapper>
      </div>
    )
  }
}

export default inject(storeSelector('preview'))(observer(PreviewContainer))
