/*
 *
 * UserList
 *
 */

import { FC, Fragment, memo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import type { TUser } from '@/spec'
import { buildLog } from '@/utils/logger'

import type { TLayout } from './spec'
import type { TProps as TSetter } from './Setter'
import List from './List'
// import Setter from './Setter'
// import { Wrapper, Avatar, SettingWrapper, SettingIcon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:UserList:index')

type TProps = {
  testid?: string
  users: TUser[]
  withSetter?: boolean
  layout: TLayout
  onDelete?: (u: TUser) => void
  onSelect?: (u: TUser) => void
}

let Setter: FC<TSetter> = () => null

const UserList: FC<TProps> = ({
  testid = 'user-list',
  users,
  withSetter = false,
  layout,
  onDelete = log,
  onSelect = log,
}) => {
  const [showSetter, setShowSetter] = useState(false)

  useEffect(() => {
    if (withSetter) {
      Setter = dynamic(() => import('./Setter'), {
        ssr: false,
      }) as FC<TSetter>
    }
  }, [withSetter])

  return (
    <Fragment>
      <Setter
        show={showSetter}
        users={users}
        onClose={() => setShowSetter(false)}
      />
      <List
        layout={layout}
        users={users}
        withSetter={withSetter}
        onSetting={() => setShowSetter(true)}
      />
    </Fragment>
  )
}

export default memo(UserList)
