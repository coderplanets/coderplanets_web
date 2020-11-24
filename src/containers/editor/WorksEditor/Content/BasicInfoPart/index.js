import React from 'react'

import Checker from '@/components/Checker'
import Select from '@/components/Select'
import { ArrowButton } from '@/components/Buttons'

import CoverUploader from './CoverUploader'

import {
  Wrapper,
  Section,
  Label,
  CheckWrapper,
  Hint,
  Input,
  Footer,
} from '../../styles/content/basic_info_part'

import { updateWorks, nextStep } from '../../logic'

const BasicInfoPart = ({ works }) => {
  const valid = true

  return (
    <Wrapper>
      <Section>
        <CoverUploader />
      </Section>
      <Section>
        <Label>一句话描述</Label>
        <Input size="large" value="可能是最性感的开发者社区" bottom={0} />
      </Section>
      <Section>
        <Label>
          <div>运行平台</div>
          <Hint>可多选</Hint>
        </Label>
        <Select />
      </Section>
      <Section>
        <Label>标签(两级?)</Label>
        <Input size="large" value="React-Select" bottom={0} />
      </Section>
      <Section>
        <Label>
          <div>地址</div>
          <Hint>访问 / 下载地址</Hint>
        </Label>
        <Input size="large" value="https://" />
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

export default React.memo(BasicInfoPart)
