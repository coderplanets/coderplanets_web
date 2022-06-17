import { FC, ReactNode, memo } from 'react'

import type { TSizeTSM } from '@/spec'
import { SIZE } from '@/constant'
import { buildLog } from '@/utils/logger'

import { LavaLampLoading } from '@/widgets/Loading'
import { Wrapper, RedWrapper, ChildrenWrapper } from './styles/button'

/* eslint-disable-next-line */
const log = buildLog('c:Buttons:Button')

type TProps = {
  children?: ReactNode
  className?: string
  ghost?: boolean
  type?: 'primary' | 'red' | 'ghost'
  space?: number | null
  size?: TSizeTSM
  onClick?: () => void
  loading?: boolean
  noBorder?: boolean
  disabled?: boolean
}

const Button: FC<TProps> = ({
  children = 'button',
  ghost = false,
  type = 'primary',
  onClick = log,
  space = null,
  size = SIZE.MEDIUM,
  className = '',
  loading = false,
  noBorder = false,
  disabled = false,
}) => {
  if (loading) return <LavaLampLoading size="small" />

  switch (type) {
    case 'red': {
      return (
        <RedWrapper
          ghost={ghost}
          onClick={onClick}
          size={size}
          className={className}
          noBorder={noBorder}
          space={space}
          disabled={disabled}
        >
          {children}
        </RedWrapper>
      )
    }
    default: {
      return (
        <Wrapper
          ghost={ghost}
          onClick={() => !disabled && onClick()}
          size={size}
          className={className}
          space={space}
          noBorder={noBorder}
          disabled={disabled}
        >
          <ChildrenWrapper size={size} ghost={ghost} noBorder={noBorder}>
            {children}
          </ChildrenWrapper>
        </Wrapper>
      )
    }
  }
}

export default memo(Button)
