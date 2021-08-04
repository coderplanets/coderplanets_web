/*
 * EmojiSelector
 */

import { FC, memo } from 'react'
import { buildLog } from '@/utils/logger'

import IconButton from '@/components/Buttons/IconButton'
import Tooltip from '@/components/Tooltip'

import SelectedEmotions from './SelectedEmotions'
import Panel from './Panel'
import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:EmotionSelector:index')

const tmpEmotions = [
  {
    downvoteCount: 5,
  },
  {
    heartCount: 10,
  },
  {
    confusedCount: 7,
  },
  {
    beerCount: 3,
  },
  {
    popcornCount: 12,
  },
  {
    pillCount: 20,
  },
]

type TProps = {
  testid?: string
}

const EmotionSelector: FC<TProps> = ({ testid = 'emotion-selector' }) => {
  return (
    <Wrapper testid={testid}>
      <SelectedEmotions emotions={tmpEmotions} />
      <Tooltip content={<Panel />} trigger="click">
        <IconButton path="emotion/emotion.svg" mRight={0} mTop={1} />
      </Tooltip>
    </Wrapper>
  )
}

export default memo(EmotionSelector)
