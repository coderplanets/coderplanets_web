/*
 *
 * ArrowLink
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'

import { Wrapper, Text, RightIcon } from './styles/arrow_link'

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

const ArrowLink = ({
  className,
  children,
  size,
  href,
  target,
  color,
  hoverColor,
}) => {
  return (
    <Wrapper
      className={className}
      href={href}
      rel="noopener noreferrer"
      target={target}
    >
      <Text size={SIZE_MAP[size].text} color={color} hoverColor={hoverColor}>
        {children}
      </Text>
      <RightIcon
        size={SIZE_MAP[size].icon}
        color={color}
        hoverColor={hoverColor}
        src={`${ICON_CMD}/navi/navi_back.svg`}
      />
    </Wrapper>
  )
}

ArrowLink.propTypes = {
  className: T.string,
  children: T.oneOfType([T.string, T.node]),
  size: T.oneOf(['tiny', 'small', 'medium', 'large']),
  href: T.string,
  color: T.string,
  hoverColor: T.string,
  target: T.oneOf(['_blank', '']),
}

ArrowLink.defaultProps = {
  className: '',
  children: '下一步',
  size: 'small',
  href: '',
  color: '',
  hoverColor: '',
  target: '_blank',
}

export default React.memo(ArrowLink)
