import { FC, ReactNode, useEffect, useState, memo } from 'react'

import type { TSIZE_TSM } from '@/spec'
import { SIZE } from '@/constant'
import { buildLog } from '@/utils/logger'

import {
  Wrapper,
  RedWrapper,
  LoadingMask,
  ChildrenWrapper,
  RealChildren,
  LoadingText,
} from './styles/button'

/* eslint-disable-next-line */
const log = buildLog('c:Buttons:Button')

const clearTimerIfNeed = (timerId: number): void => {
  if (timerId) clearTimeout(timerId)
}

type TProps = {
  children?: ReactNode
  className?: string
  ghost?: boolean
  type?: 'primary' | 'red' | 'ghost'
  size?: TSIZE_TSM
  onClick?: () => void
  loading?: boolean | null
  loadingText?: string
  noBorder?: boolean
  disabled?: boolean
}

const Button: FC<TProps> = ({
  children = 'button',
  ghost = false,
  type = 'primary',
  onClick = log,
  size = SIZE.MEDIUM,
  className = '',
  loading = null,
  loadingText = '发布中',
  noBorder = false,
  disabled = false,
}) => {
  const [loadingWidth, setLoadingWidth] = useState(0) // 0 || 20 || 65 || 90 || 100

  useEffect(() => {
    let timer0
    let timer1
    let timer2
    let timer3

    if (loading) {
      timer0 = setTimeout(() => setLoadingWidth(25), 200)
      timer1 = setTimeout(() => setLoadingWidth(65), 600)
      timer2 = setTimeout(() => setLoadingWidth(90), 1200)
      timer3 = setTimeout(() => setLoadingWidth(100), 1800)
    } else if (loading === false) {
      setLoadingWidth(100)
    } else {
      setLoadingWidth(0)
    }

    return () => {
      if (loading) {
        clearTimerIfNeed(timer0)
        clearTimerIfNeed(timer1)
        clearTimerIfNeed(timer2)
        clearTimerIfNeed(timer3)
      }

      setLoadingWidth(0)
    }
  }, [loading])

  switch (type) {
    case 'red': {
      return (
        <RedWrapper
          ghost={ghost}
          onClick={onClick}
          size={size}
          className={className}
          noBorder={noBorder}
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
          onClick={() => {
            if (!disabled) onClick()
          }}
          size={size}
          className={className}
          noBorder={noBorder}
          disabled={disabled}
        >
          <LoadingMask width={`${loadingWidth}%`} />
          <ChildrenWrapper size={size}>
            <RealChildren $loading={loading}>{children}</RealChildren>
            <LoadingText $loading={loading}>{loadingText}</LoadingText>
          </ChildrenWrapper>
        </Wrapper>
      )
    }
  }
}

export default memo(Button)
