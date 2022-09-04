/*
 *
 * IconText
 *
 */

import { FC, ReactNode, memo } from 'react'

import type { TSize } from '@/spec'
import { ICON } from '@/config'
import { nilOrEmpty } from '@/utils/validator'
import { buildLog } from '@/utils/logger'
import { SIZE } from '@/constant'

import { Wrapper, Icon, Text } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:IconText:index')

type TProps = {
  iconSrc?: string | null
  path?: string | null
  round?: boolean
  children: ReactNode
  size?: TSize
  margin?: string
  highlight?: boolean
  className?: string
  dimWhenIdle?: boolean
}

const IconText: FC<TProps> = ({
  className = '',
  iconSrc = null,
  path = null,
  round = false,
  children,
  size = SIZE.SMALL,
  dimWhenIdle = false,
  margin,
  highlight = false,
}) => {
  const src = iconSrc || `${ICON}/${path}`

  return (
    <Wrapper testid="iconText" className={className} dimWhenIdle={dimWhenIdle}>
      {!nilOrEmpty(src) && (
        <Icon
          src={src}
          size={size}
          round={round}
          margin={margin}
          highlight={highlight}
        />
      )}
      <Text size={size} highlight={highlight}>
        {children}
      </Text>
    </Wrapper>
  )
}

export default memo(IconText)
