import { FC, memo } from 'react'

import { Br } from '@/widgets/Common'
import TagsBar from '@/containers/unit/TagsBar'
import { TAG_MODE } from '@/constant'

import {
  Wrapper,
  SearchInput,
  NewButton,
  PublishButton,
  BtnText,
} from './styles/filters'

const Filters: FC = () => {
  return (
    <Wrapper>
      <NewButton>
        <BtnText>获取最新版</BtnText>
      </NewButton>
      <Br bottom={15} />
      <PublishButton>
        <BtnText>新发布</BtnText>
      </PublishButton>
      <Br bottom={15} />
      <SearchInput placeholder="搜索内容" />
      <Br bottom={30} />
      <TagsBar onSelect={() => console.log} mode={TAG_MODE.LABEL} />
    </Wrapper>
  )
}

export default memo(Filters)
