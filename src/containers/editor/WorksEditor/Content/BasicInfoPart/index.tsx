import { FC, memo } from 'react'

import type { TWorks } from '@/spec'

import Checker from '@/components/Checker'
import Select from '@/components/Select'
import ArrowButton from '@/components/Buttons/ArrowButton'

import CoverUploader from './CoverUploader'

import {
  Wrapper,
  Section,
  Label,
  CheckWrapper,
  Hint,
  Input,
  SelectWrapper,
  Footer,
} from '../../styles/content/basic_info_part'

import { updateWorks, nextStep } from '../../logic'

const platformOptions = [
  { value: 'web', label: 'Web', desc: '网站，浏览器扩展等' },
  { value: 'ios', label: 'iOS', desc: 'App, 平板应用等' },
  { value: 'android', label: 'Android', desc: 'App, 平板应用等' },
  { value: 'mac', label: 'Mac' },
  { value: 'windows', label: 'Windows' },
  { value: 'cmd', label: '命令行', desc: '终端工具，unix / powershell 等' },
  { value: 'miniprogram', label: '小程序', desc: '微信小程序，头条小程序等' },
  { value: 'other', label: '其他' },
]

type TProps = {
  works: TWorks
}

const BasicInfoPart: FC<TProps> = ({ works }) => {
  const valid = true

  return (
    <Wrapper>
      <Section>
        <CoverUploader />
      </Section>
      <Section>
        <Label>一句话描述</Label>
        <Input value="可能是最性感的开发者社区" />
      </Section>
      <Section>
        <Label>
          <div>运行平台</div>
          <Hint>可多选</Hint>
        </Label>
        <SelectWrapper>
          <Select options={platformOptions} closeMenuOnSelect={false} isMulti />
        </SelectWrapper>
      </Section>
      <Section>
        <Label>标签(两级?)</Label>
        <Input value="React-Select" />
      </Section>
      <Section>
        <Label>
          <div>地址</div>
          <Hint>访问 / 下载地址</Hint>
        </Label>
        <Input value="https://" />
      </Section>
      <Section>
        <Label>是否是独立开发 ?</Label>
        <CheckWrapper>
          <Checker
            checked
            onChange={(checked) => {
              console.log('others: ', checked)
            }}
            size="small"
          >
            有其他参与者
          </Checker>
        </CheckWrapper>
      </Section>
      <Section>
        <Label>是开源的吗 ?</Label>
        <CheckWrapper>
          <Checker
            checked={works.isOSS}
            onChange={(checked) => updateWorks('isOSS', checked)}
            size="small"
          >
            已开源
          </Checker>
        </CheckWrapper>
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
