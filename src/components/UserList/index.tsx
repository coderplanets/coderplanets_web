/*
 *
 * UserList
 *
 */

import { FC, Fragment, memo } from 'react'

import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'
import Modal from '@/components/Modal'

import Header from './Header'
import List from './List'

import { Wrapper, SettingIcon, MainPanel } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:UserList:index')

type TProps = {
  testid?: string
}

const UserList: FC<TProps> = ({ testid = 'user-list' }) => {
  return (
    <Fragment>
      <Modal width="400px" show showCloseBtn>
        <MainPanel>
          <Header />
          <List />
        </MainPanel>
      </Modal>

      <Wrapper>
        <SettingIcon src={`${ICON}/shape/settings.svg`} />
      </Wrapper>
    </Fragment>
  )
}

export default memo(UserList)
