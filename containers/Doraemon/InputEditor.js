/*
 *
 * Doraemon:InputEditor
 *
 */

import React from 'react'
import keydown from 'react-keydown'

import { ICON_CMD } from '../../config'

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
      return <PrefixSearchIcon src={`${ICON_CMD}/search.svg`} />
    }
    case '/': {
      return <PrefixMagicIcon src={`${ICON_CMD}/magic.svg`} />
    }
    default: {
      return <PrefixSVGIcon src={logic.getPrefixLogo(prefix)} />
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
    // console.log('keydown ctrl+p')
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
            <LoadingIcon src={`${ICON_CMD}/search_loading.svg`} />
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
