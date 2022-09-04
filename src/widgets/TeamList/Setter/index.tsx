/*
 *
 * TeamList
 *
 */

import { FC, memo, useEffect, useState } from 'react'

import type { TUser } from '@/spec'
import { buildLog } from '@/utils/logger'
import Modal from '@/widgets/Modal'

import Header from './Header'
import SearchBox from './SearchBox'
import List from './List'

import type { TView } from '../spec'
import { Wrapper, EmptyHint } from '../styles/setter'

/* eslint-disable-next-line */
const log = buildLog('w:TeamList:index')

export type TProps = {
  show: boolean
  users: TUser[]
  searchedUsers: TUser[]
  onClose: () => void
  onSearch: (username: string) => void
  onAdd: (u: TUser) => void
  onRemove: (u: TUser) => void
}

const Setter: FC<TProps> = ({
  show,
  users,
  searchedUsers,
  onSearch,
  onClose,
  onAdd,
  onRemove,
}) => {
  const [view, setView] = useState('list') // list or search

  useEffect(() => {
    return () => setView('list')
  }, [])

  return (
    <>
      <Modal width="400px" show={show} showCloseBtn onClose={onClose}>
        <Wrapper>
          <Header view={view as TView} goSearch={() => setView('search')} />
          {view === 'search' && <SearchBox onSearch={onSearch} />}
          {view === 'list' && users.length === 0 && (
            <EmptyHint>当前没有成员，需要添加新成员吗？</EmptyHint>
          )}
          <List
            users={view === 'list' ? users : searchedUsers}
            onRemove={onRemove}
            onAdd={(u) => {
              onAdd(u)
              setView('list')
            }}
            withDelete={view === 'list'}
            withSelect={view === 'search'}
          />
        </Wrapper>
      </Modal>
    </>
  )
}

export default memo(Setter)
