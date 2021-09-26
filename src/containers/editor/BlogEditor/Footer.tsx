import { FC, memo } from 'react'

import Checker from '@/components/Checker'
import YesOrNoButtons from '@/components/Buttons/YesOrNoButtons'
import ArrowButton from '@/components/Buttons/ArrowButton'

import { Wrapper, ArticleFooter, PublishFooter } from './styles/footer'

const Footer: FC = () => {
  return (
    <Wrapper>
      <ArticleFooter>社区 / Tags etc ...</ArticleFooter>
      <PublishFooter>
        <Checker size="medium" dimWhenIdle>
          我是该博客作者
        </Checker>
        <div>
          <ArrowButton>下一步</ArrowButton>
        </div>
      </PublishFooter>
    </Wrapper>
  )
}

export default memo(Footer)
