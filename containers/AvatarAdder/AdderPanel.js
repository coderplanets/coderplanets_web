import React from 'react'

import { ICON_CMD } from '../../config'

import { GithubUserCard } from '../../components'

import {
  Wrapper,
  Header,
  LabelIcon,
  SearchInput,
  Result,
  Divider,
  Footer,
  AddBtn,
  AdderIcon,
} from './styles/adder_panel'

import * as logic from './logic'

const fakeUser = {
  avatar: 'https://avatars3.githubusercontent.com/u/7498434?s=40&v=4',
  bio:
    "everyday is the opportunity you don't get back, so live life to the fullest",
  nickname: 'nickname',
  location: 'location',
  company: 'company info',
}

const AdderPanel = () => (
  <Wrapper>
    <Header>
      <LabelIcon src={`${ICON_CMD}/github.svg`} />
      <SearchInput
        placeholder="github username"
        onChange={logic.inputOnChange}
        onKeyPress={logic.pressOnChange}
      />
    </Header>
    <Result>
      <Divider />
      <GithubUserCard user={fakeUser} />
      <Divider />
      <Footer>
        <AddBtn>
          <AdderIcon src={`${ICON_CMD}/add.svg`} />
          <div>添加</div>
        </AddBtn>
      </Footer>
    </Result>
  </Wrapper>
)

export default AdderPanel
