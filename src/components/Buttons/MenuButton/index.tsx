import { FC, ReactNode, memo } from 'react'

import { buildLog } from '@/utils/logger'

import type { TTooltipPlacement } from '@/spec'

import Tooltip from '@/components/Tooltip'

import Menu from './Menu'

// import { Wrapper } from '../styles/menu_button'

const log = buildLog('C:MenuButton')

export type TOption = {
  title: string
  key: string
  icon?: string
  link?: string
}

type TProps = {
  children: ReactNode
  options: TOption[]
  extraOptions?: TOption[]
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
  panelMinWidth = '100px',
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
