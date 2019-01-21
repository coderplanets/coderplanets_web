import React from 'react'
import { Button, Input, Radio } from 'antd'

import Popconfirm from 'components/Popconfirm'
import { Space } from 'components/BaseStyled'
import SectionLabel from 'components/SectionLabel'
import { ICON_CMD } from 'config'

import { makeDebugger } from 'utils'
import {
  Wrapper,
  EditWrapper,
  FormItemWrapper,
  FormLable,
  FormInput,
  RadiosWrapper,
  Footer,
} from './styles/editor'

import { categoryOnChange, onCategoryUpdate, onCategoryDelete } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Favorites:Updater')

const { TextArea } = Input
const RadioGroup = Radio.Group

const Updater = ({ data, show, hasLockAuth }) => (
  <Wrapper show={show} className="normal-form">
    <SectionLabel
      title={`编辑收藏夹 - ${data.title}`}
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

      {hasLockAuth ? (
        <FormItemWrapper>
          <FormLable>加锁</FormLable>
          <RadiosWrapper>
            <RadioGroup
              onChange={categoryOnChange('private')}
              value={data.private}
            >
              <Radio value={false}>公开</Radio>
              <Radio value>不公开</Radio>
            </RadioGroup>
          </RadiosWrapper>
        </FormItemWrapper>
      ) : null}
    </EditWrapper>
    <Footer>
      <Popconfirm
        content="删除收藏夹及包含的内容，是否继续?"
        onConfirm={onCategoryDelete}
      >
        <Button type="red">删除</Button>
      </Popconfirm>
      <Space right="10px" />
      <Button type="primary" onClick={onCategoryUpdate}>
        保存
      </Button>
    </Footer>
  </Wrapper>
)

export default Updater
