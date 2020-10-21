import React from 'react'

import { ICON } from '@/config'

import { OpenedIcon, ClosedIcon } from '../../styles/filter_menu/sort_column'

const ToggleIcon = ({ active }) => {
  return (
    <React.Fragment>
      {active ? (
        <OpenedIcon src={`${ICON}/shape/menu-opened.svg`} />
      ) : (
        <ClosedIcon src={`${ICON}/shape/menu-closed.svg`} />
      )}
    </React.Fragment>
  )
}

export default ToggleIcon
