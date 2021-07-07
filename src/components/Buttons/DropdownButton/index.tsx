import { FC, ReactNode, memo } from 'react'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'

import type { TTooltipPlacement } from '@/spec'

import Tooltip from '@/components/Tooltip'
import OptionPanel from './OptionPanel'

import {
  Wrapper,
  ButtonWrapper,
  DropdownButtonWrapper,
  Divider,
  MoreIcon,
} from '../styles/dropdown_button'

const log = buildLog('C:DropdownButton')

export type TOption = {
  title: string
  key: string
  desc?: string
  icon?: string
  link?: string
}

type TProps = {
  children: ReactNode
  options: TOption[]
  placement?: TTooltipPlacement
  panelMinWidth?: string
  onClick: (key?: string) => void
}

// <UpIcon src={`${ICON_CMD}/works/vote_up.svg`} />
const DropdownButton: FC<TProps> = ({
  children,
  options,
  onClick = log,
  placement = 'bottom',
  panelMinWidth = '100%',
}) => {
  return (
    <Wrapper>
      <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
      <Tooltip
        placement={placement}
        trigger="click"
        hideOnClick={false}
        content={
          <OptionPanel
            options={options}
            onClick={onClick}
            panelMinWidth={panelMinWidth}
          />
        }
        noPadding
      >
        <DropdownButtonWrapper>
          <MoreIcon src={`${ICON_CMD}/works/vote_up.svg`} onClick={onClick} />
        </DropdownButtonWrapper>
      </Tooltip>
      <Divider />
    </Wrapper>
  )
}

export default memo(DropdownButton)
