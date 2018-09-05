import React from 'react'

import { ICON_CMD } from '../../config'

import {
  Wrapper,
  EditWrapper,
  FormItemWrapper,
  FormLable,
  FormInput,
  RadiosWrapper,
  Footer,
} from './styles/editor'

import { SectionLabel, Input, Radio, Space, Button } from '../../components'

const { TextArea } = Input
const RadioGroup = Radio.Group

const Creator = ({ show }) => (
  <Wrapper show={show} className="normal-form">
    <SectionLabel title="创建收藏夹" iconSrc={`${ICON_CMD}/edit.svg`} />
    <EditWrapper>
      <FormItemWrapper>
        <FormLable>标题</FormLable>
        <FormInput>
          <Input
            size="default"
            placeholder="收藏夹标题"
            defaultValue="hello"
            onChange={console.log}
          />
        </FormInput>
      </FormItemWrapper>
      <FormItemWrapper>
        <FormLable>描述</FormLable>
        <FormInput>
          <TextArea
            placeholder="收藏什么的？"
            autosize={{ minRows: 2, maxRows: 3 }}
            onChange={console.log}
          />
        </FormInput>
      </FormItemWrapper>

      <FormItemWrapper>
        <FormLable>加锁</FormLable>
        <RadiosWrapper>
          <RadioGroup onChange={console.log} value={1}>
            <Radio value={1}>公开</Radio>
            <Radio value={2}>不公开</Radio>
          </RadioGroup>
        </RadiosWrapper>
      </FormItemWrapper>
    </EditWrapper>
    <Footer>
      <Button type="primary" ghost>
        取消
      </Button>
      <Space right="10px" />
      <Button type="primary">保存</Button>
    </Footer>
  </Wrapper>
)

export default Creator
