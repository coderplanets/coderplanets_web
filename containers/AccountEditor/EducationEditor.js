import React from 'react'

import { ICON_CMD } from '../../config'
import { Input, Maybe } from '../../components'

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

import { uid } from '../../utils'
import * as logic from './logic'

const FormItem = ({ label, data, mainChange, subChange }) => (
  <FormItemWrapper>
    <FormLable>{label}</FormLable>

    <FormInput>
      <Input
        size="default"
        value={data.school}
        placeholder="学校"
        onChange={mainChange}
      />
      &nbsp;&nbsp;
      <Input
        size="default"
        value={data.major}
        placeholder="专业"
        onChange={subChange}
      />
      <div onClick={logic.addBg.bind(this, 'education')}>
        <Adder src={`${ICON_CMD}/add.svg`} />
      </div>
    </FormInput>
  </FormItemWrapper>
)

const BackgroundList = ({ list }) => (
  <Maybe test={list}>
    <BackgroundsWrapper>
      {list.map(item => (
        <BackgroundItem key={uid.gen()}>
          <BgTitle>{item.school}</BgTitle>

          <Maybe test={item.major}>
            <React.Fragment>
              <BgDivider>·</BgDivider>
              <BgDesc>{item.major}</BgDesc>
            </React.Fragment>
          </Maybe>

          <div onClick={logic.removeEduBg.bind(this, item.school, item.major)}>
            <DeleteIcon src={`${ICON_CMD}/cross.svg`} />
          </div>
        </BackgroundItem>
      ))}
    </BackgroundsWrapper>
  </Maybe>
)

const EducationEditor = ({ user, data }) => (
  <Wrapper>
    <FormItem
      label="教育经历:"
      data={data}
      mainChange={logic.updateBg.bind(this, 'educationBg', 'school')}
      subChange={logic.updateBg.bind(this, 'educationBg', 'major')}
    />
    <BackgroundList list={user.educationBackgrounds} />
  </Wrapper>
)

export default EducationEditor
