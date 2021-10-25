import { FC, memo } from 'react'

import type { TSubmitState } from '@/spec'
import { buildLog } from '@/utils/logger'

import YesOrNoButtons from './YesOrNoButtons'
import { DonwWrapper, DoneIcon, DoneHint } from './styles/submit_button'

/* eslint-disable-next-line */
const log = buildLog('c:Buttons:SubmitButton')

type TProps = {
  // onClick?: () => void
  submitState?: TSubmitState

  okText?: string
  cancelText?: string
  onCancel?: () => void
  onPublish?: () => void
}

const SubmitButton: FC<TProps> = ({
  okText = '发 布',
  cancelText = '取 消',
  onCancel = log,
  onPublish = log,
  submitState = { publishing: false, publishDone: false, isReady: false },
}) => {
  const { publishing, publishDone, isReady } = submitState

  return (
    <div>
      {publishDone ? (
        <DonwWrapper>
          <DoneIcon />
          <DoneHint>已提交</DoneHint>
        </DonwWrapper>
      ) : (
        <YesOrNoButtons
          cancelText={cancelText}
          confirmText={okText}
          onConfirm={onPublish}
          loading={publishing}
          disabled={!isReady}
          onCancel={onCancel}
        />
      )}
    </div>
  )
}

export default memo(SubmitButton)
