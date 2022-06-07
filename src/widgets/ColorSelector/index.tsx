/*
 *
 * ColorSelector
 *
 */

import { FC, memo, ReactNode } from 'react'
import { keys } from 'ramda'

import type { TColorName, TTooltipPlacement } from '@/spec'
import { buildLog } from '@/utils/logger'
import { COLORS } from '@/constant'

import Tooltip from '@/widgets/Tooltip'
import { Panel, DotWrapper, Dot, HookIcon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ColorSelector:index')

type TProps = {
  activeColor?: TColorName
  testid?: string
  children: ReactNode
  onChange: (color: TColorName) => void
  placement?: TTooltipPlacement
}

const ColorSelector: FC<TProps> = ({
  activeColor,
  testid = 'color-selector',
  children,
  onChange,
  placement = 'bottom',
}) => {
  return (
    <Tooltip
      placement={placement}
      trigger="click"
      hideOnClick={false}
      content={
        <Panel>
          {keys(COLORS).map((name) => (
            <DotWrapper key={name} onClick={() => onChange(name)}>
              <Dot color={COLORS[name]} $active={name === activeColor}>
                {name === activeColor && <HookIcon />}
              </Dot>
            </DotWrapper>
          ))}
        </Panel>
      }
    >
      {children}
    </Tooltip>
  )
}

export default memo(ColorSelector)
