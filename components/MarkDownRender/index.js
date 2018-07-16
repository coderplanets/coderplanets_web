/*
 *
 * MarkDownRender
 *
 */
import React from 'react'
import PropTypes from 'prop-types'

import Remarkable from 'remarkable'
import remarkableemoj from 'remarkable-emoji'
import mentionsPlugin from 'remarkable-mentions'
import Prism from 'mastani-codehighlight'

import { MENTION_USER_ADDR } from '../../config'
import { makeDebugger } from '../../utils'
import MarkDownStyle from '../../containers/ThemeWrapper/MarkDownStyle'

import { PreviewerContainer } from './styles'

const md = new Remarkable()
md.use(mentionsPlugin({ url: MENTION_USER_ADDR }))
md.use(remarkableemoj)

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:MarkDownRender:index')
/* eslint-enable no-unused-vars */

// TODO: move it to components
class MarkDownRender extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    const { body } = this.props

    return (
      <PreviewerContainer>
        <MarkDownStyle>
          <div className="markdown-body">
            <div
              id="typewriter-preview-container"
              dangerouslySetInnerHTML={{
                __html: md.render(body),
              }}
            />
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
