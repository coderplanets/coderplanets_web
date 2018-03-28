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
    avatar: 'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar7.png',
  },
  {
    name: 'Julian Krispel-Samsel',
    link: 'https://twitter.com/juliandoesstuff',
    avatar: 'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar4.png',
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

  componentWillMount() {
    this.loadDraft()
  }

  componentDidMount() {
    /* DONT use loadDraft in componentDidMount, it will cause strange bug of mentions */
    /* also onCHange empty issue in Draft.js */
    /*
       see: https://stackoverflow.com/questions/35884112/draftjs-how-to-initiate-an-editor-with-content
       import {  ContentState } from 'draft-js'

       const editorState={EditorState.createWithContent(
       ContentState.createFromText('fuck')
       )}
     */
    /* TODO: has to use setTimeout otherwise the mention not work */
    setTimeout(() => {
      this.focus()
    }, 100)
  }

  componentWillUnmount() {
    // console.log('i am leaving')
  }

  onChange = editorState => {
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

  onBlur = () => {
    if (this.props.onBlur) this.props.onBlur()
  }

  focus = () => {
    if (this.editor) {
      this.editor.focus()
    }
  }

  loadDraft = () => {
    const editorState = EditorState.createWithContent(
      ContentState.createFromText(this.props.body)
    )
    // somehow the onCHange behave strange
    // see issue: https://github.com/facebook/draft-js/issues/1198

    //     setTimeout(() => {
    //   this.focus()
    //    }, 150)

    this.setState({
      editorState,
    })
  }

  render() {
    const { MentionSuggestions } = this.mentionPlugin
    const plugins = [this.mentionPlugin]

    return (
      <Wrapper onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          onBlur={this.props.onBlur}
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
