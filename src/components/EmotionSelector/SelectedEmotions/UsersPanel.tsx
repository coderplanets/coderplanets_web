/*
 * EmojiSelector
 */

import { FC, memo } from 'react'
import { buildLog } from '@/utils/logger'

import type { TSimpleUser, TEmotionType } from '@/spec'

import EmotionIcon from './EmotionIcon'

import {
  Wrapper,
  UsersWrapper,
  Units,
  Username,
} from '../styles/selected_emotions/users_panel'

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
    <Wrapper>
      <UsersWrapper>
        {users.slice(0, 5).map((u, index) => (
          <Username key={u.login}>
            {u.nickname}
            {users.length - 1 !== index ? ',' : ''}
          </Username>
        ))}
        {showUnit && <Units>等 {count} 人</Units>}
      </UsersWrapper>{' '}
      <EmotionIcon name={name} />
    </Wrapper>
  )
}

export default memo(UsersPanel)
