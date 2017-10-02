/*
 *
 * UniversePanel:InputEditor
 *
 */

import React from 'react'
import keydown from 'react-keydown'

// import { makeDebugger } from '../../utils/debug'
import * as logic from './logic'

import { EditorBar, InputBar, AddOn, SearchIcon, LoadingIcon } from './styles'

// const debug = makeDebugger('C:UniversePanel:InputEditor')

export default class InputEditor extends React.Component {
  @keydown(['ctrl+g', 'ctrl+c'])
  /* eslint-disable class-methods-use-this */
  hidePanel() {
    //     debug('this bitch? ')
    logic.hidePanel()
  }

  render() {
    // const { searching, value } = this.props
    const { searching } = this.props

    // if you want to use innerRef
    // see https://github.com/styled-components/styled-components/issues/102
    // innerRef={input => (this.doraemonInput = input)}
    return (
      <EditorBar>
        <AddOn>{searching ? <LoadingIcon /> : <SearchIcon />}</AddOn>
        <InputBar
          spellCheck={false}
          autoCapitalize={false}
          autoCorrect="off"
          autoComplete="off"
          onKeyDown={logic.onKeyPress}
          onBlur={logic.hidePanel}
          onChange={logic.search}
        />
      </EditorBar>
    )
  }
}
