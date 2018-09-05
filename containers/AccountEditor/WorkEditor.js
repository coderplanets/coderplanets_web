import React from 'react'
import R from 'ramda'
import shortid from 'shortid'

import { ICON_CMD } from '../../config'
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
        <Adder src={`${ICON_CMD}/add.svg`} />
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
          {R.isEmpty(item.title) ? null : (
            <React.Fragment>
              <BgDivider>·</BgDivider>
              <BgDesc>{item.title}</BgDesc>
            </React.Fragment>
          )}
          <div
            onClick={logic.removeWorkBg.bind(this, item.company, item.title)}
          >
            <DeleteIcon src={`${ICON_CMD}/cross.svg`} />
          </div>
        </BackgroundItem>
      ))}
    </BackgroundsWrapper>
  )
}

const WorkEditor = ({ user, data }) => (
  <Wrapper>
    <FormItem
      label="工作经历:"
      data={data}
      mainChange={logic.updateBg.bind(this, 'workBg', 'company')}
      subChange={logic.updateBg.bind(this, 'workBg', 'title')}
    />
    <BackgroundList list={user.workBackgrounds} />
  </Wrapper>
)

export default WorkEditor
