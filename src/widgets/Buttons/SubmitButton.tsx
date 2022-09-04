import { FC, memo } from 'react'

import type { TSubmitState } from '@/spec'
import { buildLog } from '@/utils/logger'

import YesOrNoButtons from './YesOrNoButtons'
import Button from './Button'
import { DonwWrapper, DoneIcon, DoneHint } from './styles/submit_button'

/* eslint-disable-next-line */
const log = buildLog('w:Buttons:SubmitButton')

type TProps = {
  submitState?: TSubmitState

  okText?: string
  cancelText?: string
  withCancel?: boolean
  onCancel?: () => void
  onPublish?: () => void
}

const TheButton: FC<TProps> = ({
  okText,
  cancelText,
  withCancel,
  onCancel,
  onPublish,
  submitState,
}) => {
  const { publishing, isReady } = submitState

  return withCancel ? (
    <YesOrNoButtons
      cancelText={cancelText}
      confirmText={okText}
      onConfirm={onPublish}
      loading={publishing}
      disabled={!isReady}
      onCancel={onCancel}
    />
  ) : (
    <Button
      loading={publishing}
      onClick={() => onPublish()}
      size="small"
      disabled={!isReady}
    >
      {okText}
    </Button>
  )
}

const SubmitButton: FC<TProps> = ({
  okText = '发 布',
  cancelText = '取 消',
  withCancel = false,
  onCancel = log,
  onPublish = log,
  submitState = {
    publishing: false,
    publishDone: false,
    isReady: false,
    isArchived: false,
    mode: 'publish',
    isArticleAuthor: false,
  },
}) => {
  const { publishDone, isArchived, mode, isArticleAuthor } = submitState

  if (mode === 'update' && !isArticleAuthor) {
    return (
      <Button size="small" disabled>
        无权限
      </Button>
    )
  }

  if (isArchived) {
    return (
      <Button size="small" disabled>
        已存档
      </Button>
    )
  }

  return (
    <div>
      {publishDone ? (
        <DonwWrapper>
          <DoneIcon />
          <DoneHint>已提交</DoneHint>
        </DonwWrapper>
      ) : (
        <TheButton
          submitState={submitState}
          okText={okText}
          cancelText={cancelText}
          withCancel={withCancel}
          onCancel={onCancel}
          onPublish={onPublish}
        />
      )}
    </div>
  )
}

export default memo(SubmitButton)
