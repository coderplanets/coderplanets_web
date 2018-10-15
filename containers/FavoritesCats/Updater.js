import React from 'react'
import { Input, Radio } from 'antd'

import { ICON_CMD } from '../../config'

import { SectionLabel, Space, Button, Popconfirm } from '../../components'

import {
  Wrapper,
  EditWrapper,
  FormItemWrapper,
  FormLable,
  FormInput,
  RadiosWrapper,
  Footer,
} from './styles/editor'

import { makeDebugger } from '../../utils'
import { categoryOnChange, onCategoryUpdate, onCategoryDelete } from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Favorites:Updater')
/* eslint-enable no-unused-vars */

const { TextArea } = Input
const RadioGroup = Radio.Group

const Updater = ({ data, show }) => (
  <Wrapper show={show} className="normal-form">
    <SectionLabel
      title="编辑收藏夹 - 前端框架"
      iconSrc={`${ICON_CMD}/edit.svg`}
    />
    <EditWrapper>
      <FormItemWrapper>
        <FormLable>标题</FormLable>
        <FormInput>
          <Input
            size="default"
            placeholder="收藏夹标题"
            value={data.title}
            onChange={categoryOnChange('title')}
          />
        </FormInput>
      </FormItemWrapper>
      <FormItemWrapper>
        <FormLable>描述</FormLable>
        <FormInput>
          <TextArea
            value={data.desc}
            onChange={categoryOnChange('desc')}
            placeholder="收藏什么的？"
            autosize={{ minRows: 2, maxRows: 3 }}
          />
        </FormInput>
      </FormItemWrapper>

      <FormItemWrapper>
        <FormLable>加锁</FormLable>
        <RadiosWrapper>
          <RadioGroup onChange={debug} value={1}>
            <Radio value={1}>公开</Radio>
            <Radio value={2}>不公开</Radio>
          </RadioGroup>
        </RadiosWrapper>
      </FormItemWrapper>
    </EditWrapper>
    <Footer>
      <Popconfirm
        content="删除收藏夹及包含的内容，是否继续?"
        onConfirm={onCategoryDelete}
      >
        <Button type="red" ghost>
          删除
        </Button>
      </Popconfirm>
      <Space right="10px" />
      <Button type="primary" onClick={onCategoryUpdate}>
        保存
      </Button>
    </Footer>
  </Wrapper>
)

export default Updater
