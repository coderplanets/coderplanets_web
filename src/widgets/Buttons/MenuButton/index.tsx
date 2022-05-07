import { FC, ReactNode, memo } from 'react'

import { buildLog } from '@/utils/logger'

import type { TTooltipPlacement, TMenuOption } from '@/spec'

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
  onClick?: (key?: string) => void
}

const MenuButton: FC<TProps> = ({
  children,
  options,
  extraOptions = [],
  onClick = log,
  placement = 'top-end',
  panelMinWidth = '110px',
}) => {
  return (
    <Tooltip
      placement={placement}
      trigger="click"
      hideOnClick
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
