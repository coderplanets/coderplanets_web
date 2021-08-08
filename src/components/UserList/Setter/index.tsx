/*
 *
 * UserList
 *
 */

import { FC, memo, useState } from 'react'

import type { TUser } from '@/spec'
import { buildLog } from '@/utils/logger'
import Modal from '@/components/Modal'

import Header from './Header'
import SearchBox from './SearchBox'
import List from './List'

import type { TView } from '../spec'
import { Wrapper } from '../styles/setter'

/* eslint-disable-next-line */
const log = buildLog('c:UserList:index')

export type TProps = {
  testid?: string
  show: boolean
  users: TUser[]
  withSetter?: boolean
  onClose: () => void
}

const Setter: FC<TProps> = ({ show, users, onClose }) => {
  const [view, setView] = useState('list') // list or search

  return (
    <>
      <Modal width="400px" show={show} showCloseBtn onClose={onClose}>
        <Wrapper>
          <Header
            view={view as TView}
            goBack={() => setView('list')}
            goSearch={() => setView('search')}
          />
          {view === 'search' && <SearchBox />}
          <List
            users={users}
            withDelete={view === 'list'}
            withSelect={view === 'search'}
          />
        </Wrapper>
      </Modal>
    </>
  )
}

export default memo(Setter)
