import React from 'react'

import Maybe from '@/components/Maybe'
import GithubUserCard from '@/components/GithubUserCard'
import SearchingLabel from '@/components/SearchingLabel'
import { ICON_CMD } from '@/config'

import {
  Wrapper,
  Header,
  SearchWrapper,
  LabelIcon,
  SearchInput,
  Result,
  Divider,
  Footer,
  AddBtn,
  AdderIcon,
} from './styles/adder_panel'

import * as logic from './logic'

const AdderPanel = ({ user, searchValue, searching, onConfirm }) => (
  <Wrapper>
    <Header>
      <LabelIcon src={`${ICON_CMD}/github.svg`} />
      <SearchInput
        value={searchValue}
        placeholder="github username"
        onChange={logic.inputOnChange}
        onKeyPress={logic.onSearch}
      />
    </Header>
    <Maybe
      test={!searching}
      loading={
        <SearchWrapper>
          <SearchingLabel text="正在搜索..." />
        </SearchWrapper>
      }
    >
      <Maybe test={user}>
        <Result>
          <Divider />
          <GithubUserCard user={user} />
          <Divider />
          <Footer>
            <AddBtn onClick={onConfirm}>
              <AdderIcon src={`${ICON_CMD}/add.svg`} />
              <div>添加</div>
            </AddBtn>
          </Footer>
        </Result>
      </Maybe>
    </Maybe>
  </Wrapper>
)

export default React.memo(AdderPanel)
