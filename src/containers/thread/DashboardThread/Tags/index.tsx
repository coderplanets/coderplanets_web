import { FC, memo } from 'react'

import { mockTags } from '@/utils/mock'

import Portal from '../Portal'

import ThreadSelector from './ThreadSelector'
import CategorySelector from './CategorySelector'
import TagBar from './TagBar'

import { Wrapper, InnerWrapper, ContentWrapper } from '../styles/tags'

type TProps = {
  testid?: string
}

const Tags: FC<TProps> = ({ testid = 'tags' }) => {
  const tags = mockTags(12)

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
            <TagBar key={tag.id} tag={tag} />
          ))}
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(Tags)
