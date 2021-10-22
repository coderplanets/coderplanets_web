import { FC, memo } from 'react'

import type { TTag, TCommunity } from '@/spec'

import { THREAD } from '@/constant'
import TagsList from '@/components/TagsList'
import Checker from '@/components/Checker'
import SubmitButton from '@/components/Buttons/SubmitButton'
import { SpaceGrow } from '@/components/Common'

import { Wrapper, ArticleFooter, PublishFooter } from './styles/footer'
import { nextStep } from './logic'

type TProps = {
  step: 'STEP_1' | 'STEP_2' | 'STEP_3'
  community: TCommunity
  tags: TTag[]
}

const Footer: FC<TProps> = ({ step, community, tags }) => {
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
          // submitState={submitState}
          okText="提 交"
          onPublish={console.log}
          onCancel={console.log}
        />
      </PublishFooter>
    </Wrapper>
  )
}

export default memo(Footer)
