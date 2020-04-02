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

const ExpandIcon = ({ icon, text, content, hideOnClick }) => {
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
      <Wrapper testid="ExpandIcon" active={active}>
        {isString(icon) ? (
          <Icon src={icon} active={active} />
        ) : (
          <span>{icon}</span>
        )}
        <Text active={active}>{text}</Text>
      </Wrapper>
    </Tooltip>
  )
}

ExpandIcon.propTypes = {
  content: T.node,
  text: T.string,
  icon: T.oneOfType([T.string, T.node]).isRequired,
  hideOnClick: T.oneOf([true, false]),
}

ExpandIcon.defaultProps = {
  content: <h3>hello</h3>,
  text: '定时器',
  hideOnClick: false,
}

export default React.memo(ExpandIcon)
