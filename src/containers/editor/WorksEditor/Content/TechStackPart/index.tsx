import { FC, memo } from 'react'

import ArrowButton from '@/components/Buttons/ArrowButton'
import NoticeBar from '@/components/NoticeBar'

import {
  Wrapper,
  TechsWrapper,
  Footer,
} from '../../styles/content/tech_stack_part'

import { nextStep } from '../../logic'

const TechStackPart: FC = () => {
  const valid = true

  return (
    <Wrapper>
      <NoticeBar
        type="info"
        content="在技术社区，分享技术栈会受到更多关注和欢迎。"
      />
      <TechsWrapper>TechStackPart</TechsWrapper>
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

export default memo(TechStackPart)
