import React from 'react'
import { Button, Input, Radio } from 'antd'
import 'antd/lib/radio/style/index.css'
import 'antd/lib/input/style/index.css'

import { Space } from '@components/BaseStyled'
import SectionLabel from '@components/SectionLabel'
import { ICON_CMD } from '@config'

import { buildLog } from '@utils'
import {
  Wrapper,
  EditWrapper,
  FormItemWrapper,
  FormLable,
  FormInput,
  RadiosWrapper,
  Footer,
} from './styles/editor'

import { categoryOnChange, onCategoryCreate, onModalClose } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:FavoritesCats:Creator')

const { TextArea } = Input
const RadioGroup = Radio.Group

const Creator = ({ data, show, hasLockAuth }) => (
  <Wrapper show={show} className="normal-form">
    <SectionLabel title="创建收藏夹" iconSrc={`${ICON_CMD}/edit.svg`} />
    <EditWrapper>
      <FormItemWrapper>
        <FormLable>标题</FormLable>
        <FormInput>
          <Input
            size="default"
            placeholder="收藏夹标题 #必填#"
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

      {hasLockAuth && (
        <FormItemWrapper>
          <FormLable>隐私</FormLable>
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
      )}
    </EditWrapper>
    <Footer>
      <Button type="primary" ghost onClick={onModalClose}>
        取消
      </Button>
      <Space right="10px" />
      <Button type="primary" onClick={onCategoryCreate}>
        保存
      </Button>
    </Footer>
  </Wrapper>
)

export default Creator
