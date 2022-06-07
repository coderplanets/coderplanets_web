import { FC, memo } from 'react'

import type { TSpace } from '@/spec'
import { SpaceGrow } from '@/widgets/Common'
import YesOrNoButtons from '@/widgets/Buttons/YesOrNoButtons'

import {
  Wrapper,
  HintWrapper,
  InfoIcon,
  HintText,
  ActionWrapper,
} from './styles/saving_bar'

type TProps = TSpace

const SavingBar: FC<TProps> = ({ ...restProps }) => {
  return (
    <Wrapper {...restProps}>
      <HintWrapper>
        <InfoIcon />
        <HintText>是否保存该设置？</HintText>
      </HintWrapper>
      <SpaceGrow />
      <ActionWrapper>
        <YesOrNoButtons cancelText="取消" confirmText="确定" space={4} />
      </ActionWrapper>
    </Wrapper>
  )
}

export default memo(SavingBar)
