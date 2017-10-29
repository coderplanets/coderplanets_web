/*
*
* Preview
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { makeDebugger, storeSelector } from '../../utils/functions'
import * as logic from './logic'

import ThemeSelector from '../../components/ThemeSelector'

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

class PreviewContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.preview)
  }

  render() {
    const { visible, type, themeKeys, curTheme } = this.props.preview

    return (
      <div>
        <PreviewOverlay visible={visible} onClick={logic.closePreview} />
        <PreviewWrapper visible={visible} type={type}>
          <CloseBtn type={type} />
          <PreviewContent>
            <PreviewHeader>Preview header</PreviewHeader>
            <PreviewBody>
              <h2>Preview body</h2>
              {type === 'account' ? (
                <ThemeSelector
                  themeKeys={themeKeys}
                  curTheme={curTheme}
                  changeTheme={logic.changeTheme}
                />
              ) : (
                <div>post previewer</div>
              )}
            </PreviewBody>
          </PreviewContent>
        </PreviewWrapper>
      </div>
    )
  }
}

export default inject(storeSelector('preview'))(observer(PreviewContainer))
