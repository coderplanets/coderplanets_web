import { FC, memo } from 'react'

import type { TPostLayout } from '@/spec'

import { Br } from '@/widgets/Common'
import OSSUploader from '@/widgets/OSSUploader'
import SocialEditor from '@/widgets/SocialEditor'

import Portal from '../Portal'
import SectionLabel from '../SectionLabel'
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
      <Portal title="关于社区" desc="社区基本信息，关于页面主要信息等。" />
      <Section>
        <SectionLabel title="基本信息" />
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
        <Label>官方主页</Label>
        <Inputer />
        <Label>社区 URL</Label>
        <Inputer />
        <SocialEditor />

        <Br bottom={40} />
        <SectionLabel title="其它信息" />
        <Label>社交媒体</Label>
        <Inputer />
        <Label>城市</Label>
        <Inputer />
        <Label>技术栈</Label>
        <Inputer />
        <Label>媒体报道</Label>
        <Inputer />
      </Section>
    </Wrapper>
  )
}

export default memo(BasicInfo)
