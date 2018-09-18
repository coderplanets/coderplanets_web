/*
 *
 * RepoEditor
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import SearchMan from './SearchMan'

import { Wrapper } from './styles'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:RepoEditor')
/* eslint-enable no-unused-vars */

class RepoEditorContainer extends React.Component {
  componentWillMount() {
    const { repoEditor } = this.props
    logic.init(repoEditor)
  }

  render() {
    return (
      <Wrapper>
        <SearchMan />
      </Wrapper>
    )
  }
}

export default inject(storePlug('repoEditor'))(observer(RepoEditorContainer))
