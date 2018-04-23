/*
 *
 * AccountEditor
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { Input, Button } from 'antd'

import { ICON_ASSETS } from '../../config'
// import Link from 'next/link'

import { makeDebugger, storeSelector } from '../../utils'
import * as logic from './logic'
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
  DudeIcon,
  GirlIcon,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:AccountEditor')
/* eslint-enable no-unused-vars */

const { TextArea } = Input

const Avatar = ({ src }) => {
  return (
    <div>
      <AvatarPic src={src} />
    </div>
  )
}

const SexItem = ({ label }) => {
  return (
    <FormItemWrapper>
      <SexLable>{label}</SexLable>
      <SexInput>
        <DudeIcon path={`${ICON_ASSETS}/cmd/dude.svg`} />
        <GirlIcon path={`${ICON_ASSETS}/cmd/girl.svg`} />
      </SexInput>
    </FormItemWrapper>
  )
}

const FormItem = ({ label, textarea, value }) => {
  return (
    <FormItemWrapper>
      <FormLable>{label}</FormLable>

      <FormInput>
        {textarea ? (
          <TextArea
            value={value}
            placeholder={value}
            autosize={{ minRows: 3, maxRows: 6 }}
            onChange={console.log}
          />
        ) : (
          <Input size="default" value={value} onChange={console.log} />
        )}
      </FormInput>
    </FormItemWrapper>
  )
}

class AccountEditorContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.accountEditor)
  }

  render() {
    // TODO: should be accountInfo Copy
    const { accountInfo } = this.props.accountEditor
    console.log('accountInfo: ', accountInfo)
    return (
      <Wrapper>
        {/* eslint-disable */}
        <div onClick={logic.goBack}>
          <BackIcon path={`${ICON_ASSETS}/cmd/goback.svg`} />
        </div>
        {/* eslint-enable */}
        <Avatar src={accountInfo.avatar} />
        <FormItem label="昵称:" value={accountInfo.nickname} />
        <FormItem label="邮件:" />
        <FormItem label="城市:" />
        <FormItem label="公司:" />
        <FormItem label="学校:" />
        <FormItem label="QQ:" />
        <FormItem label="微博:" />
        <FormItem label="微信:" />
        <SexItem label="性别:" />
        <FormItem label="简介:" textarea value={accountInfo.bio} />

        <Divider />
        <ActionBtns>
          <Button type="primary" ghost onClick={logic.cancleEdit}>
            取消
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="primary">保存</Button>
        </ActionBtns>
      </Wrapper>
    )
  }
}

export default inject(storeSelector('accountEditor'))(
  observer(AccountEditorContainer)
)
