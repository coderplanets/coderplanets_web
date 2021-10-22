import { FC, memo } from 'react'

import { ICON } from '@/config'
import type { TWorks } from '@/spec'

import ArrowButton from '@/widgets/Buttons/ArrowButton'

import {
  Wrapper,
  ContentWrapper,
  PublishIcon,
  ThxTitle,
  ThxDesc,
  UL,
  Li,
  Footer,
} from '../styles/content/launch_part'

import { nextStep } from '../logic'

type TProps = {
  works: TWorks
}

const LaunchPart: FC<TProps> = ({ works }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <PublishIcon src={`${ICON}/edit/publish-rocket.svg`} />
        <ThxTitle>感谢你将 {works.title} 发布到这里</ThxTitle>
        <ThxDesc>
          后续如遇到任何问题可以使用下列反馈渠道，我们会在第一时间处理。
        </ThxDesc>
        <UL>
          <Li>官方反馈论坛</Li>
          <Li>邮件: coderplanets@outlook.com</Li>
          <Li>官方微信群</Li>
        </UL>
      </ContentWrapper>

      <Footer>
        <ArrowButton size="large" direction="left" onClick={nextStep}>
          返回作品集市
        </ArrowButton>
        <ArrowButton size="large">创建 {works.title} 社区</ArrowButton>
      </Footer>
    </Wrapper>
  )
}

export default memo(LaunchPart)
