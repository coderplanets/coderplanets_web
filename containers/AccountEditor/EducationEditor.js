import React from 'react'

import FormItem from 'components/FormItem'
import Maybe from 'components/Maybe'
import { Space } from 'components/BaseStyled'
import { ICON_CMD } from 'config'

import { uid } from 'utils'
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

const FormBar = ({ label, data, ratKey, mainChange, subChange }) => (
  <FormItemWrapper>
    <FormLable>{label}</FormLable>

    <FormInput>
      <FormItem
        size="default"
        value={data.school}
        raw="school"
        ratKey={ratKey}
        placeholder="学校"
        onChange={mainChange}
        bottom="0"
      />
      <Space right="8px" />
      <FormItem
        size="default"
        value={data.major}
        placeholder="专业"
        onChange={subChange}
        bottom="0"
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

const EducationEditor = ({ user, ratKey, data }) => (
  <Wrapper>
    <FormBar
      label="教育经历:"
      data={data}
      ratKey={ratKey}
      mainChange={logic.updateBg.bind(this, 'educationBg', 'school')}
      subChange={logic.updateBg.bind(this, 'educationBg', 'major')}
    />
    <BackgroundList list={user.educationBackgrounds} />
  </Wrapper>
)

export default EducationEditor
