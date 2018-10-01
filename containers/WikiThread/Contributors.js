import React from 'react'

import { DotDivider } from '../../components'

import {
  Wrapper,
  NoteWrapper,
  NoteTitle,
  NoteDivider,
  NoteDesc,
  FootNote,
  SycNote,
} from './styles/contributors'

import AvatarList from './AvatarList'

const Note = () => (
  <NoteWrapper>
    <NoteTitle>本页贡献者</NoteTitle>
    <NoteDivider />
    <NoteDesc>参与编辑后你的 GitHub 头像会同步在这里, 以示感谢.</NoteDesc>
  </NoteWrapper>
)

const Contributors = () => (
  <Wrapper>
    <Note />
    <AvatarList />

    <FootNote>
      <SycNote>
        浏览: 228
        <DotDivider />
        最后同步: 3天前
      </SycNote>
    </FootNote>
  </Wrapper>
)

export default Contributors
