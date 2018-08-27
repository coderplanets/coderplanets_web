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
        placeholder="学校"
        onChange={onChange}
      />
      &nbsp;&nbsp;
      <Input
        size="default"
        defaultValue=""
        placeholder="专业"
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
        <BgTitle>斯坦福大学</BgTitle>
        <BgDivider>·</BgDivider>
        <BgDesc>电气工程师</BgDesc>
        <DeleteIcon src={`${ICON_ASSETS}/cmd/cross.svg`} />
      </BackgroundItem>

      <BackgroundItem>
        <BgTitle>加州理工</BgTitle>
        <BgDivider>·</BgDivider>
        <BgDesc>动物医学</BgDesc>
        <DeleteIcon src={`${ICON_ASSETS}/cmd/cross.svg`} />
      </BackgroundItem>
    </BackgroundsWrapper>
  )
}

const EducationEditor = ({ accountInfo }) => {
  return (
    <Wrapper>
      <FormItem
        label="教育经历:"
        value={accountInfo.qq}
        icon="qq"
        onChange={logic.profileChange('qq')}
      />
      <BackgroundList />
    </Wrapper>
  )
}

export default EducationEditor
