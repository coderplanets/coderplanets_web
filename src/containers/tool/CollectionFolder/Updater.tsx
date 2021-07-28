import { FC, memo } from 'react'

import type { TCollectionFolder } from '@/spec'
import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'

import { Radio } from '@/components/Switcher'
import Input from '@/components/Input'
import { Button } from '@/components/Buttons'

import Tooltip from '@/components/Tooltip'
import { Space } from '@/components/Common'
import SectionLabel from '@/components/SectionLabel'

import {
  Wrapper,
  EditWrapper,
  FormItemWrapper,
  FormLabel,
  FormInput,
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

type TProps = {
  data: TCollectionFolder
  show: boolean
  hasLockAuth: boolean
}
const Updater: FC<TProps> = ({ data, show, hasLockAuth }) => (
  <Wrapper show={show} className="normal-form">
    <SectionLabel
      title={`编辑收藏夹 - ${data.title}`}
      iconSrc={`${ICON_CMD}/edit.svg`}
    />
    <EditWrapper>
      <FormItemWrapper>
        <FormLabel>标题</FormLabel>
        <FormInput>
          <Input
            placeholder="收藏夹标题"
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
        </FormItemWrapper>
      )}
    </EditWrapper>
    <Footer>
      <Tooltip
        content="删除收藏夹及包含的内容，是否继续?"
        trigger="click"
        hideOnClick={false}
        // behavior="confirm"
        // onConfirm={onCategoryDelete}
      >
        <Button type="red" ghost>
          删除
        </Button>
      </Tooltip>
      <Space right={10} />
      <Button type="primary" onClick={onCategoryUpdate}>
        保存
      </Button>
    </Footer>
  </Wrapper>
)

export default memo(Updater)
