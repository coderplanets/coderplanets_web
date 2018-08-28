import React from 'react'
import R from 'ramda'
import shortid from 'shortid'

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

const FormItem = ({ label, data, mainChange, subChange }) => (
  <FormItemWrapper>
    <FormLable>{label}</FormLable>

    <FormInput>
      <Input
        size="default"
        value={data.company}
        placeholder="公司"
        onChange={mainChange}
      />
      &nbsp;&nbsp;
      <Input
        size="default"
        value={data.title}
        placeholder="职位"
        onChange={subChange}
      />
      <div onClick={logic.addBg.bind(this, 'work')}>
        <Adder src={`${ICON_ASSETS}/cmd/add.svg`} />
      </div>
    </FormInput>
  </FormItemWrapper>
)

const BackgroundList = ({ list }) => {
  if (R.isEmpty(list)) return null
  return (
    <BackgroundsWrapper>
      {list.map(item => (
        <BackgroundItem key={shortid.generate()}>
          <BgTitle>{item.company}</BgTitle>
          <BgDivider>·</BgDivider>
          <BgDesc>{item.title}</BgDesc>
          <div
            onClick={logic.removeWorkBg.bind(this, item.company, item.title)}
          >
            <DeleteIcon src={`${ICON_ASSETS}/cmd/cross.svg`} />
          </div>
        </BackgroundItem>
      ))}
    </BackgroundsWrapper>
  )
}

const WorkEditor = ({ accountInfo, data }) => (
  <Wrapper>
    <FormItem
      label="工作经历:"
      data={data}
      mainChange={logic.updateBg.bind(this, 'workBg', 'company')}
      subChange={logic.updateBg.bind(this, 'workBg', 'title')}
    />
    <BackgroundList list={accountInfo.workBackgrounds} />
  </Wrapper>
)

export default WorkEditor
