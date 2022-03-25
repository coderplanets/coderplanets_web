import { FC, memo } from 'react'

import { Br } from '@/widgets/Common'
import TagsBar from '@/containers/unit/TagsBar'

import { Wrapper, SearchInput, SearchBox } from './styles/filters'

const Filters: FC = () => {
  return (
    <Wrapper>
      <SearchBox>新增 更新记录</SearchBox>
      <Br bottom={15} />
      <SearchInput placeholder="搜索内容..." />
      <Br bottom={30} />
      <TagsBar onSelect={() => console.log} />
    </Wrapper>
  )
}

export default memo(Filters)
