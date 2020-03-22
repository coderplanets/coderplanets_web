import React, { useCallback } from 'react'
import T from 'prop-types'

import LocalIcon from './LocalIcon'
import { Wrapper, Icon } from './styles/tab_icon'

const TabIcon = ({ item: { localIcon, icon }, clickableRef }) => {
  const IconCmp = localIcon ? (
    <LocalIcon raw={localIcon} />
  ) : (
    <Icon src={icon} />
  )

  const handleClick = useCallback(
    e => {
      e.stopPropagation()
      clickableRef.current.click()
    },
    [clickableRef]
  )

  return <Wrapper onClick={handleClick}>{IconCmp}</Wrapper>
}

TabIcon.propTypes = {
  item: T.shape({
    localIcon: T.string,
    icon: T.string,
  }).isRequired,
  clickableRef: T.shape({ current: T.instanceOf(T.node) }).isRequired,
}

TabIcon.defaultProps = {}

export default TabIcon
