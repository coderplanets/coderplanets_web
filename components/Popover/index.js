/*
 *
 * Popover
 *
 */

import React from 'react'
import { Popover } from 'antd'
import PropTypes from 'prop-types'

import { ContentContainer } from './styles'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Popover:index')
/* eslint-enable no-unused-vars */

const renderContent = content => {
  return <ContentContainer>{content}</ContentContainer>
}

class PopoverComponent extends React.Component {
  state = {
    insideVisible: false,
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
  placement: PropTypes.oneOf(['bottomLeft', 'bottom', 'right']),
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
