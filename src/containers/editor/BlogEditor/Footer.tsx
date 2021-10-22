import { FC, memo } from 'react'

import type { TTag, TCommunity, TSubmitState } from '@/spec'

import { THREAD } from '@/constant'
import TagsList from '@/widgets/TagsList'
import Checker from '@/widgets/Checker'
import SubmitButton from '@/widgets/Buttons/SubmitButton'
import { SpaceGrow } from '@/widgets/Common'

import { Wrapper, ArticleFooter, PublishFooter } from './styles/footer'
import { createBlog } from './logic'

type TProps = {
  submitState: TSubmitState
  community: TCommunity
  tags: TTag[]
}

const Footer: FC<TProps> = ({ community, tags, submitState }) => {
  return (
    <Wrapper>
      <ArticleFooter>
        <TagsList
          items={tags}
          mLeft={0}
          size="medium"
          community={community}
          thread={THREAD.BLOG}
          withSetter
        />
      </ArticleFooter>
      <PublishFooter>
        <Checker size="medium" dimWhenIdle>
          我是该博客作者
        </Checker>
        <SpaceGrow />
        <SubmitButton
          submitState={submitState}
          okText="提 交"
          onPublish={createBlog}
          onCancel={console.log}
        />
      </PublishFooter>
    </Wrapper>
  )
}

export default memo(Footer)
