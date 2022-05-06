import { FC, memo } from 'react'

import type {
  TCopyright,
  TEditMode,
  TTag,
  TCommunity,
  TSubmitState,
  TArticleThread,
} from '@/spec'

import { ARTICLE_THREAD } from '@/constant'

import TagsList from '@/widgets/TagsList'
import SubmitButton from '@/widgets/Buttons/SubmitButton'
import Copyright from '@/widgets/Copyright'
import Checker from '@/widgets/Checker'
import { SpaceGrow } from '@/widgets/Common'
import WordsCounter from '@/widgets/WordsCounter'

import type { TEditData } from './spec'
import { Wrapper, ArticleFooter, PublishFooter } from './styles/footer'
import { editOnChange, onPublish, onCancel, setWordsCountState } from './logic'

type TProps = {
  thread: TArticleThread
  mode: TEditMode
  editData: TEditData
  tags: TTag[]
  submitState: TSubmitState
  community: TCommunity
}

const Footer: FC<TProps> = ({
  thread,
  mode,
  editData,
  tags,
  submitState,
  community,
}) => {
  const { body, isQuestion, copyRight } = editData
  return (
    <Wrapper>
      <ArticleFooter>
        <TagsList
          items={tags}
          size="medium"
          community={community}
          thread={thread}
          withSetter={mode === 'publish'}
        />
        <WordsCounter
          body={body}
          bottom={3}
          onChange={setWordsCountState}
          min={40}
        />
        {thread === ARTICLE_THREAD.POST && (
          <Checker
            size="medium"
            dimWhenIdle
            checked={isQuestion}
            onChange={(v) => editOnChange(v, 'isQuestion')}
          >
            求助 / 提问
          </Checker>
        )}
      </ArticleFooter>
      <PublishFooter>
        <Copyright
          mode="editable"
          type={copyRight as TCopyright}
          onChange={(v) => editOnChange(v, 'copyRight')}
        />
        <SpaceGrow />
        <SubmitButton
          submitState={submitState}
          okText={mode === 'publish' ? '发 布' : '更 新'}
          onPublish={onPublish}
          onCancel={onCancel}
        />
      </PublishFooter>
    </Wrapper>
  )
}

export default memo(Footer)
