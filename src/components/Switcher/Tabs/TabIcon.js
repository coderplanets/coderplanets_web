import React, { useCallback } from 'react'
import T from 'prop-types'

import LocalIcon from './LocalIcon'
import { Wrapper, Icon } from '../styles/tabs/tab_icon'

const TabIcon = ({ item: { localIcon, icon }, clickableRef, active }) => {
  const IconCmp = localIcon ? (
    <LocalIcon raw={localIcon} active={active} />
  ) : (
    <Icon src={icon} active={active ? 1 : 0} />
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
  active: T.bool.isRequired,
}

TabIcon.defaultProps = {}

export default TabIcon
