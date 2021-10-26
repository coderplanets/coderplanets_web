import { FC, memo } from 'react'

import type { TSelectOption } from '@/spec'

import { mockUsers } from '@/utils/mock'

import Checker from '@/widgets/Checker'
import Select from '@/widgets/Select'
import ArrowButton from '@/widgets/Buttons/ArrowButton'
import Button from '@/widgets/Buttons/Button'
import { Space } from '@/widgets/Common'
import UserList from '@/widgets/UserList'

import type { TInputData } from '../../spec'
import CoverUploader from './CoverUploader'
import ContactField from './ContactField'

import {
  Wrapper,
  Section,
  Label,
  TeamsWrapper,
  CheckWrapper,
  Hint,
  Input,
  SelectWrapper,
  SectionHint,
  Footer,
} from '../../styles/content/basic_info_part'

import { inputOnChange, nextStep, addSocial } from '../../logic'

const cityOptions = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' },
  { value: 'hangzhou', label: '杭州' },
  { value: 'nanjing', label: '南京' },
  { value: 'chengdu', label: '成都' },
  { value: 'wuhan', label: '武汉' },
  { value: 'changsha', label: '长沙' },
  { value: 'suzhou', label: '苏州' },
  { value: 'xian', label: '西安' },
  { value: 'oversea', label: '海外' },
  { value: 'others', label: '其他' },
]

type TProps = {
  inputData: TInputData
  socialOptions: TSelectOption[]
}

const BasicInfoPart: FC<TProps> = ({ inputData, socialOptions }) => {
  const valid = true
  const users = mockUsers(5)

  const { homeLink, desc, socialInfo } = inputData

  return (
    <Wrapper>
      <Section>
        <CoverUploader />
      </Section>
      <Section>
        <Label>主页地址</Label>
        <Input
          value={homeLink}
          placeholder="// 作品主页网址"
          onChange={(e) => inputOnChange(e, 'homeLink')}
        />
      </Section>
      <Section>
        <Label>一句话描述</Label>
        <Input
          value={desc}
          placeholder="// 一句话描述"
          onChange={(e) => inputOnChange(e, 'desc')}
        />
      </Section>
      <Section>
        <Label>
          <div>联系渠道</div>
          <Button size="tiny" ghost noBorder onClick={addSocial}>
            添加
          </Button>
        </Label>
        <SelectWrapper>
          <ContactField socialInfo={socialInfo} socialOptions={socialOptions} />
        </SelectWrapper>
      </Section>
      <Section>
        <Label>
          <div>盈利模式</div>
          <Hint>可多选</Hint>
        </Label>
        <CheckWrapper>
          <Checker
            checked
            onChange={(checked) => {
              console.log('others: ', checked)
            }}
          >
            广告分成
          </Checker>
          <Space right={24} />
          <Checker
            checked
            onChange={(checked) => {
              console.log('others: ', checked)
            }}
          >
            会员增值
          </Checker>
          <Space right={24} />
          <Checker
            onChange={(checked) => {
              console.log('others: ', checked)
            }}
          >
            SaaS
          </Checker>
          <Space right={24} />
          <Checker
            onChange={(checked) => {
              // 选择后其他都灭灯
              console.log('others: ', checked)
            }}
          >
            用爱发电
          </Checker>
          <Space right={24} />
          <Checker>其他</Checker>
        </CheckWrapper>
      </Section>
      <Section>
        <Label>项目类型</Label>
        <CheckWrapper>
          <Checker
            checked
            onChange={(checked) => {
              console.log('others: ', checked)
            }}
          >
            全职项目
          </Checker>
          <Space right={24} />
          <Checker
            onChange={(checked) => {
              console.log('others: ', checked)
            }}
          >
            业余项目（Side Project）
          </Checker>
        </CheckWrapper>
      </Section>

      <Section>
        <Label>
          <div>所在城市</div>
          <Hint>可选</Hint>
        </Label>
        <SelectWrapper>
          <Select
            options={cityOptions}
            closeMenuOnSelect={false}
            isMulti
            onChange={(c) => console.log('select c: ', c)}
          />
        </SelectWrapper>
        <SectionHint>
          选择所在城市后，将会在相关城市的子社区中看到该作品
        </SectionHint>
      </Section>

      <Section>
        <Label>团队成员</Label>
        <TeamsWrapper>
          <UserList users={users} layout="create-works" withSetter />
        </TeamsWrapper>
      </Section>

      <Footer>
        {valid && (
          <ArrowButton size="large" disabled={!valid} onClick={nextStep}>
            下一步
          </ArrowButton>
        )}
      </Footer>
    </Wrapper>
  )
}

export default memo(BasicInfoPart)
