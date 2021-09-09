/*
 * EmojiSelector
 */

import { FC, memo } from 'react'
import { buildLog } from '@/utils/logger'

import type { TSimpleUser } from '@/spec'
import { ICON } from '@/config'

import Tooltip from '@/components/Tooltip'
import AnimatedCount from '@/components/AnimatedCount'

import {
  Wrapper,
  EIcon,
  PopHint,
  PopUsers,
  Count,
  Units,
  Username,
} from './styles/users_panel'

/* eslint-disable-next-line */
const log = buildLog('c:UsersPanel:index')

type TProps = {
  name: string
  count: number
  users: TSimpleUser[]
}

const UsersPanel: FC<TProps> = ({ name, count, users }) => {
  const showUnit = users.length > count

  const emotionIcon = (
    <EIcon src={`${ICON}/emotion/${name}.png`} name={name} noLazy />
  )

  return (
    <Tooltip
      content={
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
          {emotionIcon}
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

export default memo(UsersPanel)
