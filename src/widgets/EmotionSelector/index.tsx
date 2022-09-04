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
import { Wrapper, SelectEmotionWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:EmotionSelector:index')

type TProps = {
  testid?: string
  isLegal?: boolean
  emotions: TEmotion
  onAction?: (name: TEmotionType, hasEmotioned: boolean) => void
}

const EmotionSelector: FC<TProps> = ({
  testid = 'emotion-selector',
  onAction = log,
  isLegal = true,
  emotions,
}) => {
  const validEmotions = emotionsCoverter(emotions)
  return (
    <Wrapper testid={testid}>
      <SelectedEmotions emotions={validEmotions} onAction={onAction} />
      {isLegal && (
        <Tooltip
          content={<Panel emotions={validEmotions} onAction={onAction} />}
          trigger="click"
          noPadding
        >
          <SelectEmotionWrapper>
            <IconButton icon="emotion" dimWhenIdle size={18} />
          </SelectEmotionWrapper>
        </Tooltip>
      )}
    </Wrapper>
  )
}

export default memo(EmotionSelector)
