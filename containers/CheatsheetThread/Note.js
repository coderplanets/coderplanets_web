import React from 'react'
import { Button } from 'antd'

import { COMMUNITY_CHEATSHEET } from 'config'

import DotDivider from 'components/DotDivider'
import ContributorList from 'components/ContributorList'

import {
  Wrapper,
  Divider,
  Text,
  Title,
  JoinText,
  ViewsText,
  SyncWrapper,
} from './styles/note'

// import fakeusers from './fakeusers'
import { syncCheetsheetFromGithub, addContributor } from './logic'

const Note = ({ isLogin, communityRaw, contributors, views }) => (
  <Wrapper>
    <Divider />
    <Text>
      <Title>本页贡献者</Title> <DotDivider />{' '}
      <JoinText
        href={`${COMMUNITY_CHEATSHEET}/${communityRaw}.md`}
        rel="noopener noreferrer"
        target="_blank"
      >
        参与编辑
      </JoinText>
      {views && <ViewsText>浏览: {views}</ViewsText>}
    </Text>
    <ContributorList
      passport="root"
      fallbackProps="readOnly"
      users={contributors}
      addContributor={addContributor}
    />
    <SyncWrapper>
      {isLogin && (
        <Button
          size="small"
          type="primary"
          ghost
          onClick={syncCheetsheetFromGithub}
        >
          同步 cheatseet
        </Button>
      )}
    </SyncWrapper>
  </Wrapper>
)

export default Note
