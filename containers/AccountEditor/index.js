/*
 *
 * AccountEditor
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import { Input, Button, Icon } from 'antd'

import { ICON_CMD } from '../../config'
// import Link from 'next/link'

import StatusBox from '../../components/StatusBox'

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

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:AccountEditor')

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
        <DudeIcon src={`${ICON_CMD}/dude.svg`} value={value} />
      </Dude>
      <Girl onClick={logic.sexChange.bind(this, 'girl')}>
        <GirlIcon src={`${ICON_CMD}/girl.svg`} value={value} />
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
  componentDidMount() {
    const { accountEditor } = this.props
    logic.init(accountEditor)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { accountEditor } = this.props

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
        <div onClick={logic.goBack}>
          <BackIcon src={`${ICON_CMD}/goback.svg`} />
        </div>
        {/* eslint-enable */}
        <Avatar src={editUserData.avatar} />
        <div>
          <FormItem
            label="昵称:"
            value={editUserData.nickname}
            onChange={logic.inputOnChange.bind(this, 'nickname')}
          />
          <FormItem
            label="城市:"
            value={editUserData.location}
            onChange={logic.inputOnChange.bind(this, 'location')}
          />
        </div>

        <WorkEditor user={editUserData} data={workBgData} ratKey={ratKey} />
        <EducationEditor
          user={editUserData}
          data={educationBgData}
          ratKey={ratKey}
        />
        <div>
          <FormItem
            label="邮箱:"
            value={editUserData.email}
            onChange={logic.inputOnChange.bind(this, 'email')}
          />
        </div>
        <SocialEditor show={showSocials} user={editUserData} />
        <div>
          <SexItem label="性别:" value={editUserData.sex} />
          <FormItem
            label="简介:"
            textarea
            value={editUserData.bio}
            onChange={logic.inputOnChange.bind(this, 'bio')}
          />
        </div>

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
            <Button type="primary">
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
