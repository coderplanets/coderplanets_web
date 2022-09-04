/*
 * EmojiSelector
 */

import { FC, memo } from 'react'
import { buildLog } from '@/utils/logger'

import type { TEmotion, TSimpleUser, TEmotionType } from '@/spec'

import { titleCase } from '@/utils/helper'
import Tooltip from '@/widgets/Tooltip'
import AnimatedCount from '@/widgets/AnimatedCount'

import EmotionIcon from './EmotionIcon'
import UsersPanel from './UsersPanel'
import { getEmotionName } from '../helper'

import { Wrapper, Count } from '../styles/selected_emotions/emotion_unit'

/* eslint-disable-next-line */
const log = buildLog('w:EmotionUnit:index')

type TProps = {
  item: TEmotion
  onAction?: (name: TEmotionType, hasEmotioned: boolean) => void
}

const EmotionUnit: FC<TProps> = ({ item, onAction }) => {
  const name = getEmotionName(item)
  const count = item[`${name}Count`] as number
  const users = item[`latest${titleCase(name)}Users`] as TSimpleUser[]
  const hasEmotioned = item[`viewerHas${titleCase(name)}ed`] as boolean

  return (
    <Tooltip
      content={<UsersPanel name={name} count={count} users={users} />}
      interactive={false}
      noPadding
    >
      <Wrapper
        $active={hasEmotioned}
        onClick={() => onAction(name as TEmotionType, hasEmotioned)}
      >
        <EmotionIcon name={name} />
        <Count>
          <AnimatedCount count={count} size="small" active={hasEmotioned} />
        </Count>
      </Wrapper>
    </Tooltip>
  )
}

export default memo(EmotionUnit)
