import { FC, memo } from 'react'

import { Br } from '@/widgets/Common'
import TagsBar from '@/containers/unit/TagsBar'
import { TAG_MODE } from '@/constant'

import { Wrapper, SearchInput, NewButton, BtnText } from './styles/filters'

const Filters: FC = () => {
  return (
    <Wrapper>
      <NewButton>
        <BtnText>发布新版本</BtnText>
      </NewButton>
      <Br bottom={15} />
      <SearchInput placeholder="搜索内容..." />
      <Br bottom={30} />
      <TagsBar onSelect={() => console.log} mode={TAG_MODE.LABEL} />
    </Wrapper>
  )
}

export default memo(Filters)
