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
      <div onClick={logic.addBg.bind(this, 'work')}>
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
          <BgTitle>{item.company}</BgTitle>
          <Maybe test={item.title}>
            <React.Fragment>
              <BgDivider>·</BgDivider>
              <BgDesc>{item.title}</BgDesc>
            </React.Fragment>
          </Maybe>
          <div
            onClick={logic.removeWorkBg.bind(this, item.company, item.title)}
          >
            <DeleteIcon src={`${ICON_CMD}/cross.svg`} />
          </div>
        </BackgroundItem>
      ))}
    </BackgroundsWrapper>
  </Maybe>
)
const WorkEditor = ({ user, ratKey, data }) => (
  <Wrapper>
    <FormBar
      label="工作经历:"
      data={data}
      ratKey={ratKey}
      mainChange={logic.updateBg.bind(this, 'workBg', 'company')}
      subChange={logic.updateBg.bind(this, 'workBg', 'title')}
    />
    <BackgroundList list={user.workBackgrounds} />
  </Wrapper>
)

export default WorkEditor
