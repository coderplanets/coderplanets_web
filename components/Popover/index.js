/*
 *
 * Popover
 *
 */

import React from 'react'
import { Popover } from 'antd'
import PropTypes from 'prop-types'

import { makeDebugger } from '../../utils'
import { ContentContainer } from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Popover:index')
/* eslint-enable no-unused-vars */

const renderContent = content => {
  return <ContentContainer>{content}</ContentContainer>
}

const PopoverComponent = ({
  title,
  children,
  content,
  trigger,
  placement,
  visible,
  onVisibleChange,
}) => {
  return (
    <Popover
      content={renderContent(content)}
      placement={placement}
      visible={visible}
      title={title}
      onVisibleChange={onVisibleChange}
      trigger={trigger}
    >
      {children}
    </Popover>
  )
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
  visible: false,
  onVisibleChange: debug,
}

export default PopoverComponent
