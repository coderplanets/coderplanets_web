/*
 *
 * MarkDownRender
 *
 */
import React from 'react'
import R from 'ramda'
import T from 'prop-types'

import Remarkable from 'remarkable'
import emojiPlugin from 'remarkable-emoji'
import mentionsPlugin from 'remarkable-mentions'
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
  linkTarget: '_blank',
})

md.use(mentionsPlugin({ url: MENTION_USER_ADDR }))
md.use(emojiPlugin)

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
    const { body, contentDomId } = this.props
    /*
       NOTE: the '---' in normal markdown will break the render process
       this is the most mother fucking disgusting bug i ever seen
     */
    const safeBody = R.replace(/---(\r\n|\r|\n)/g, '----', body || '')
    const html = md.render(safeBody)

    return (
      <PreviewerContainer>
        <MarkDownStyle>
          <div className="markdown-body">
            {/* eslint-disable react/no-danger */}
            <div
              id={contentDomId}
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
  body: T.string,
  contentDomId: T.string,
}

MarkDownRender.defaultProps = {
  body: '',
  contentDomId: 'markdown-content-dom-id',
}

export default MarkDownRender
