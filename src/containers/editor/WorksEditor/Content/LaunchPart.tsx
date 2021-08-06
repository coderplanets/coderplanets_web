import { FC, memo } from 'react'

import { ICON } from '@/config'
import ArrowButton from '@/components/Buttons/ArrowButton'

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

const LaunchPart: FC = () => {
  const valid = true

  return (
    <Wrapper>
      <ContentWrapper>
        <PublishIcon src={`${ICON}/edit/publish-rocket.svg`} />
        <ThxTitle>感谢你将作品发布到这里，祝一切顺利。</ThxTitle>
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
        {valid && (
          <ArrowButton size="large" direction="left" onClick={nextStep}>
            返回作品集市
          </ArrowButton>
        )}
      </Footer>
    </Wrapper>
  )
}

export default memo(LaunchPart)
