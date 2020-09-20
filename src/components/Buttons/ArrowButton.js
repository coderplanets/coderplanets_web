/*
 *
 * ArrowButtons
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { buildLog } from '@/utils'

import { Wrapper, Text, LeftIcon, RightIcon } from './styles/arrow_button'

/* eslint-disable-next-line */
const log = buildLog('c:Buttons:index')

const SIZE_MAP = {
  tiny: {
    text: '12px',
    icon: '12px',
  },
  small: {
    text: '14px',
    icon: '14px',
  },
  medium: {
    text: '16px',
    icon: '16px',
  },
  large: {
    text: '18px',
    icon: '18px',
  },
}

const ArrowButton = ({
  children,
  onClick,
  size,
  direction,
  dimWhenIdle,
  arrowStyle,
}) => {
  const iconSrc =
    arrowStyle === 'default' ? `${ICON}/arrow.svg` : `${ICON}/arrow-simple.svg`

  return (
    <Wrapper onClick={onClick} dimWhenIdle={dimWhenIdle}>
      {direction === 'left' ? (
        <>
          <LeftIcon
            arrowStyle={arrowStyle}
            size={SIZE_MAP[size].icon}
            src={iconSrc}
          />
          <Text size={SIZE_MAP[size].text}>{children}</Text>
        </>
      ) : (
        <>
          <Text size={SIZE_MAP[size].text}>{children}</Text>
          <RightIcon
            arrowStyle={arrowStyle}
            size={SIZE_MAP[size].icon}
            src={iconSrc}
          />
        </>
      )}
    </Wrapper>
  )
}

ArrowButton.propTypes = {
  children: T.oneOfType([T.string, T.node]),
  arrowStyle: T.oneOf(['default', 'simple']),
  size: T.oneOf(['tiny', 'small', 'medium', 'large']),
  direction: T.oneOf(['left', 'right']),
  dimWhenIdle: T.bool,
  onClick: T.func,
}

ArrowButton.defaultProps = {
  children: '下一步',
  arrowStyle: 'default',
  size: 'small',
  direction: 'right',
  dimWhenIdle: false,
  onClick: log,
}

export default React.memo(ArrowButton)
