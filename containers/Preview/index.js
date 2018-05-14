/*
 *
 * Preview
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'

// import Link from 'next/link'

import { makeDebugger, storePlug, TYPE } from '../../utils'
import * as logic from './logic'

// TODO: move it to component
import { StateTree } from '../../components/'
import TypeWriterLoading from '../../components/LoadingEffects/TypeWriterLoading'
import { ArticleViwer, AccountViewer, AccountEditor } from '../../containers'

import {
  PreviewOverlay,
  PreviewWrapper,
  PreviewCloser,
  PreviewContent,
  Closer,
  CloserInner,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Preview')
/* eslint-enable no-unused-vars */

const DynamicTypeWriter = dynamic(import('../TypeWriter'), {
  /* eslint-disable */
  loading: () => <TypeWriterLoading />,
  /* eslint-enable */
})

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
const Viewer = ({ type, root }) => {
  switch (type) {
    case TYPE.PREVIEW_ACCOUNT_VIEW: {
      return <AccountViewer />
    }
    case TYPE.PREVIEW_ACCOUNT_EDIT: {
      return <AccountEditor />
    }
    case TYPE.POST_PREVIEW_VIEW: {
      return <ArticleViwer />
    }
    case TYPE.PREVIEW_CREATE_POST: {
      return <DynamicTypeWriter onClose={logic.closePreview} />
    }

    default: {
      return <StateTree json={root.toJSON()} />
    }
  }
}

class PreviewContainer extends React.Component {
  componentWillMount() {
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

export default inject(storePlug('preview'))(observer(PreviewContainer))
