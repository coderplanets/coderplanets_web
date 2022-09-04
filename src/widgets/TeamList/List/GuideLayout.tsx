/*
 *
 * TeamList
 *
 */

import { FC, memo } from 'react'

import type { TUser } from '@/spec'
import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'

// import Setter from './Setter'
import {
  Wrapper,
  Avatar,
  SettingWrapper,
  SettingIcon,
} from '../styles/list/guide_layout'

/* eslint-disable-next-line */
const log = buildLog('w:TeamList:index')

type TProps = {
  users: TUser[]
  withSetter?: boolean
  onSetting: () => void
}

const GuideLayout: FC<TProps> = ({ users, withSetter = false, onSetting }) => {
  return (
    <Wrapper>
      {users.map((user) => (
        <Avatar key={user.id} src={user.avatar} />
      ))}
      {withSetter && (
        <SettingWrapper onClick={onSetting}>
          <SettingIcon src={`${ICON}/shape/settings.svg`} />
        </SettingWrapper>
      )}
    </Wrapper>
  )
}

export default memo(GuideLayout)
