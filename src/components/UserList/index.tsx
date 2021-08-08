/*
 *
 * UserList
 *
 */

import { FC, Fragment, memo, useState } from 'react'

import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'
import Modal from '@/components/Modal'

import Header from './Header'
import SearchBox from './SearchBox'
import List from './List'

import type { TView } from './spec'
import { Wrapper, SettingIcon, MainPanel } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:UserList:index')

type TProps = {
  testid?: string
}

const UserList: FC<TProps> = ({ testid = 'user-list' }) => {
  const [view, setView] = useState('list') // list or search

  return (
    <Fragment>
      <Modal width="400px" show showCloseBtn>
        <MainPanel>
          <Header
            view={view as TView}
            goBack={() => setView('list')}
            goSearch={() => setView('search')}
          />
          {view === 'search' && <SearchBox />}
          <List withDelete={view === 'list'} withSelect={view === 'search'} />
        </MainPanel>
      </Modal>

      <Wrapper>
        <SettingIcon src={`${ICON}/shape/settings.svg`} />
      </Wrapper>
    </Fragment>
  )
}

export default memo(UserList)
