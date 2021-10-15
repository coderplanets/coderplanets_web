import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import YesOrNoButtons from './YesOrNoButtons'
import { DonwWrapper, DoneIcon, DoneHint } from './styles/submit_button'

/* eslint-disable-next-line */
const log = buildLog('c:Buttons:SubmitButton')

type TProps = {
  // onClick?: () => void
  disabled?: boolean
  publishState?: { publishing: boolean; publishDone: boolean }

  okText?: string
  cancelText?: string
  onCancel?: () => void
  onPublish?: () => void
}

const SubmitButton: FC<TProps> = ({
  disabled = false,
  okText = '发 布',
  cancelText = '取 消',
  onCancel = log,
  onPublish = log,
  publishState = { publishing: false, publishDone: false },
}) => {
  const { publishing, publishDone } = publishState

  return (
    <div>
      {publishDone ? (
        <DonwWrapper>
          <DoneIcon />
          <DoneHint>已完成</DoneHint>
        </DonwWrapper>
      ) : (
        <YesOrNoButtons
          cancelText={cancelText}
          confirmText={okText}
          onConfirm={onPublish}
          loading={publishing}
          onCancel={onCancel}
        />
      )}
    </div>
  )
}

export default memo(SubmitButton)
