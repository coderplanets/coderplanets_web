import { FC, memo } from 'react'

import type { TSizeSM } from '@/spec'
import { SIZE } from '@/constant'

import { Wrapper, Track, Indicator, CheckIcon } from './styles/toggle_switch'

type TProps = {
  size?: TSizeSM
  checked?: boolean
  onChange?: (checked: boolean) => void
}

const ToggleSwitch: FC<TProps> = ({
  size = SIZE.SMALL,
  checked = false,
  onChange = console.log,
}) => {
  return (
    <Wrapper onClick={() => onChange(!checked)} size={size}>
      <Track checked={checked}>
        <Indicator checked={checked}>
          <CheckIcon checked={checked} />
        </Indicator>
      </Track>
    </Wrapper>
  )
}

export default memo(ToggleSwitch)