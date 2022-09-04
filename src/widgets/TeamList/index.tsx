/*
 *
 * TeamList
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
const log = buildLog('w:TeamList:index')

type TProps = {
  users: TUser[]
  withSetter?: boolean
  layout: TLayout
  onRemove?: (u: TUser) => void
  onAdd?: (u: TUser) => void
  onClose?: () => void
  onSearch?: (username: string) => void
  searchedUsers?: TUser[]
}

let Setter: FC<TSetter> = () => null

const TeamList: FC<TProps> = ({
  users,
  withSetter = false,
  layout,
  onRemove = log,
  onAdd = log,
  onSearch = log,
  onClose = log,
  searchedUsers = [],
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
        onClose={() => {
          onClose?.()
          setShowSetter(false)
        }}
        onSearch={onSearch}
        onAdd={onAdd}
        onRemove={onRemove}
        searchedUsers={searchedUsers}
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

export default memo(TeamList)
