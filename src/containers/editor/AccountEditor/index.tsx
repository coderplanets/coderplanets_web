/*
 *
 * AccountEditor
 *
 */

import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Button from '@/widgets/Buttons/Button'
import StatusBox from '@/widgets/StatusBox'
import FormItem from '@/widgets/FormItem'
// import SocialInputer from './SocialInputer'
import SexInputer from './SexInputer'

import type { TStore } from './store'

import { Wrapper, AvatarPic, FormsWrapper, Divider, ActionBtns } from './styles'

import { useInit, inputOnChange, cancelEdit, updateConfirm } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:AccountEditor')

type TProps = {
  accountEditor?: TStore
}

const AccountEditorContainer: FC<TProps> = ({ accountEditor: store }) => {
  useInit(store)

  const { editUserData, updating, success, error, warn, statusMsg } = store

  return (
    <Wrapper className="normal-form">
      {editUserData.avatar && <AvatarPic src={editUserData.avatar} />}
      <FormsWrapper>
        <FormItem
          label="昵称:"
          value={editUserData.nickname}
          onChange={inputOnChange('nickname')}
        />
        <FormItem
          label="城市:"
          value={editUserData.location}
          onChange={inputOnChange('location')}
        />

        <FormItem
          label="邮箱:"
          value={editUserData.email}
          onChange={inputOnChange('email')}
        />
        {/* <SocialInputer show={showSocials} user={editUserData} /> */}
        {editUserData.sex && <SexInputer value={editUserData.sex} />}
        {/* <FormItem
          label="简介:"
          value={editUserData.bio}
          onChange={inputOnChange('bio')}
          textarea
        /> */}

        <StatusBox
          success={success}
          error={error}
          warn={warn}
          msg={statusMsg}
        />

        <Divider />
        <ActionBtns>
          <Button type="primary" ghost onClick={cancelEdit}>
            取消
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {updating ? (
            <Button type="primary">保存中 ...</Button>
          ) : (
            <Button type="primary" onClick={updateConfirm}>
              保存
            </Button>
          )}
        </ActionBtns>
      </FormsWrapper>
    </Wrapper>
  )
}

export default pluggedIn(AccountEditorContainer) as FC<TProps>
