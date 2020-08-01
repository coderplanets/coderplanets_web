import React, { useEffect, useState } from 'react'
import T from 'prop-types'

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
        >
          {children}
        </RedWrapper>
      )
    }
    default: {
      return (
        <Wrapper
          ghost={ghost}
          onClick={onClick}
          size={size}
          className={className}
        >
          <LoadingMask width={`${loadingWidth}%`} />
          <ChildrenWrapper>
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
  size: T.oneOf(['default', 'small']),
  onClick: T.func,
  className: T.string,
  loading: T.oneOfType([T.bool, T.instanceOf(null)]),
  loadingText: T.string,
}

Button.defaultProps = {
  children: 'Button',
  ghost: false,
  type: 'primary',
  size: 'default',
  // eslint-disable-next-line no-console
  onClick: console.log,
  className: '',
  loading: null,
  loadingText: '发布中..',
}

export default React.memo(Button)
