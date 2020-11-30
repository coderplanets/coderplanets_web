import React, { useEffect, useState } from 'react'
import T from 'prop-types'

import { SIZE } from '@/constant'

import {
  Wrapper,
  RedWrapper,
  LoadingMask,
  ChildrenWrapper,
  RealChildren,
  LoadingText,
} from './styles/button'

const clearTimerIfNeed = (timerId) => {
  if (timerId) clearTimeout(timerId)
}

const Button = ({
  children,
  ghost,
  type,
  onClick,
  size,
  className,
  loading,
  loadingText,
  noBorder,
  disabled,
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
            <RealChildren loading={loading}>{children}</RealChildren>
            <LoadingText loading={loading}>{loadingText}</LoadingText>
          </ChildrenWrapper>
        </Wrapper>
      )
    }
  }
}

Button.propTypes = {
  children: T.oneOfType([T.string, T.node]),
  ghost: T.bool,
  type: T.oneOf(['primary', 'red', 'ghost']),
  size: T.oneOf([SIZE.TINY, SIZE.SMALL, SIZE.MEDIUM]),
  onClick: T.func,
  className: T.string,
  loading: T.oneOfType([T.bool, T.instanceOf(null)]),
  loadingText: T.string,
  noBorder: T.bool,
  disabled: T.bool,
}

Button.defaultProps = {
  children: 'Button',
  ghost: false,
  type: 'primary',
  size: SIZE.MEDIUM,
  // eslint-disable-next-line no-console
  onClick: console.log,
  className: '',
  loading: null,
  loadingText: '发布中..',
  noBorder: false,
  disabled: false,
}

export default React.memo(Button)
