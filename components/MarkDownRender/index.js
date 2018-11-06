/*
 *
 * MarkDownRender
 *
 */
import React from 'react'
import R from 'ramda'
import PropTypes from 'prop-types'

import Remarkable from 'remarkable'
import remarkableemoj from 'remarkable-emoji'
import mentionsPlugin from 'remarkable-mentions'
import Prism from 'mastani-codehighlight'

import { MENTION_USER_ADDR } from '../../config'
import MarkDownStyle from '../../containers/ThemeWrapper/MarkDownStyle'
import { PreviewerContainer } from './styles'

import { makeDebugger } from '../../utils'

const md = new Remarkable('full', {
  html: true,
  breaks: false,
})
md.use(mentionsPlugin({ url: MENTION_USER_ADDR }))
md.use(remarkableemoj)

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:MarkDownRender:index')
/* eslint-enable no-unused-vars */

class MarkDownRender extends React.Component {
  state = {
    body: '',
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

    return (
      <PreviewerContainer>
        <MarkDownStyle>
          <div className="markdown-body">
            {/* eslint-disable react/no-danger */}
            <div
              id="typewriter-preview-container"
              dangerouslySetInnerHTML={{
                __html: md.render(safeBody),
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
