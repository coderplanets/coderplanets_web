import React from 'react'

import FormItem from '@/components/FormItem'
import Maybe from '@/components/Maybe'
import { Space } from '@/components/Common'
import { ICON_CMD } from '@/config'

import {
  Wrapper,
  Adder,
  FormItemWrapper,
  FormLabel,
  FormInput,
  BackgroundsWrapper,
  BackgroundItem,
  BgTitle,
  BgDivider,
  BgDesc,
  DeleteIcon,
} from './styles/background_inputer'

import { addBackground, removeEduBackground, updateBackground } from './logic'

const FormBar = ({ label, data, ratKey, mainChange, subChange }) => (
  <FormItemWrapper>
    <FormLabel>{label}</FormLabel>

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
      <div onClick={addBackground('education')}>
        <Adder src={`${ICON_CMD}/add.svg`} />
      </div>
    </FormInput>
  </FormItemWrapper>
)

const BackgroundList = ({ list }) => (
  <Maybe test={list}>
    <BackgroundsWrapper>
      {list.map((item) => (
        <BackgroundItem key={item.school + item.major}>
          <BgTitle>{item.school}</BgTitle>

          <Maybe test={item.major}>
            <React.Fragment>
              <BgDivider>·</BgDivider>
              <BgDesc>{item.major}</BgDesc>
            </React.Fragment>
          </Maybe>

          <div onClick={removeEduBackground(item.school, item.major)}>
            <DeleteIcon src={`${ICON_CMD}/cross.svg`} />
          </div>
        </BackgroundItem>
      ))}
    </BackgroundsWrapper>
  </Maybe>
)

const EducationBackgroundInputer = ({ user, ratKey, data }) => (
  <Wrapper>
    <FormBar
      label="教育经历:"
      data={data}
      ratKey={ratKey}
      mainChange={updateBackground('educationBg', 'school')}
      subChange={updateBackground('educationBg', 'major')}
    />
    <BackgroundList list={user.educationBackgrounds} />
  </Wrapper>
)

export default React.memo(EducationBackgroundInputer)
