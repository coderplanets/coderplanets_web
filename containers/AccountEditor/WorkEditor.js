import React from 'react'

import { ICON_ASSETS } from '../../config'
import { Input } from '../../components'

import {
  Wrapper,
  Adder,
  FormItemWrapper,
  FormLable,
  FormInput,
  BackgroundsWrapper,
  BackgroundItem,
  BgTitle,
  BgDivider,
  BgDesc,
  DeleteIcon,
} from './styles/education_editor'

import * as logic from './logic'

const FormItem = ({ label, onChange }) => (
  <FormItemWrapper>
    <FormLable>{label}</FormLable>

    <FormInput>
      <Input
        size="default"
        defaultValue=""
        placeholder="公司"
        onChange={onChange}
      />
      &nbsp;&nbsp;
      <Input
        size="default"
        defaultValue=""
        placeholder="职位"
        onChange={onChange}
      />
      <Adder src={`${ICON_ASSETS}/cmd/add.svg`} />
    </FormInput>
  </FormItemWrapper>
)

const BackgroundList = () => {
  return (
    <BackgroundsWrapper>
      <BackgroundItem>
        <BgTitle>Google.inc</BgTitle>
        <BgDivider>·</BgDivider>
        <BgDesc>高级软件工程师</BgDesc>
        <DeleteIcon src={`${ICON_ASSETS}/cmd/cross.svg`} />
      </BackgroundItem>

      <BackgroundItem>
        <BgTitle>Facebook</BgTitle>
        <BgDivider>·</BgDivider>
        <BgDesc>测试工程师</BgDesc>
        <DeleteIcon src={`${ICON_ASSETS}/cmd/cross.svg`} />
      </BackgroundItem>
    </BackgroundsWrapper>
  )
}

const WorkEditor = ({ accountInfo }) => {
  return (
    <Wrapper>
      <FormItem
        label="工作经历:"
        value={accountInfo.qq}
        icon="qq"
        onChange={logic.profileChange('qq')}
      />
      <BackgroundList />
    </Wrapper>
  )
}

export default WorkEditor
