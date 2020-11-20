import React from 'react'

import { Radio } from '@/components/Switcher'
import CoverUploader from './CoverUploader'

import {
  Wrapper,
  Section,
  Label,
  Hint,
  Input,
} from '../../styles/content/basic_info_part'

const BasicInfoPart = () => {
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
          <Hint>网址 / 苹果商店 / 安卓商店 ..</Hint>
        </Label>
        <Input size="large" value="https://" />
      </Section>
      <Section>
        <Label>是否是独立开发 ?</Label>

        <Radio
          size="default"
          items={[
            {
              value: '有其他参与者',
              key: '1',
              dimOnActive: false,
            },
          ]}
          activeKey="0"
        />
      </Section>
      <Section>
        <Label>是开源的吗 ?</Label>
        <div>
          <Radio
            size="default"
            items={[
              {
                value: '已经开源',
                key: '1',
                dimOnActive: false,
              },
            ]}
            activeKey="0"
          />
        </div>
      </Section>
    </Wrapper>
  )
}

export default React.memo(BasicInfoPart)
