/*
 *
 * Doraemon:InputEditor
 *
 */

import React from 'react'
import keydown from 'react-keydown'

import { getSVGIconPath } from '../../utils/functions'
import * as logic from './logic'

import {
  EditorBar,
  InputBar,
  AddOn,
  LoadingIcon,
  PrefixSVGIcon,
  PrefixSearchIcon,
  PrefixMagicIcon,
} from './styles'

// const debug = makeDebugger('C:Doraemon:InputEditor')

const PrefixIcon = ({ prefix }) => {
  switch (prefix) {
    case '': {
      return <PrefixSearchIcon path={getSVGIconPath('search')} />
    }
    case '/': {
      return <PrefixMagicIcon path={getSVGIconPath('magic')} />
    }
    default: {
      return <PrefixSVGIcon path={getSVGIconPath(prefix)} />
    }
  }
}

export default class InputEditor extends React.Component {
  /* eslint-disable class-methods-use-this */
  @keydown(['ctrl+g', 'ctrl+c'])
  hidePanel() {
    //     debug('this bitch? ')
    logic.hidePanel()
  }

  // Prevent default behavior in text input while pressing arrow up
  // https://stackoverflow.com/questions/1080532/prevent-default-behavior-in-text-input-while-pressing-arrow-up
  @keydown(['ctrl+p'])
  up(e) {
    logic.navSuggestion('up')
    e.preventDefault()
  }

  @keydown(['ctrl+n'])
  down(e) {
    logic.navSuggestion('down')
    e.preventDefault()
  }

  /* eslint-enable class-methods-use-this */

  render() {
    const { searching, value, prefix } = this.props

    // if you want to use innerRef
    // see https://github.com/styled-components/styled-components/issues/102
    // innerRef={input => (this.doraemonInput = input)}
    return (
      <EditorBar>
        <AddOn>
          {searching ? (
            <LoadingIcon path={getSVGIconPath('search_loading')} />
          ) : (
            <PrefixIcon prefix={prefix} />
          )}
        </AddOn>
        <InputBar
          id="doraemonInputbar"
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          onKeyDown={logic.handleShortCuts}
          onBlur={logic.hidePanel}
          onChange={logic.inputOnChange}
          value={value}
        />
      </EditorBar>
    )
  }
}
