/*
 *
 * ArrowLink
 *
 */

import React from 'react'

import type { TSIZE } from '@/spec'
import { ICON_CMD } from '@/config'
import { SIZE } from '@/constant'
import { buildLog } from '@/utils'

import { Wrapper, Text, RightIcon } from './styles/arrow_link'

/* eslint-disable-next-line */
const log = buildLog('c:Buttons:ArrowLink')

type TProps = {
  className: string
  children?: React.ReactNode
  size?: TSIZE
  href: string
  target: '_blank' | ''
  color?: string
  hoverColor?: string
}

const ArrowLink: React.FC<TProps> = ({
  className = '',
  children = '下一步',
  size = SIZE.SMALL,
  href = '',
  target = '_blank',
  color = '',
  hoverColor = '',
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

export default React.memo(ArrowLink)
