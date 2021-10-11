import { FC, memo } from 'react'

import YesOrNoButtons from '@/components/Buttons/YesOrNoButtons'
import Copyright from '@/components/Copyright'
import Checker from '@/components/Checker'
import { SpaceGrow } from '@/components/Common'

import { Wrapper, ArticleFooter, PublishFooter } from './styles/footer'

const Footer: FC = () => {
  return (
    <Wrapper>
      <ArticleFooter>
        <div>社区 / Tags etc ...</div>
        <Checker size="medium" dimWhenIdle>
          求助 / 提问
        </Checker>
      </ArticleFooter>
      <PublishFooter>
        <Copyright mode="editable" />
        <SpaceGrow />
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
