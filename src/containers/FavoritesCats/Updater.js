import React from 'react'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { Radio } from '@components/Switcher'
import Input from '@components/Input'
import { Button } from '@components/Buttons'

import Tooltip from '@components/Tooltip'
import { Space } from '@components/Common'
import SectionLabel from '@components/SectionLabel'

import {
  Wrapper,
  EditWrapper,
  FormItemWrapper,
  FormLable,
  FormInput,
  RadiosWrapper,
  Footer,
} from './styles/editor'

import {
  categoryOnChange,
  privateOnChange,
  onCategoryUpdate,
  onCategoryDelete,
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Favorites:Updater')

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
          <Input
            value={data.desc}
            onChange={categoryOnChange('desc')}
            placeholder="收藏什么的？"
            behavior="textarea"
          />
        </FormInput>
      </FormItemWrapper>

      {hasLockAuth && (
        <FormItemWrapper>
          <FormLable>隐私</FormLable>
          <RadiosWrapper>
            <Radio
              items={[
                {
                  value: '公开',
                  key: false,
                },
                {
                  value: '不公开',
                  key: true,
                  dimOnActive: true,
                },
              ]}
              activeKey={data.private}
              onChange={privateOnChange}
            />
          </RadiosWrapper>
        </FormItemWrapper>
      )}
    </EditWrapper>
    <Footer>
      <Tooltip
        content="删除收藏夹及包含的内容，是否继续?"
        trigger="click"
        hideOnClick={false}
        behavior="confirm"
        onConfirm={onCategoryDelete}
      >
        <Button type="red" ghost>
          删除
        </Button>
      </Tooltip>
      <Space right="10px" />
      <Button type="primary" onClick={onCategoryUpdate}>
        保存
      </Button>
    </Footer>
  </Wrapper>
)

export default React.memo(Updater)
