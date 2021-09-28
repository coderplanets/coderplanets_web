import { FC, memo } from 'react'

import Checker from '@/components/Checker'
// import YesOrNoButtons from '@/components/Buttons/YesOrNoButtons'
import ArrowButton from '@/components/Buttons/ArrowButton'

import { Wrapper, ArticleFooter, PublishFooter } from './styles/footer'
import { nextStep } from './logic'

type TProps = {
  step: 'STEP_1' | 'STEP_2' | 'STEP_3'
}

const Footer: FC<TProps> = ({ step }) => {
  return (
    <Wrapper>
      <ArticleFooter>社区 / Tags etc ...</ArticleFooter>
      <PublishFooter>
        <Checker size="medium" dimWhenIdle>
          我是该博客作者
        </Checker>
        <div>
          <ArrowButton onClick={nextStep}>下一步</ArrowButton>
        </div>
      </PublishFooter>
    </Wrapper>
  )
}

export default memo(Footer)
