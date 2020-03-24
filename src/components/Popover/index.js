/*
 *
 * Tooltip
 *
 */

import React from 'react'
import { Tooltip } from 'antd'
import T from 'prop-types'

import { buildLog } from '@utils'
import { ContentContainer } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Tooltip:index')

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
      <Tooltip
        content={renderContent(content)}
        placement={placement}
        visible={visible || insideVisible}
        title={title}
        onVisibleChange={this.onVisibleChange.bind(this)}
        trigger={trigger}
      >
        {children}
      </Tooltip>
    )
  }
}

PopoverComponent.propTypes = {
  children: T.node.isRequired,
  content: T.node.isRequired,
  visible: T.bool,
  title: T.string,
  trigger: T.oneOf(['hover', 'click', 'focus']),
  placement: T.oneOf(['top', 'bottomLeft', 'bottomRight', 'bottom', 'right']),
  onVisibleChange: T.func,
}

PopoverComponent.defaultProps = {
  title: '',
  trigger: 'hover',
  placement: 'bottom',
  visible: null,
  onVisibleChange: null,
}

export default PopoverComponent
