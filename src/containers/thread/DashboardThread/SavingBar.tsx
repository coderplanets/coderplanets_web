import { FC, memo, Fragment, ReactNode } from 'react'

import type { TSpace } from '@/spec'
import { SpaceGrow } from '@/widgets/Common'
import YesOrNoButtons from '@/widgets/Buttons/YesOrNoButtons'

import type { TSettingField } from './spec.d'
import {
  Wrapper,
  HintWrapper,
  InfoIcon,
  HintText,
  Hint,
  ActionWrapper,
} from './styles/saving_bar'

import { rollbackEdit } from './logic'

type TProps = {
  field: TSettingField
  prefix?: string
  hint?: ReactNode
  children?: ReactNode
  isTouched?: boolean
} & TSpace

const SavingBar: FC<TProps> = ({
  field,
  prefix = '是否保存',
  hint = null,
  children = null,
  isTouched = false,
  ...restProps
}) => {
  if (children !== null) {
    if (isTouched) {
      return (
        <Wrapper gradientDirection="left" {...restProps}>
          <Fragment>{children}</Fragment>
          <SpaceGrow />
          <ActionWrapper>
            <YesOrNoButtons
              cancelText="取消"
              confirmText="确定"
              space={4}
              onCancel={() => rollbackEdit(field)}
            />
          </ActionWrapper>
        </Wrapper>
      )
    }
    return <Fragment>{children}</Fragment>
  }

  if (!isTouched) return null

  return (
    <Wrapper gradientDirection="right" {...restProps}>
      <HintWrapper>
        <InfoIcon />
        <HintText>
          {prefix}
          {hint && <Hint>{hint}</Hint>} ?
        </HintText>
      </HintWrapper>
      <SpaceGrow />
      <ActionWrapper>
        <YesOrNoButtons
          cancelText="取消"
          confirmText="确定"
          space={4}
          onCancel={() => rollbackEdit(field)}
        />
      </ActionWrapper>
    </Wrapper>
  )
}

export default memo(SavingBar)
