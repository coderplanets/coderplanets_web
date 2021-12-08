import { FC, memo } from 'react'

import { ICON } from '@/config'
import DivideText from '@/widgets/DivideText'

import {
  Wrapper,
  SearchBoxWrapper,
  SearchIcon,
  Placeholder,
  NoteWrapper,
  ContentWrapper,
  Item,
  Title,
  ArrowIcon,
} from './styles/search_menu'

const SearchMenu: FC = () => {
  return (
    <Wrapper>
      <SearchBoxWrapper>
        <SearchIcon src={`${ICON}/search.svg`} />
        <Placeholder>搜索更多内容</Placeholder>
      </SearchBoxWrapper>
      <NoteWrapper>
        <DivideText>常见问题 (wip)</DivideText>
      </NoteWrapper>
      <ContentWrapper>
        <Item>
          <Title>主题色要怎么改？</Title>
          <ArrowIcon />
        </Item>
        <Item>
          <Title>登陆方式都支持哪些？</Title>
          <ArrowIcon />
        </Item>
        <Item>
          <Title>数据支持导出吗？</Title>
          <ArrowIcon />
        </Item>
        <Item>
          <Title>插件系统的集成</Title>
          <ArrowIcon />
        </Item>
      </ContentWrapper>
    </Wrapper>
  )
}

export default memo(SearchMenu)
