import { FC, memo } from 'react'

import type { TWorks } from '@/spec'

import { mockUsers } from '@/utils/mock'

import Checker from '@/widgets/Checker'
import Select from '@/widgets/Select'
import { Space } from '@/widgets/Common'
import ArrowButton from '@/widgets/Buttons/ArrowButton'
import UserList from '@/widgets/UserList'

import CoverUploader from './CoverUploader'

import {
  Wrapper,
  Section,
  Label,
  TeamsWrapper,
  CheckWrapper,
  Hint,
  Input,
  SelectWrapper,
  Footer,
} from '../../styles/content/basic_info_part'

import { updateWorks, nextStep } from '../../logic'

const socialOptions = [
  { value: 'blog', label: 'Blog', desc: '官方、团队博客' },
  { value: 'twitter', label: 'Twitter' },
  { value: 'github', label: 'Github' },
  { value: 'wechat', label: '微信', desc: 'WeChat' },
  { value: 'weibo', label: '微博', desc: 'Weibo' },
  { value: '邮箱', label: 'E-mail' },
]

type TProps = {
  works: TWorks
}

const BasicInfoPart: FC<TProps> = ({ works }) => {
  const valid = true
  const users = mockUsers(5)

  return (
    <Wrapper>
      <Section>
        <CoverUploader />
      </Section>
      <Section>
        <Label>主页地址</Label>
        <Input
          value={works.desc}
          placeholder="// 作品主页网址"
          onChange={(e) => updateWorks('desc', e.target.value)}
        />
      </Section>
      <Section>
        <Label>一句话描述</Label>
        <Input
          value={works.desc}
          placeholder="// 一句话描述"
          onChange={(e) => updateWorks('desc', e.target.value)}
        />
      </Section>
      <Section>
        <Label>
          <div>联系我们</div>
          <Hint>添加</Hint>
        </Label>
        <SelectWrapper>
          <Select options={socialOptions} closeMenuOnSelect={false} isMulti />
        </SelectWrapper>
      </Section>
      <Section>
        <Label>盈利模式</Label>
        <CheckWrapper>
          <Checker
            checked
            onChange={(checked) => {
              console.log('others: ', checked)
            }}
          >
            广告
          </Checker>
          <Space right={20} />
          <Checker
            checked
            onChange={(checked) => {
              console.log('others: ', checked)
            }}
          >
            会员增值
          </Checker>
          <Space right={20} />
          <Checker
            onChange={(checked) => {
              console.log('others: ', checked)
            }}
          >
            SaaS
          </Checker>
          <Space right={20} />
          <Checker
            onChange={(checked) => {
              // 选择后其他都灭灯
              console.log('others: ', checked)
            }}
          >
            用爱发电
          </Checker>
          <Space right={20} />
          <Checker>其他</Checker>
        </CheckWrapper>
      </Section>
      <Section>
        <Label>工作状态</Label>
        <CheckWrapper>
          <Checker
            checked
            onChange={(checked) => {
              console.log('others: ', checked)
            }}
          >
            全职
          </Checker>
          <Space right={20} />
          <Checker
            checked
            onChange={(checked) => {
              console.log('others: ', checked)
            }}
          >
            兼职
          </Checker>
          <Space right={20} />
        </CheckWrapper>
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
