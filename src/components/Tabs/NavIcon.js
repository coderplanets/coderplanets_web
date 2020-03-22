import React from 'react'
import T from 'prop-types'

import LocalIcon from './LocalIcon'
import { Wrapper, Icon } from './styles/nav_icon'

const NavIcon = ({ item: { localIcon, icon } }) => {
  const IconCmp = localIcon ? (
    <LocalIcon raw={localIcon} />
  ) : (
    <Icon src={icon} />
  )

  /* disable svg click event */
  return <Wrapper onClick={e => e.stopPropagation()}>{IconCmp}</Wrapper>
}

NavIcon.propTypes = {
  item: T.shape({
    localIcon: T.string,
    icon: T.string,
  }).isRequired,
}

NavIcon.defaultProps = {}

export default NavIcon
