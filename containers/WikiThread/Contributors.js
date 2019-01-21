import React from 'react'
import TimeAgo from 'timeago-react'
import { Button } from 'antd'

import DotDivider from 'components/DotDivider'
import ContributorList from 'components/ContributorList'

import {
  Wrapper,
  NoteWrapper,
  NoteTitle,
  NoteDivider,
  NoteDesc,
  FootNote,
  SycNote,
} from './styles/contributors'

import * as logic from './logic'

const Note = () => (
  <NoteWrapper>
    <NoteTitle>本页贡献者</NoteTitle>
    <NoteDivider />
    <NoteDesc>参与编辑后你的 GitHub 头像会同步在这里, 特此感谢.</NoteDesc>
  </NoteWrapper>
)

const Contributors = ({ users, views, lastSync }) => (
  <Wrapper>
    <Note />
    <ContributorList
      users={users}
      addContributor={logic.addContributor}
      showAdder
    />

    <FootNote>
      <SycNote>
        浏览: {views}
        <DotDivider />
        最后同步:&nbsp;
        <TimeAgo datetime={lastSync || ''} locale="zh_CN" />
      </SycNote>
      <br />
      <Button
        size="small"
        type="primary"
        ghost
        onClick={logic.syncWikiFromGithub}
      >
        同步 wiki
      </Button>
    </FootNote>
  </Wrapper>
)

export default Contributors
