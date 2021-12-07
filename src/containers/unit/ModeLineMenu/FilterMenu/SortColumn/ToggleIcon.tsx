import { FC, memo, Fragment } from 'react'

import { ICON } from '@/config'

import { OpenedIcon, ClosedIcon } from '../../styles/filter_menu/sort_column'

type TProps = {
  active: boolean
}

const ToggleIcon: FC<TProps> = ({ active }) => {
  return (
    <Fragment>
      {active ? (
        <OpenedIcon src={`${ICON}/shape/menu-opened.svg`} />
      ) : (
        <ClosedIcon src={`${ICON}/shape/menu-closed.svg`} />
      )}
    </Fragment>
  )
}

export default memo(ToggleIcon)
