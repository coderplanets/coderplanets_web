/*
 *
 * ArrowLink
 *
 */

import React from 'react'
import T from 'prop-types'
import { values } from 'ramda'

import { ICON_CMD } from '@/config'
import { SIZE } from '@/constant'
import { buildLog } from '@/utils'

import { Wrapper, Text, RightIcon } from './styles/arrow_link'

/* eslint-disable-next-line */
const log = buildLog('c:Buttons:index')

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
      <Text size={size} color={color} hoverColor={hoverColor}>
        {children}
      </Text>
      <RightIcon
        size={size}
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
  size: T.oneOf(values(SIZE)),
  href: T.string,
  color: T.string,
  hoverColor: T.string,
  target: T.oneOf(['_blank', '']),
}

ArrowLink.defaultProps = {
  className: '',
  children: '下一步',
  size: SIZE.SMALL,
  href: '',
  color: '',
  hoverColor: '',
  target: '_blank',
}

export default React.memo(ArrowLink)
