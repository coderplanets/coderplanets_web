import { FC, memo, ReactNode } from 'react'

import { ICON } from '@/config'

import Tooltip from '@/components/Tooltip'
import { Wrapper, Icon, Hint } from './styles/icon_button'

export type TProps = {
  path: string
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
  path,
  size = 16,
  mLeft = 0,
  mRight = 10,
  mTop = 0,
  mBottom = 0,
  active = false,
  dimWhenIdle = false,
  hint = null,
  hintDelay = 1000,
  hintPlacement = 'top',
  onClick = console.log,
}) => {
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
          <Icon
            src={`${ICON}/${path}`}
            size={size}
            $active={active}
            dimWhenIdle={dimWhenIdle}
          />
        </Tooltip>
      ) : (
        <Icon
          src={`${ICON}/${path}`}
          size={size}
          $active={active}
          dimWhenIdle={dimWhenIdle}
        />
      )}
    </Wrapper>
  )
}

export default memo(IconButton)
