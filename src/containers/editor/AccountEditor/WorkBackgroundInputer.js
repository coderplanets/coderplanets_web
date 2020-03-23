import React from 'react'

import { ICON_CMD } from '@config'

import FormItem from '@components/FormItem'
import Maybe from '@components/Maybe'
import { Space } from '@components/BaseStyled'

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
} from './styles/background_inputer'

import { addBackground, removeWorkBackground, updateBackground } from './logic'
// import * as logic from './logic'

const FormBar = ({ label, data, ratKey, mainChange, subChange }) => (
  <FormItemWrapper>
    <FormLable>{label}</FormLable>

    <FormInput>
      <FormItem
        size="default"
        value={data.company}
        raw="company"
        ratKey={ratKey}
        placeholder="公司"
        onChange={mainChange}
        bottom="0"
      />
      <Space right="8px" />
      <FormItem
        size="default"
        value={data.title}
        placeholder="职位"
        onChange={subChange}
        bottom="0"
      />
      <div onClick={addBackground('work')}>
        <Adder src={`${ICON_CMD}/add.svg`} />
      </div>
    </FormInput>
  </FormItemWrapper>
)

const BackgroundList = ({ list }) => (
  <Maybe test={list}>
    <BackgroundsWrapper>
      {list.map(item => (
        <BackgroundItem key={item.company + item.title}>
          <BgTitle>{item.company}</BgTitle>
          <Maybe test={item.title}>
            <React.Fragment>
              <BgDivider>·</BgDivider>
              <BgDesc>{item.title}</BgDesc>
            </React.Fragment>
          </Maybe>
          <div onClick={removeWorkBackground(item.company, item.title)}>
            <DeleteIcon src={`${ICON_CMD}/cross.svg`} />
          </div>
        </BackgroundItem>
      ))}
    </BackgroundsWrapper>
  </Maybe>
)

const WorkBackgroundInputer = ({ user, ratKey, data }) => (
  <Wrapper>
    <FormBar
      label="工作经历:"
      data={data}
      ratKey={ratKey}
      mainChange={updateBackground('workBg', 'company')}
      subChange={updateBackground('workBg', 'title')}
    />
    <BackgroundList list={user.workBackgrounds} />
  </Wrapper>
)

export default React.memo(WorkBackgroundInputer)
