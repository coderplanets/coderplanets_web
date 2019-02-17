/*
 *
 * Popover
 *
 */

import React from 'react'
import { Popover } from 'antd'
import PropTypes from 'prop-types'

import { makeDebugger } from 'utils'
import { ContentContainer } from './styles'

/* eslint-disable-next-line */
const debug = makeDebugger('c:Popover:index')

const renderContent = content => {
  return <ContentContainer>{content}</ContentContainer>
}

class PopoverComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = { insideVisible: false }
  }

  onVisibleChange(visible) {
    const { onVisibleChange } = this.props
    if (onVisibleChange) {
      return onVisibleChange(visible)
    }
    this.setState({ insideVisible: visible })
  }

  render() {
    const { title, children, content, trigger, placement, visible } = this.props
    const { insideVisible } = this.state

    return (
      <Popover
        content={renderContent(content)}
        placement={placement}
        visible={visible || insideVisible}
        title={title}
        onVisibleChange={this.onVisibleChange.bind(this)}
        trigger={trigger}
      >
        {children}
      </Popover>
    )
  }
}

PopoverComponent.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  title: PropTypes.string,
  trigger: PropTypes.oneOf(['hover', 'click', 'focus']),
  placement: PropTypes.oneOf([
    'top',
    'bottomLeft',
    'bottomRight',
    'bottom',
    'right',
  ]),
  onVisibleChange: PropTypes.func,
}

PopoverComponent.defaultProps = {
  title: '',
  trigger: 'hover',
  placement: 'bottom',
  visible: null,
  onVisibleChange: null,
}

export default PopoverComponent
