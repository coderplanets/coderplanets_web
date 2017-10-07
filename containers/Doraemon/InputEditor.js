/*
 *
 * Doraemon:InputEditor
 *
 */

import React from 'react'
import keydown from 'react-keydown'

import { getStartPrefix } from './workers'

// import { makeDebugger } from '../../utils/debug'
import * as logic from './logic'

import {
  EditorBar,
  InputBar,
  AddOn,
  // SearchIcon,
  LoadingIcon,
  // ThemeIcon,
  // MagicIcon,
} from './styles'

import * as SuggestionIcons from './styles/suggestionIcons'

const allIcons = { ...SuggestionIcons }
const defaultIcon = SuggestionIcons.search

// import { theme, magic, search } from './styles/suggestionIcons'
// const debug = makeDebugger('C:Doraemon:InputEditor')

const PrefixIcon = ({ prefix }) => {
  let Icon
  const prefixName = getStartPrefix(prefix)
  if (prefixName === '/') {
    Icon = SuggestionIcons.magic
  } else {
    Icon = allIcons[prefixName] ? allIcons[prefixName] : defaultIcon
  }

  /*
  else if (prefixName === 'theme') {
    Icon = theme
  } else {
    Icon = search
  }
  */
  return <Icon />
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
    logic.navUpSuggestion()
    e.preventDefault()
  }

  @keydown(['ctrl+n'])
  down(e) {
    logic.navDownSuggestion()
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
          {searching ? <LoadingIcon /> : <PrefixIcon prefix={prefix} />}
        </AddOn>
        <InputBar
          spellCheck={false}
          autoCapitalize={false}
          autoCorrect="off"
          autoComplete="off"
          onKeyDown={logic.onKeyPress}
          onBlur={logic.hidePanel}
          onChange={logic.search}
          value={value}
        />
      </EditorBar>
    )
  }
}
