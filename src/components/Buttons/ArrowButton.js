/*
 *
 * ArrowButtons
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
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
  transparentFirst,
}) => {
  return (
    <Wrapper onClick={onClick} transparentFirst={transparentFirst}>
      {direction === 'left' ? (
        <React.Fragment>
          <LeftIcon
            size={SIZE_MAP[size].icon}
            src={`${ICON_CMD}/navi/navi_back.svg`}
          />
          <Text size={SIZE_MAP[size].text}>{children}</Text>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Text size={SIZE_MAP[size].text}>{children}</Text>
          <RightIcon
            size={SIZE_MAP[size].icon}
            src={`${ICON_CMD}/navi/navi_back.svg`}
          />
        </React.Fragment>
      )}
    </Wrapper>
  )
}

ArrowButton.propTypes = {
  children: T.oneOfType([T.string, T.node]),
  size: T.oneOf(['tiny', 'small', 'medium', 'large']),
  direction: T.oneOf(['left', 'right']),
  transparentFirst: T.bool,
  onClick: T.func,
}

ArrowButton.defaultProps = {
  children: '下一步',
  size: 'small',
  direction: 'right',
  transparentFirst: false,
  onClick: log,
}

export default React.memo(ArrowButton)
