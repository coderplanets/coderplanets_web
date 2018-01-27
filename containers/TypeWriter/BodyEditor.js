/*
 * Editor based on Draft
*/

import React from 'react'

import { EditorState, ContentState } from 'draft-js'
import Editor from 'draft-js-plugins-editor'

import createMentionPlugin, {
  defaultSuggestionsFilter,
} from 'draft-js-mention-plugin'

import toRawString from './exportContent'
import { Wrapper } from './styles/editorStyle'

const themeClass = {
  mention: 'typewriter-mention',
  mentionSuggestions: 'typewriter-suggestions',
  mentionSuggestionsEntry: 'typewriter-mentionSuggestionsEntry',
  mentionSuggestionsEntryFocused: 'typewriter-mentionSuggestionsEntryFocused',
  mentionSuggestionsEntryAvatar: 'typewriter-mentionSuggestionsEntryAvatar',
  mentionSuggestionsEntryText: 'typewriter-mentionSuggestionsEntryText',
}

const mentions = [
  {
    name: 'Matthew Russell',
    link: 'https://twitter.com/mrussell247',
    avatar:
      'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
  },
  {
    name: 'Julian Krispel-Samsel',
    link: 'https://twitter.com/juliandoesstuff',
    avatar:
      'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
  },
]

class MastaniEditor extends React.Component {
  constructor(props) {
    super(props)
    this.mentionPlugin = createMentionPlugin({
      theme: themeClass,
      mentionPrefix: '@',
    })
  }

  state = {
    editorState: EditorState.createEmpty(),
    suggestions: mentions,
  }

  componentDidMount() {
    /*
       see: https://stackoverflow.com/questions/35884112/draftjs-how-to-initiate-an-editor-with-content
       import {  ContentState } from 'draft-js'

       const editorState={EditorState.createWithContent(
       ContentState.createFromText('fuck')
       )}
     */
    this.loadDraft()
  }

  onChange = editorState => {
    /*
    console.log(
      'editorState raw: ',
      toRawString(editorState.getCurrentContent())
    )
    */

    this.props.onChange(toRawString(editorState.getCurrentContent()))
    this.setState({
      editorState,
    })
  }

  onSearchChange = ({ value }) => {
    // console.log('on onSearchChange: ', value)
    this.setState({
      suggestions: defaultSuggestionsFilter(value, mentions),
    })
  }

  onAddMention = () => {
    // console.log('onAddMention: ')
    // get the mention object selected
  }

  loadDraft = () => {
    const editorState = EditorState.createWithContent(
      ContentState.createFromText(this.props.bodyContent)
    )
    // console.log('loadDraft: ', this.props.bodyContent)
    // somehow the onCHange behave strange
    // see issue: https://github.com/facebook/draft-js/issues/1198
    setTimeout(() => {
      this.focus()
      // this.editor.focusAtEnd()
    }, 100)
    this.setState({
      editorState,
    })
  }

  focus = () => {
    this.editor.focus()
  }

  render() {
    const { MentionSuggestions } = this.mentionPlugin
    const plugins = [this.mentionPlugin]

    return (
      <Wrapper onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={element => {
            this.editor = element
          }}
        />
        <MentionSuggestions
          onSearchChange={this.onSearchChange}
          suggestions={this.state.suggestions}
          onAddMention={this.onAddMention}
        />
      </Wrapper>
    )
  }
}

export default MastaniEditor
