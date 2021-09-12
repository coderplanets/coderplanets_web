/*
 * EmojiSelector
 */

import { FC, memo, Fragment } from 'react'
import { buildLog } from '@/utils/logger'
import { keys } from 'ramda'

import type { TEmotion, TSimpleUser } from '@/spec'
import { titleCase } from '@/utils/helper'

import UsersPanel from './UsersPanel'

/* eslint-disable-next-line */
const log = buildLog('c:SelectedEmotions:index')

const getEmotionName = (item): string => {
  const eCountKey = keys(item)[0] as string
  return eCountKey.split('Count')[0]
}

type TProps = {
  emotions: TEmotion[]
}

const SelectedEmotions: FC<TProps> = ({ emotions }) => {
  return (
    <Fragment>
      {emotions.map((item) => {
        const eName = getEmotionName(item) as string
        const count = item[`${eName}Count`] as number
        const users = item[`latest${titleCase(eName)}Users`] as TSimpleUser[]

        return (
          <UsersPanel key={eName} name={eName} count={count} users={users} />
        )
      })}
    </Fragment>
  )
}

export default memo(SelectedEmotions)
