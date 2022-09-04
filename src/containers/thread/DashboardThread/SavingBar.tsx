import { FC, memo, Fragment, ReactNode } from 'react'

import type { TSpace } from '@/spec'
import { buildLog } from '@/utils/logger'

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

import { rollbackEdit, onSave } from './logic'

const log = buildLog('C:Dashboard/SavingBar')

type TProps = {
  field: TSettingField
  prefix?: string
  hint?: ReactNode
  children?: ReactNode
  loading?: boolean
  isTouched?: boolean
  onCancel?: () => void
} & TSpace

const SavingBar: FC<TProps> = ({
  field,
  prefix = '是否保存',
  hint = null,
  children = null,
  isTouched = false,
  loading = false,
  onCancel = log,
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
              loading={loading}
              space={4}
              onCancel={() => {
                onCancel?.()
                rollbackEdit(field)
              }}
              onConfirm={() => onSave(field)}
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
          loading={loading}
          space={4}
          onConfirm={() => onSave(field)}
          onCancel={() => {
            onCancel?.()
            rollbackEdit(field)
          }}
        />
      </ActionWrapper>
    </Wrapper>
  )
}

export default memo(SavingBar)
