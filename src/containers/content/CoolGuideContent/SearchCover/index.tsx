import { FC, memo } from 'react'

import { Br } from '@/components/Common'

import Footer from '../Footer'
import InputBox from './InputBox'

import { Wrapper, Header, Title, Slogan } from '../styles/search_cover'

type TProps = {
  testid?: string
}

const SearchCover: FC<TProps> = ({ testid = 'search-cover' }) => {
  return (
    <Wrapper testid={testid}>
      <Header>
        <Title>「酷导航」</Title>
        <Slogan>实用指南，启发灵感，找到有趣</Slogan>
      </Header>
      <Br top={10} />
      <InputBox />
      <Br top={15} />
      <Footer mode="cover" />
    </Wrapper>
  )
}

export default memo(SearchCover)
