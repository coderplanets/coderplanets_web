import { FC, memo } from 'react'

import Portal from '../Portal'

import ThreadSelector from './ThreadSelector'
import CategorySelector from './CategorySelector'
import TagBar from './TagBar'

import type { TTagSettings } from '../spec'
import { Wrapper, InnerWrapper, ContentWrapper } from '../styles/tags'

type TProps = {
  settings: TTagSettings
}

const Tags: FC<TProps> = ({ settings }) => {
  const { tags, editingTag } = settings

  return (
    <Wrapper>
      <Portal
        title="标签设置"
        desc="编辑各板块标签，标签分组，颜色名称等均可编辑。"
      />
      <InnerWrapper>
        <ThreadSelector />
        <ContentWrapper>
          <CategorySelector />
          {tags.map((tag) => (
            <TagBar key={tag.id} tag={tag} editingTag={editingTag} />
          ))}
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(Tags)
