import { FC, memo } from 'react'

import type { TSpace } from '@/spec'
import { Wrapper, Icon, Text } from '../styles/preview_layout/bonus_button'

type TProps = TSpace

const BonusButton: FC<TProps> = ({ ...restProps }) => {
  return (
    <Wrapper {...restProps}>
      <Icon />
      <Text>兑换码</Text>
    </Wrapper>
  )
}

export default memo(BonusButton)
