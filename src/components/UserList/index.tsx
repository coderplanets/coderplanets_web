/*
 *
 * UserList
 *
 */

import { FC, Fragment, memo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import type { TUser } from '@/spec'
import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'

import type { TProps as TSetter } from './Setter'
// import Setter from './Setter'
import { Wrapper, Avatar, SettingWrapper, SettingIcon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:UserList:index')

type TProps = {
  testid?: string
  users: TUser[]
  withSetter?: boolean
}

let Setter: FC<TSetter> = () => <div />

const UserList: FC<TProps> = ({
  testid = 'user-list',
  users,
  withSetter = false,
}) => {
  const [showSetter, setShowSetter] = useState(false)

  useEffect(() => {
    if (withSetter) {
      // @ts-ignore
      Setter = dynamic(() => import('./Setter'), {
        ssr: false,
      })
    }
  }, [withSetter])

  return (
    <Fragment>
      <>
        <Setter
          show={showSetter}
          users={users}
          onClose={() => setShowSetter(false)}
        />
      </>
      <Wrapper>
        {users.map((user) => (
          <Avatar key={user.id} src={user.avatar} />
        ))}
        {withSetter && (
          <SettingWrapper onClick={() => setShowSetter(true)}>
            <SettingIcon src={`${ICON}/shape/settings.svg`} />
          </SettingWrapper>
        )}
      </Wrapper>
    </Fragment>
  )
}

export default memo(UserList)
