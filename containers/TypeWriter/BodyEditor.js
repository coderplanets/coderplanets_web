/*
 * Editor based on Draft
 */

import React from 'react'
import PropTypes from 'prop-types'

import { EditorState, ContentState, Modifier } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import PubSub from 'pubsub-js'

import createMentionPlugin, {
  defaultSuggestionsFilter,
} from 'draft-js-mention-plugin'

import toRawString from './exportContent'
import { Wrapper } from './styles/editorStyle'
import { EVENT, makeDebugger } from '../../utils'

const themeClass = {
  mention: 'typewriter-mention',
  mentionSuggestions: 'typewriter-suggestions',
  mentionSuggestionsEntry: 'typewriter-mentionSuggestionsEntry',
  mentionSuggestionsEntryFocused: 'typewriter-mentionSuggestionsEntryFocused',
  mentionSuggestionsEntryAvatar: 'typewriter-mentionSuggestionsEntryAvatar',
  mentionSuggestionsEntryText: 'typewriter-mentionSuggestionsEntryText',
}

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Comments')
/* eslint-enable no-unused-vars */

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
    suggestions: [],
    pub: null,
  }

  componentWillMount() {
    this.loadDraft()
    this.loadUserSuggestions()
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

    this.initPubSub()
  }
  componentWillUnmount() {
    const { pub } = this.state
    PubSub.unsubscribe(pub)
  }

  initPubSub() {
    const pub = PubSub.subscribe(EVENT.DRAFT_INSERT_SNIPPET, (event, data) => {
      this.insertSnippet(data.data)
      console.log('INSERT_FUCK: ', data)
    })
    this.setState({
      pub,
    })
  }

  insertSnippet = data => {
    /*
       const curString = toRawString(this.state.editorState.getCurrentContent())
       const contentState = ContentState.createFromText(
       `${curString}\n\n${data}\n\n`
       )
       const editorState = EditorState.push(this.state.editorState, contentState)

       this.setState({ editorState })
     */

    const { editorState } = this.state
    /* const contentState = ContentState.createFromText('ni ma') */
    const contentState = editorState.getCurrentContent()
    const selection = editorState.getSelection()
    const nextContentState = Modifier.insertText(
      contentState,
      selection,
      `\n${data}\n`
    )

    const nextEditorState = EditorState.push(editorState, nextContentState)
    this.setState({ editorState: nextEditorState })
  }

  onBlur = () => {
    /*
    const selectionState = this.state.editorState.getSelection()
    const { editorState } = this.state
    const fuck = Modifier.splitBlock(
      editorState.getCurrentContent(),
      selectionState,
      'this-is-me'
    )

    const fff = toRawString(fuck)
    console.log('fffff: ', fff.split('\n'))
    */
  }

  onChange = editorState => {
    // const oldString = toRawString(this.state.editorState.getCurrentContent())
    const newString = toRawString(editorState.getCurrentContent())
    // console.log('onChange raw: ', newString)

    // if (oldString === newString) return false
    // console.log('onChange: ', newString)
    this.props.onChange(newString)
    this.setState({
      editorState,
    })
  }

  onSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, this.state.mentions),
    })
  }

  onAddMention = user => {
    // console.log('onAddMention: ', user)
    this.props.onMention(user)
    // get the mention object selected
  }

  /*
     onBlur = () => {
     if (this.props.onBlur) this.props.onBlur()
     }
   */

  focus = () => {
    if (this.editor) {
      this.editor.focus()
    }
  }

  loadUserSuggestions = () => {
    const { mentions } = this.props
    /* debug('loadUserSuggestions --->', mentions) */
    this.setState({
      suggestions: mentions,
      mentions,
    })
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
          onBlur={this.onBlur}
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

MastaniEditor.propTypes = {
  mentions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  body: PropTypes.string,
  onMention: PropTypes.func,
  onChange: PropTypes.func,
}

MastaniEditor.defaultProps = {
  body: '',
  mentions: [],
  onMention: debug,
  onChange: debug,
}

export default MastaniEditor
