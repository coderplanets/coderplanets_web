/*
 *
 * ExpandIcon
 *
 */

import React, { useState } from 'react'
import T from 'prop-types'

// import { ICON_CMD } from '@config'
import { buildLog, isString } from '@utils'

import Tooltip from '@components/Tooltip'

import { Wrapper, Icon, Text } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ExpandIcon:index')

const ExpandIcon = ({
  icon,
  text,
  content,
  hideOnClick,
  type,
  size,
  hideTextOnInit,
}) => {
  const [active, setActive] = useState(false)

  return (
    <Tooltip
      content={content}
      placement="bottom"
      trigger="click"
      hideOnClick={hideOnClick}
      onHide={() => setActive(false)}
      onShow={() => setActive(true)}
    >
      <Wrapper
        testid="ExpandIcon"
        active={active}
        hideTextOnInit={hideTextOnInit}
      >
        {isString(icon) ? (
          <Icon src={icon} active={active} type={type} size={size} />
        ) : (
          <span>{icon}</span>
        )}
        <Text
          active={active}
          type={type}
          size={size}
          hideTextOnInit={hideTextOnInit}
        >
          {text}
        </Text>
      </Wrapper>
    </Tooltip>
  )
}

ExpandIcon.propTypes = {
  content: T.node.isRequired,
  text: T.string.isRequired,
  icon: T.oneOfType([T.string, T.node]).isRequired,
  hideOnClick: T.oneOf([true, false]),
  type: T.oneOf(['default', 'green']),
  size: T.oneOf(['small', 'medium']),
  hideTextOnInit: T.oneOf([true, false]),
}

ExpandIcon.defaultProps = {
  hideOnClick: false,
  type: 'default',
  size: 'medium',
  hideTextOnInit: true,
}

export default React.memo(ExpandIcon)
