/*
*
* Preview
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { makeDebugger } from '../../utils/functions'
import * as logic from './logic'
import {
  PreviewOverlay,
  PreviewWrapper,
  PreviewCloser,
  PreviewContent,
  PreviewHeader,
  PreviewBody,
  Closer,
  CloserInner,
} from './styles'

const debug = makeDebugger('C:Preview')

const CloseBtn = ({ type }) => (
  <PreviewCloser onClick={logic.closePreview}>
    <Closer type={type}>
      <CloserInner />
    </Closer>
  </PreviewCloser>
)

const storeSelector = ({ store }) => ({
  preview: store.preview,
})

class PreviewContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.preview)
  }

  render() {
    const { visible, type } = this.props.preview
    //     debug('visiblei: ', visible)
    return (
      <div>
        <PreviewOverlay visible={visible} onClick={logic.closePreview} />
        <PreviewWrapper visible={visible} type={type}>
          <CloseBtn type={type} />
          <PreviewContent>
            <PreviewHeader>Preview header</PreviewHeader>
            <PreviewBody>Preview body</PreviewBody>
          </PreviewContent>
        </PreviewWrapper>
      </div>
    )
  }
}

export default inject(storeSelector)(observer(PreviewContainer))
