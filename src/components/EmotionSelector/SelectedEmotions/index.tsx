/*
 * EmojiSelector
 */

import { FC, memo, Fragment } from 'react'
import { buildLog } from '@/utils/logger'

import type { TEmotion, TEmotionType } from '@/spec'

import EmotionUnit from './EmotionUnit'
import { getEmotionName } from './helper'
/* eslint-disable-next-line */
const log = buildLog('c:SelectedEmotions:index')

type TProps = {
  emotions: TEmotion[]
  onAction?: (name: TEmotionType, hasEmotioned: boolean) => void
}

const SelectedEmotions: FC<TProps> = ({ emotions, onAction }) => {
  return (
    <Fragment>
      {emotions.map((item) => {
        const name = getEmotionName(item) as string

        return <EmotionUnit key={name} item={item} onAction={onAction} />
      })}
    </Fragment>
  )
}

export default memo(SelectedEmotions)
