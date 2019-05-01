/*
 *
 * AccountEditor
 *
 */

import React from 'react'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'
import { Button, Icon } from 'antd'

import StatusBox from 'components/StatusBox'
import FormItem from 'components/FormItem'
import { ICON_CMD } from 'config'
// import Link from 'next/link'

import { makeDebugger, storePlug } from 'utils'
import WorkBackgroundInputer from './WorkBackgroundInputer'
import EducationBackgroundInputer from './EducationBackgroundInputer'
import SocialInputer from './SocialInputer'
import SexInputer from './SexInputer'

import {
  Wrapper,
  BackIcon,
  AvatarPic,
  FormsWrapper,
  Divider,
  ActionBtns,
} from './styles'

import {
  useInit,
  goBack,
  inputOnChange,
  cancleEdit,
  updateConfirm,
} from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:AccountEditor')

const AccountEditorContainer = ({ accountEditor }) => {
  useInit(accountEditor)

  const {
    showSocials,
    editUserData,
    educationBgData,
    workBgData,
    updating,
    success,
    error,
    warn,
    statusMsg,
    ratKey,
  } = accountEditor

  return (
    <Wrapper className="normal-form">
      {/* eslint-disable */}
      <div onClick={goBack}>
        <BackIcon src={`${ICON_CMD}/goback.svg`} />
      </div>
      {/* eslint-enable */}
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

        <WorkBackgroundInputer
          user={editUserData}
          data={workBgData}
          ratKey={ratKey}
        />
        <EducationBackgroundInputer
          user={editUserData}
          data={educationBgData}
          ratKey={ratKey}
        />
        <FormItem
          label="邮箱:"
          value={editUserData.email}
          onChange={inputOnChange('email')}
        />
        <SocialInputer show={showSocials} user={editUserData} />
        {editUserData.sex && <SexInputer value={editUserData.sex} />}
        <FormItem
          label="简介:"
          textarea
          value={editUserData.bio}
          onChange={inputOnChange('bio')}
        />

        <StatusBox
          success={success}
          error={error}
          warn={warn}
          msg={statusMsg}
        />

        <Divider />
        <ActionBtns>
          <Button type="primary" ghost onClick={cancleEdit}>
            取消
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {updating ? (
            <Button type="primary">
              <Icon type="loading" /> 保存中
            </Button>
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

export default inject(storePlug('accountEditor'))(
  observer(AccountEditorContainer)
)
