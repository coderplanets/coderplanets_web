/*
 *
 * AccountEditor
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ICON_ASSETS } from '../../config'
// import Link from 'next/link'

import { makeDebugger, storePlug } from '../../utils'
import { Input, Button, Icon, StatusBox } from '../../components'

import WorkEditor from './WorkEditor'
import EducationEditor from './EducationEditor'
import SocialEditor from './SocialEditor'

import {
  Wrapper,
  BackIcon,
  AvatarPic,
  SexLable,
  FormItemWrapper,
  FormLable,
  FormInput,
  SexInput,
  Divider,
  ActionBtns,
  Dude,
  Girl,
  DudeIcon,
  GirlIcon,
} from './styles'

import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:AccountEditor')
/* eslint-enable no-unused-vars */

const { TextArea } = Input

const Avatar = ({ src }) => (
  <div>
    <AvatarPic src={src} />
  </div>
)

// TODO: move localComponent
const SexItem = ({ label, value }) => (
  <FormItemWrapper>
    <SexLable>{label}</SexLable>
    <SexInput>
      <Dude onClick={logic.sexChange.bind(this, 'dude')}>
        <DudeIcon src={`${ICON_ASSETS}/cmd/dude.svg`} value={value} />
      </Dude>
      <Girl onClick={logic.sexChange.bind(this, 'girl')}>
        <GirlIcon src={`${ICON_ASSETS}/cmd/girl.svg`} value={value} />
      </Girl>
    </SexInput>
  </FormItemWrapper>
)

// TODO: move localComponent
const FormItem = ({ label, textarea, value, onChange }) => (
  <FormItemWrapper>
    <FormLable>{label}</FormLable>

    <FormInput>
      {textarea ? (
        <TextArea
          value={value}
          placeholder={value}
          autosize={{ minRows: 3, maxRows: 6 }}
          onChange={onChange}
        />
      ) : (
        <Input size="default" value={value} onChange={onChange} />
      )}
    </FormInput>
  </FormItemWrapper>
)

class AccountEditorContainer extends React.Component {
  componentWillMount() {
    const { accountEditor } = this.props
    logic.init(accountEditor)
  }

  render() {
    const { accountEditor } = this.props

    const {
      showSocials,
      editingUserData,
      educationBgData,
      workBgData,
      updating,
      success,
      error,
      warn,
      statusMsg,
    } = accountEditor

    return (
      <Wrapper className="normal-form">
        {/* eslint-disable */}
        <div onClick={logic.goBack}>
          <BackIcon src={`${ICON_ASSETS}/cmd/goback.svg`} />
        </div>
        {/* eslint-enable */}
        <Avatar src={editingUserData.avatar} />
        <div>
          <FormItem
            label="昵称:"
            value={editingUserData.nickname}
            onChange={logic.profileChange('nickname')}
          />
          <FormItem
            label="城市:"
            value={editingUserData.location}
            onChange={logic.profileChange('location')}
          />
        </div>

        <WorkEditor user={editingUserData} data={workBgData} />
        <EducationEditor user={editingUserData} data={educationBgData} />
        <div>
          <FormItem
            label="邮箱:"
            value={editingUserData.email}
            onChange={logic.profileChange('email')}
          />
        </div>
        <SocialEditor show={showSocials} user={editingUserData} />
        <div>
          <SexItem label="性别:" value={editingUserData.sex} />
          <FormItem
            label="简介:"
            textarea
            value={editingUserData.bio}
            onChange={logic.profileChange('bio')}
          />
        </div>

        <br />
        <StatusBox
          success={success}
          error={error}
          warn={warn}
          msg={statusMsg}
        />

        <Divider />
        <ActionBtns>
          <Button type="primary" ghost onClick={logic.cancleEdit}>
            取消
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {updating ? (
            <Button type="primary" disabled>
              <Icon type="loading" /> 保存中
            </Button>
          ) : (
            <Button type="primary" onClick={logic.updateConfirm}>
              保存
            </Button>
          )}
        </ActionBtns>
      </Wrapper>
    )
  }
}

export default inject(storePlug('accountEditor'))(
  observer(AccountEditorContainer)
)
