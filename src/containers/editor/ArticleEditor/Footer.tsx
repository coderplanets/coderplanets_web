import { FC, memo } from 'react'

import type { TCopyright, TEditMode, TTag } from '@/spec'

import TagsList from '@/components/TagsList'
import YesOrNoButtons from '@/components/Buttons/YesOrNoButtons'
import Copyright from '@/components/Copyright'
import Checker from '@/components/Checker'
import { SpaceGrow } from '@/components/Common'
import WordsCounter from '@/components/WordsCounter'

import {
  Wrapper,
  ArticleFooter,
  PublishFooter,
  DonwWrapper,
  DoneIcon,
  DoneHint,
} from './styles/footer'
import { editOnChange, onPublish, onCancel } from './logic'

type TProps = {
  mode: TEditMode
  body: string
  tags: TTag[]
  isQuestion: boolean
  copyRight: string
  publishState: { publishing: boolean; publishDone: boolean }
}

const Footer: FC<TProps> = ({
  mode,
  body,
  tags,
  isQuestion,
  copyRight,
  publishState,
}) => {
  const { publishing, publishDone } = publishState
  // console.log('# footer tags  -> ', tags)

  return (
    <Wrapper>
      <ArticleFooter>
        <TagsList items={tags} mLeft={0} size="medium" withSetter />
        <WordsCounter
          body={body}
          onChange={(isValid) => console.log('counter valid?: ', isValid)}
        />
        <Checker
          size="medium"
          dimWhenIdle
          checked={isQuestion}
          onChange={(v) => editOnChange(v, 'isQuestion')}
        >
          求助 / 提问
        </Checker>
      </ArticleFooter>
      <PublishFooter>
        <Copyright
          mode="editable"
          type={copyRight as TCopyright}
          onChange={(v) => editOnChange(v, 'copyRight')}
        />
        <SpaceGrow />
        <div>
          {publishDone ? (
            <DonwWrapper>
              <DoneIcon />
              <DoneHint>已完成</DoneHint>
            </DonwWrapper>
          ) : (
            <YesOrNoButtons
              cancelText="取消"
              confirmText={mode === 'publish' ? '发 布' : '更 新'}
              onConfirm={onPublish}
              loading={publishing}
              onCancel={onCancel}
            />
          )}
        </div>
      </PublishFooter>
    </Wrapper>
  )
}

export default memo(Footer)
