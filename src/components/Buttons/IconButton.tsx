import { FC, memo, ReactNode } from 'react'

import { ICON } from '@/config'
import { SVG } from '@/constant'

import Tooltip from '@/components/Tooltip'
import { Wrapper, Icon, Hint, getIcon } from './styles/icon_button'

export type TProps = {
  path?: string | null
  icon?: string | null
  size?: number
  mRight?: number
  mLeft?: number
  mTop?: number
  mBottom?: number
  dimWhenIdle?: boolean
  active?: boolean
  hint?: ReactNode | null
  hintDelay?: number
  hintPlacement?: 'top' | 'bottom'
  onClick?: () => void
}

const IconButton: FC<TProps> = ({
  path = null,
  icon = null,
  size = 16,
  mLeft = 0,
  mRight = 10,
  mTop = 0,
  mBottom = 0,
  active = false,
  dimWhenIdle = false,
  hint = null,
  hintDelay = 500,
  hintPlacement = 'top',
  onClick = console.log,
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
    <Wrapper
      size={size}
      mRight={mRight}
      mLeft={mLeft}
      mTop={mTop}
      mBottom={mBottom}
      onClick={onClick}
    >
      {hint ? (
        <Tooltip
          placement={hintPlacement}
          content={<Hint>{hint}</Hint>}
          noPadding
          delay={hintDelay}
        >
          {realIcon}
        </Tooltip>
      ) : (
        <>{realIcon}</>
      )}
    </Wrapper>
  )
}

export default memo(IconButton)
