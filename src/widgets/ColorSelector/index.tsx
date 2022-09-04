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
import { Wrapper, DotWrapper, Dot, HookIcon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:ColorSelector:index')

type TProps = {
  activeColor?: TColorName | string
  testid?: string
  children: ReactNode
  onChange?: (color: TColorName) => void
  placement?: TTooltipPlacement
  offset?: [number, number]
}

const ColorSelector: FC<TProps> = ({
  testid = 'color-selector',
  activeColor,
  children,
  onChange = log,
  placement = 'bottom',
  offset = [5, 5],
}) => {
  return (
    <Tooltip
      placement={placement}
      trigger="click"
      offset={offset}
      content={
        <Wrapper testid={testid}>
          {keys(COLORS).map((name) => {
            const $active = name === activeColor || COLORS[name] === activeColor

            return (
              <DotWrapper key={name} onClick={() => onChange(name)}>
                <Dot color={COLORS[name]} $active={$active}>
                  {$active && <HookIcon />}
                </Dot>
              </DotWrapper>
            )
          })}
        </Wrapper>
      }
    >
      {children}
    </Tooltip>
  )
}

export default memo(ColorSelector)
