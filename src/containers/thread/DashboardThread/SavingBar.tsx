import { FC, memo, ReactNode } from 'react'

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

type TProps = {
  hint?: ReactNode
} & TSpace

const SavingBar: FC<TProps> = ({ hint = '是否保存该设置？', ...restProps }) => {
  return (
    <Wrapper {...restProps}>
      <HintWrapper>
        <InfoIcon />
        <HintText>{hint}</HintText>
      </HintWrapper>
      <SpaceGrow />
      <ActionWrapper>
        <YesOrNoButtons cancelText="取消" confirmText="确定" space={4} />
      </ActionWrapper>
    </Wrapper>
  )
}

export default memo(SavingBar)
