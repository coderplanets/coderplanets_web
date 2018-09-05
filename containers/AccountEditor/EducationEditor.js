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

const BackgroundList = ({ list }) => {
  if (R.isEmpty(list)) return null
  return (
    <BackgroundsWrapper>
      {list.map(item => (
        <BackgroundItem key={shortid.generate()}>
          <BgTitle>{item.school}</BgTitle>
          {R.isEmpty(item.major) ? null : (
            <React.Fragment>
              <BgDivider>·</BgDivider>
              <BgDesc>{item.major}</BgDesc>
            </React.Fragment>
          )}
          <div onClick={logic.removeEduBg.bind(this, item.school, item.major)}>
            <DeleteIcon src={`${ICON_CMD}/cross.svg`} />
          </div>
        </BackgroundItem>
      ))}
    </BackgroundsWrapper>
  )
}

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
