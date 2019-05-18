import React from 'react'
import TimeAgo from 'timeago-react'
import { Button } from 'antd'

import { COMMUNITY_WIKI } from '@config'

import DotDivider from '@components/DotDivider'
import ContributorList from '@components/ContributorList'

import {
  Wrapper,
  NoteWrapper,
  NoteTitle,
  NoteDivider,
  NoteDesc,
  FootNote,
  SycNote,
  JoinText,
} from './styles/contributors'

import * as logic from './logic'

const Note = ({ communityRaw }) => (
  <NoteWrapper>
    <NoteTitle>本页贡献者</NoteTitle>
    <NoteDivider />
    <NoteDesc>
      <JoinText
        href={`${COMMUNITY_WIKI}/${communityRaw}_wiki.md`}
        rel="noopener noreferrer"
        target="_blank"
      >
        参与编辑
      </JoinText>
      后你的 GitHub 头像会同步在这里, 特此感谢.
    </NoteDesc>
  </NoteWrapper>
)

const Contributors = ({ isLogin, users, views, lastSync, communityRaw }) => (
  <Wrapper>
    <Note communityRaw={communityRaw} />
    <ContributorList
      passport="root"
      fallbackProps="readOnly"
      users={users}
      addContributor={logic.addContributor}
    />

    <FootNote>
      {views && (
        <SycNote>
          浏览: {views}
          <DotDivider />
          最后同步:&nbsp;
          <TimeAgo datetime={lastSync || ''} locale="zh_CN" />
        </SycNote>
      )}

      <br />
      {isLogin && (
        <Button
          size="small"
          type="primary"
          ghost
          onClick={logic.syncWikiFromGithub}
        >
          同步 wiki
        </Button>
      )}
    </FootNote>
  </Wrapper>
)

export default Contributors
