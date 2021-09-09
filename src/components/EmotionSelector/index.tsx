/*
 * EmojiSelector
 */

import { FC, memo } from 'react'
import { values, reject, includes } from 'ramda'

import type { TEmotion } from '@/spec'
import { buildLog } from '@/utils/logger'
import { titleCase } from '@/utils/helper'
import { EMOTION } from '@/constant'
import IconButton from '@/components/Buttons/IconButton'
import Tooltip from '@/components/Tooltip'

import SelectedEmotions from './SelectedEmotions'
import Panel from './Panel'
import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:EmotionSelector:index')

const emotionsCoverter = (selectedEmotions: TEmotion): TEmotion[] => {
  const converted = []
  values(EMOTION).forEach((emotion) =>
    converted.push({
      [`${emotion}Count`]: selectedEmotions[`${emotion}Count`],
      // [`latest${emotion.toUpperCase()}Users`]: [],
      [`viewerHas${titleCase(emotion)}ed`]:
        selectedEmotions[`viewerHas${titleCase(emotion)}ed`],
    }),
  )

  return reject((e) => includes(0, values(e)), converted)
}

type TProps = {
  testid?: string
  emotions: TEmotion
}

const EmotionSelector: FC<TProps> = ({
  testid = 'emotion-selector',
  emotions,
}) => {
  console.log('got converted: ', emotionsCoverter(emotions))

  return (
    <Wrapper testid={testid}>
      <SelectedEmotions emotions={emotionsCoverter(emotions)} />
      <Tooltip content={<Panel />} trigger="click">
        <IconButton path="emotion/emotion.svg" mRight={0} mTop={1} />
      </Tooltip>
    </Wrapper>
  )
}

export default memo(EmotionSelector)
