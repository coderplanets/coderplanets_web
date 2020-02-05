/*
 *
 * ArrowButtons
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { Wrapper, Text, LeftIcon, RightIcon } from './styles/arrow_button'

/* eslint-disable-next-line */
const log = buildLog('c:FancyButtons:index')

const SISE_MAP = {
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

const FancyButtons = ({
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
            size={SISE_MAP[size].icon}
            src={`${ICON_CMD}/navi/navi_back.svg`}
          />
          <Text size={SISE_MAP[size].text}>{children}</Text>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Text size={SISE_MAP[size].text}>{children}</Text>
          <RightIcon
            size={SISE_MAP[size].icon}
            src={`${ICON_CMD}/navi/navi_back.svg`}
          />
        </React.Fragment>
      )}
    </Wrapper>
  )
}

FancyButtons.propTypes = {
  children: T.oneOfType(T.string, T.node),
  size: T.oneOf(['small', 'medium', 'large']),
  direction: T.oneOf(['left', 'right']),
  transparentFirst: T.bool,
  onClick: T.func,
}

FancyButtons.defaultProps = {
  children: '下一步',
  size: 'small',
  direction: 'right',
  transparentFirst: false,
  onClick: console.log,
}

export default React.memo(FancyButtons)
