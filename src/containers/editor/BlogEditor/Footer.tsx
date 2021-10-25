import { FC, memo } from 'react'

import type { TTag, TCommunity, TSubmitState, TEditMode } from '@/spec'

import { THREAD } from '@/constant'
import TagsList from '@/widgets/TagsList'
import Checker from '@/widgets/Checker'
import SubmitButton from '@/widgets/Buttons/SubmitButton'
import { SpaceGrow } from '@/widgets/Common'

import { Wrapper, ArticleFooter, PublishFooter } from './styles/footer'
import { onPublish } from './logic'

type TProps = {
  submitState: TSubmitState
  community: TCommunity
  tags: TTag[]
  mode: TEditMode
}

const Footer: FC<TProps> = ({ community, tags, submitState, mode }) => {
  return (
    <Wrapper>
      <ArticleFooter>
        {mode === 'publish' && (
          <TagsList
            items={tags}
            mLeft={0}
            size="medium"
            community={community}
            thread={THREAD.BLOG}
            withSetter
          />
        )}
      </ArticleFooter>

      <PublishFooter>
        {mode === 'publish' && (
          <Checker size="medium" dimWhenIdle>
            我是该博客作者
          </Checker>
        )}

        <SpaceGrow />
        <SubmitButton
          submitState={submitState}
          okText={mode === 'publish' ? '提 交' : '更 新'}
          onPublish={onPublish}
          onCancel={console.log}
        />
      </PublishFooter>
    </Wrapper>
  )
}

export default memo(Footer)
