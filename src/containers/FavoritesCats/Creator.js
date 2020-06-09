import React from 'react'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'

import { Radio } from '@/components/Switcher'
import Input from '@/components/Input'
import { Button } from '@/components/Buttons'

import { Space } from '@/components/Common'
import SectionLabel from '@/components/SectionLabel'

import {
  Wrapper,
  EditWrapper,
  FormItemWrapper,
  FormLabel,
  FormInput,
  RadiosWrapper,
  Footer,
} from './styles/editor'

import {
  categoryOnChange,
  privateOnChange,
  onCategoryCreate,
  onModalClose,
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:FavoritesCats:Creator')

const Creator = ({ data, show, hasLockAuth }) => (
  <Wrapper show={show} className="normal-form">
    <SectionLabel title="创建收藏夹" iconSrc={`${ICON_CMD}/edit.svg`} />
    <EditWrapper>
      <FormItemWrapper>
        <FormLabel>标题</FormLabel>
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
        <FormLabel>描述</FormLabel>
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
          <FormLabel>隐私</FormLabel>
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

export default React.memo(Creator)
