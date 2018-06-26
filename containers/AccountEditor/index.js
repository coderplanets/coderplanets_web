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
import * as logic from './logic'
import { Input, Button, Icon, StatusBox } from '../../components'

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

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:AccountEditor')
/* eslint-enable no-unused-vars */

const { TextArea } = Input

const Avatar = ({ src }) => (
  <div>
    <AvatarPic src={src} />
  </div>
)

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
    logic.init(this.props.accountEditor)
  }

  render() {
    const {
      accountInfo,
      updating,
      success,
      error,
      warn,
      statusMsg,
    } = this.props.accountEditor

    /* debug('accountInfo editing->: ', accountInfo) */

    return (
      <Wrapper className="normal-form">
        {/* eslint-disable */}
        <div onClick={logic.goBack}>
          <BackIcon src={`${ICON_ASSETS}/cmd/goback.svg`} />
        </div>
        {/* eslint-enable */}
        <Avatar src={accountInfo.avatar} />
        <FormItem
          label="昵称:"
          value={accountInfo.nickname}
          onChange={logic.profileChange('nickname')}
        />
        <FormItem
          label="邮箱:"
          value={accountInfo.email}
          onChange={logic.profileChange('email')}
        />
        <FormItem
          label="城市:"
          value={accountInfo.location}
          onChange={logic.profileChange('location')}
        />
        <FormItem
          label="公司:"
          value={accountInfo.company}
          onChange={logic.profileChange('company')}
        />
        <FormItem
          label="学校:"
          value={accountInfo.education}
          onChange={logic.profileChange('education')}
        />
        <FormItem
          label="QQ:"
          value={accountInfo.qq}
          onChange={logic.profileChange('qq')}
        />
        <FormItem
          label="微博:"
          value={accountInfo.weibo}
          onChange={logic.profileChange('weibo')}
        />
        <FormItem
          label="微信:"
          value={accountInfo.weichat}
          onChange={logic.profileChange('weichat')}
        />
        <SexItem label="性别:" value={accountInfo.sex} />
        <FormItem
          label="简介:"
          textarea
          value={accountInfo.bio}
          onChange={logic.profileChange('bio')}
        />

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
