/*
 * EmojiSelector
 */

import { FC, memo } from 'react'
import { buildLog } from '@/utils/logger'

import type { TSimpleUser, TEmotionType } from '@/spec'

import EmotionIcon from './EmotionIcon'

import { PopHint, PopUsers, Units, Username } from '../styles/users_panel'

/* eslint-disable-next-line */
const log = buildLog('c:UsersPanel:index')

type TProps = {
  name: TEmotionType
  count: number
  users: TSimpleUser[]
  hasEmotioned: boolean
}

const UsersPanel: FC<TProps> = ({ name, count, users, hasEmotioned }) => {
  const showUnit = users.length > count

  return (
    <PopHint>
      <PopUsers>
        {users.slice(0, 5).map((u, index) => (
          <Username key={u.login}>
            {u.nickname}
            {users.length - 1 !== index ? ',' : ''}
          </Username>
        ))}
        {showUnit && <Units>等 {count} 人</Units>}
      </PopUsers>{' '}
      <EmotionIcon name={name} />
    </PopHint>
  )
}

export default memo(UsersPanel)
