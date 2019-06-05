/*
 *
 * MarkDownRender
 * add following css to _document
   see: https://github.com/bradhowes/remarkable-katex/issues/1
   <link
   rel="stylesheet"
   href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css"
   crossOrigin="anonymous"
   />
 *
 */
import React from 'react'
import R from 'ramda'
import PropTypes from 'prop-types'

import Remarkable from 'remarkable'
import emojiPlugin from 'remarkable-emoji'
import mentionsPlugin from 'remarkable-mentions'
import latexPlugin from 'remarkable-katex'
import Prism from 'mastani-codehighlight'

import MarkDownStyle from '@containers/ThemeWrapper/MarkDownStyle'
import { MENTION_USER_ADDR } from '@config'
import { buildLog } from '@utils'
import { PreviewerContainer } from './styles'

// const latexPlugin = require('remarkable-katex')

// const md = new Remarkable()
const md = new Remarkable('full', {
  html: true,
  breaks: false,
})

md.use(mentionsPlugin({ url: MENTION_USER_ADDR }))
md.use(emojiPlugin)
md.use(latexPlugin)

const mdWithNoMath = new Remarkable()
mdWithNoMath.use(mentionsPlugin({ url: MENTION_USER_ADDR }))
mdWithNoMath.use(emojiPlugin)

/* eslint-disable-next-line */
const log = buildLog('c:MarkDownRender:index')

class MarkDownRender extends React.Component {
  constructor(props) {
    super(props)

    this.state = { body: '' }
  }

  componentDidMount() {
    Prism.highlightAll()
    setTimeout(() => Prism.highlightAll(), 1000)
  }

  componentWillReceiveProps(nextProps) {
    const { body } = this.state

    if (nextProps.body !== body) {
      this.setState({ body: nextProps.body })
      setTimeout(() => Prism.highlightAll(), 1000)
    }
  }

  render() {
    const { body } = this.props
    /*
       NOTE: the '---' in normal markdown will break the render process
       this is the most mother fucking disgusting bug i ever seen
     */
    const safeBody = R.replace(/---(\r\n|\r|\n)/g, '----', body || '')
    let html = ''
    try {
      html = md.render(safeBody)
    } catch (e) {
      // usually caused by math parse
      html = mdWithNoMath.render(safeBody)
    }

    return (
      <PreviewerContainer>
        <MarkDownStyle>
          <div className="markdown-body">
            {/* eslint-disable react/no-danger */}
            <div
              id="markdown-content-dom-id"
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
            {/* eslint-enable react/no-danger */}
          </div>
        </MarkDownStyle>
      </PreviewerContainer>
    )
  }
}

// TODO default props check

MarkDownRender.propTypes = {
  // https://www.npmjs.com/package/prop-types
  body: PropTypes.string,
}

MarkDownRender.defaultProps = {
  body: '',
}

export default MarkDownRender
