import React from 'react'

import CheckBox from '@/components/CheckBox'
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
        <Label>运行平台</Label>
        <Input size="large" value="React-Select" bottom={0} />
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
          <CheckBox
            checked
            onChange={(checked) => {
              console.log('others: ', checked)
            }}
          >
            有其他参与者
          </CheckBox>
        </CheckWrapper>
      </Section>
      <Section>
        <Label>是开源的吗 ?</Label>
        <CheckWrapper>
          <CheckBox
            checked={works.isOSS}
            onChange={(checked) => updateWorks('isOSS', checked)}
          >
            已开源
          </CheckBox>
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
