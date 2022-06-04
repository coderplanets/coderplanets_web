import { FC, ReactNode, memo } from 'react'

import type { TTooltipPlacement, TMenuOption } from '@/spec'

import { buildLog } from '@/utils/logger'
import Tooltip from '@/widgets/Tooltip'

import Menu from './Menu'

// import { Wrapper } from '../styles/menu_button'

const log = buildLog('C:MenuButton')

type TProps = {
  children: ReactNode
  options: TMenuOption[]
  extraOptions?: TMenuOption[]
  placement?: TTooltipPlacement
  panelMinWidth?: string
  offset?: [number, number]
  onClick?: (key?: string) => void
}

const MenuButton: FC<TProps> = ({
  children,
  options,
  extraOptions = [],
  offset = [5, 5],
  onClick = log,
  placement = 'top-end',
  panelMinWidth = '110px',
}) => {
  return (
    <Tooltip
      placement={placement}
      trigger="click"
      hideOnClick
      offset={offset}
      content={
        <Menu
          options={options}
          extraOptions={extraOptions}
          onClick={onClick}
          panelMinWidth={panelMinWidth}
        />
      }
      noPadding
    >
      {children}
    </Tooltip>
  )
}

export default memo(MenuButton)
