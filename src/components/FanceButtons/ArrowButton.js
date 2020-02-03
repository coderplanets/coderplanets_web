/*
 *
 * ArrowButtons
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { Wrapper, Text, ArrowIcon } from './styles/arrow_button'

/* eslint-disable-next-line */
const log = buildLog('c:FanceButtons:index')

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

const FanceButtons = ({ children, size }) => {
  return (
    <Wrapper>
      <Text size={SISE_MAP[size].text}>{children}</Text>
      <ArrowIcon
        size={SISE_MAP[size].icon}
        src={`${ICON_CMD}/navi/navi_back.svg`}
      />
    </Wrapper>
  )
}

FanceButtons.propTypes = {
  children: T.oneOfType(T.string, T.node),
  size: T.oneOf(['small', 'medium', 'large']),
}

FanceButtons.defaultProps = {
  children: '下一步',
  size: 'small',
}

export default React.memo(FanceButtons)
