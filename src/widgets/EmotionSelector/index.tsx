/*
 * EmojiSelector
 */

import { FC, memo } from 'react'

import type { TEmotion, TEmotionType } from '@/spec'
import { buildLog } from '@/utils/logger'
import IconButton from '@/widgets/Buttons/IconButton'
import Tooltip from '@/widgets/Tooltip'

import { emotionsCoverter } from './helper'
import SelectedEmotions from './SelectedEmotions/index'
import Panel from './Panel'
import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:EmotionSelector:index')

type TProps = {
  testid?: string
  emotions: TEmotion
  onAction?: (name: TEmotionType, hasEmotioned: boolean) => void
}

const EmotionSelector: FC<TProps> = ({
  testid = 'emotion-selector',
  onAction = log,
  emotions,
}) => {
  const validEmotions = emotionsCoverter(emotions)
  return (
    <Wrapper testid={testid}>
      <SelectedEmotions emotions={validEmotions} onAction={onAction} />
      <Tooltip
        content={<Panel emotions={validEmotions} onAction={onAction} />}
        trigger="click"
        noPadding
      >
        <IconButton path="emotion/emotion.svg" mRight={0} mTop={1} />
      </Tooltip>
    </Wrapper>
  )
}

export default memo(EmotionSelector)
