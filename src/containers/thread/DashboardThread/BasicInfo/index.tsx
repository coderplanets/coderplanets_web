import { FC, memo } from 'react'

import type { TPostLayout } from '@/spec'

import { POST_LAYOUT } from '@/constant'

import { Br } from '@/widgets/Common'
import OSSUploader from '@/widgets/OSSUploader'

import Portal from '../Portal'
// import CheckLabel from '@/widgets/CheckLabel'

import {
  Wrapper,
  Section,
  Label,
  Inputer,
  LogoWrapper,
  Logo,
  Title,
  Desc,
} from '../styles/basic_info'

type TProps = {
  testid?: TPostLayout
}

const BasicInfo: FC<TProps> = ({ testid = 'basic-info' }) => {
  return (
    <Wrapper>
      <Portal title="基本信息" desc="社区基本信息，关于页面主要信息等。" />
      <Section>
        <Title>LOGO</Title>
        <LogoWrapper>
          <OSSUploader>
            <Logo />
          </OSSUploader>
        </LogoWrapper>
        <Desc>上传社区 Logo, 支持常见图片格式，200 KB以内。可选。</Desc>
        <Br bottom={30} />
        <Label>社区名称</Label>
        <Inputer />
        <Label>社区 URL</Label>
        <Inputer />
        <Label>主题色</Label>
      </Section>
    </Wrapper>
  )
}

export default memo(BasicInfo)
