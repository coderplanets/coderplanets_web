import { FC, memo } from 'react'

import type { TCopyright, TEditMode, TTag } from '@/spec'

import TagsList from '@/components/TagsList'
import YesOrNoButtons from '@/components/Buttons/YesOrNoButtons'
import Copyright from '@/components/Copyright'
import Checker from '@/components/Checker'
import { SpaceGrow } from '@/components/Common'

import { Wrapper, ArticleFooter, PublishFooter } from './styles/footer'
import { editOnChange, onPublish, gotoBackToCommunity } from './logic'

type TProps = {
  mode: TEditMode
  tags: TTag[]
  isQuestion: boolean
  copyRight: string
  publishing: boolean
}

const Footer: FC<TProps> = ({
  mode,
  tags,
  isQuestion,
  copyRight,
  publishing,
}) => {
  console.log('# footer tags  -> ', tags)

  return (
    <Wrapper>
      <ArticleFooter>
        <TagsList items={tags} mLeft={0} size="medium" withSetter />
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
          <YesOrNoButtons
            cancelText="取消"
            confirmText={mode === 'publish' ? '发 布' : '更 新'}
            onConfirm={onPublish}
            loading={publishing}
            onCancel={gotoBackToCommunity}
          />
        </div>
      </PublishFooter>
    </Wrapper>
  )
}

export default memo(Footer)
