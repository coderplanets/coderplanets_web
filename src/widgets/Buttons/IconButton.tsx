import { FC, memo, ReactNode } from 'react'

import type { TSpace } from '@/spec'
import { ICON } from '@/config'
import { SVG } from '@/constant'

import Tooltip from '@/widgets/Tooltip'
import {
  Wrapper,
  Content,
  Icon,
  Hint,
  getIcon,
  HoverBg,
} from './styles/icon_button'

export type TProps = {
  path?: string | null
  icon?: string | null
  size?: number
  dimWhenIdle?: boolean
  active?: boolean
  hint?: ReactNode | null
  hintDelay?: number
  hintPlacement?: 'top' | 'bottom'
  onClick?: () => void
} & TSpace

const IconButton: FC<TProps> = ({
  path = null,
  icon = null,
  size = 16,
  active = false,
  dimWhenIdle = false,
  hint = null,
  hintDelay = 500,
  hintPlacement = 'top',
  onClick = console.log,
  ...restProps
}) => {
  let realIcon = null

  if (path) {
    // icon from OSS
    realIcon = (
      <Icon
        src={`${ICON}/${path}`}
        size={size}
        $active={active}
        $dimWhenIdle={dimWhenIdle}
      />
    )
  } else {
    const LocalIcon = getIcon(icon || SVG.UPVOTE)

    realIcon = (
      <LocalIcon size={size} $active={active} $dimWhenIdle={dimWhenIdle} />
    )
  }

  return (
    <Wrapper size={size} {...restProps} onClick={onClick}>
      {hint ? (
        <Tooltip
          placement={hintPlacement}
          content={<Hint>{hint}</Hint>}
          noPadding
          delay={hintDelay}
          forceZIndex
        >
          <Content>{realIcon}</Content>
        </Tooltip>
      ) : (
        <Content>{realIcon}</Content>
      )}
      <HoverBg size={size} />
    </Wrapper>
  )
}

export default memo(IconButton)
