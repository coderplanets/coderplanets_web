/*
 * EmojiSelector
 */

import { FC, memo, Fragment } from 'react'
import { buildLog } from '@/utils'
import { keys } from 'ramda'

import { ICON } from '@/config'
import Tooltip from '@/components/Tooltip'
import AnimatedCount from '@/components/AnimatedCount'

import {
  Wrapper,
  EIcon,
  PopHint,
  PopUsers,
  Count,
} from './styles/selected_emotions'

/* eslint-disable-next-line */
const log = buildLog('c:SelectedEmotions:index')

const getEmotionName = (item): string => {
  const eCountKey = keys(item)[0] as string
  return eCountKey.split('Count')[0]
}

const Emotion: FC<{ name: string; count: number }> = ({ name, count }) => {
  const emotionIcon = (
    <EIcon src={`${ICON}/emotion/${name}.png`} name={name} noLazy />
  )
  return (
    <Tooltip
      content={
        <PopHint>
          <PopUsers>xxx, yyy, zzz 等 7 人</PopUsers> {emotionIcon}
        </PopHint>
      }
      noPadding
    >
      <Wrapper>
        {emotionIcon}
        <Count>
          <AnimatedCount count={count} size="tiny" active={false} />
        </Count>
      </Wrapper>
    </Tooltip>
  )
}

type TProps = {
  emotions: Record<string, number | string[] | boolean>[]
}

const SelectedEmotions: FC<TProps> = ({ emotions }) => {
  return (
    <Fragment>
      {emotions.map((item) => {
        const eName = getEmotionName(item) as string
        const count = item[`${eName}Count`] as number

        return <Emotion key={eName} name={eName} count={count} />
      })}
    </Fragment>
  )
}

export default memo(SelectedEmotions)
