import { FC, memo } from 'react'

import Checker from '@/components/Checker'
import YesOrNoButtons from '@/components/Buttons/YesOrNoButtons'

import { Wrapper, ArticleFooter, PublishFooter } from './styles/footer'

const Footer: FC = () => {
  return (
    <Wrapper>
      <ArticleFooter>社区 / Tags etc ...</ArticleFooter>
      <PublishFooter>
        <Checker size="small" dimWhenIdle>
          求助 / 问答类
        </Checker>
        <div>
          <YesOrNoButtons
            cancelText="取消"
            confirmText="发 布"
            onCancel={console.log}
          />
        </div>
      </PublishFooter>
    </Wrapper>
  )
}

export default memo(Footer)
