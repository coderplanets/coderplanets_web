import React from 'react'

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

const SearchMenu = () => {
  return (
    <Wrapper>
      <SearchBoxWrapper>
        <SearchIcon src={`${ICON}/search.svg`} />
        <Placeholder>搜索更多内容</Placeholder>
      </SearchBoxWrapper>
      <NoteWrapper>
        <DivideText>常见问题</DivideText>
      </NoteWrapper>
      <ContentWrapper>
        <Item>
          <Title>主题色要怎么改？</Title>
          <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} />
        </Item>
        <Item>
          <Title>登陆方式都支持哪些？</Title>
          <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} />
        </Item>
        <Item>
          <Title>数据支持导出吗？</Title>
          <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} />
        </Item>
        <Item>
          <Title>是否支持插件系统?</Title>
          <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} />
        </Item>
      </ContentWrapper>
    </Wrapper>
  )
}

export default React.memo(SearchMenu)
