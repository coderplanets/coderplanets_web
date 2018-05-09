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

const PopoverComponent = ({ title, children, content, trigger }) => {
  return (
    <Popover
      content={renderContent(content)}
      title={title}
      trigger={trigger}
      placement="bottom"
    >
      {children}
    </Popover>
  )
}

PopoverComponent.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
  trigger: PropTypes.oneOf(['hover', 'click', 'focus']),
}

PopoverComponent.defaultProps = {
  title: '',
  trigger: 'hover',
}

export default PopoverComponent
