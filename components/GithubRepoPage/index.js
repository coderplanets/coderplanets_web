/*
 *
 * GithubRepoPage
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'
import Maybe from '@components/Maybe'
import MarkDownRender from '@components/MarkDownRender'

import Header from './Header'
import StatesContainers from './StatesContainers'

import {
  Wrapper,
  BodyWrapper,
  DescriptionWrapper,
  HomepageLink,
  ReadmeWrapper,
  Footer,
  SearchButton,
  SyncButton,
  PublishButton,
  ReadonlyHolder,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:GithubRepoPage:index')

const GithubRepoPage = ({
  repo,
  onSearch,
  onPublish,
  onSync,
  showPublishBtn,
  showSearchBtn,
  showSyncBtn,
  viewerHeader,
  bodyHeader,
  publishing,
  readOnly,
}) => (
  <Wrapper>
    {!readOnly ? (
      <React.Fragment>{viewerHeader}</React.Fragment>
    ) : (
      <ReadonlyHolder />
    )}
    <BodyWrapper>
      {!readOnly && <React.Fragment>{bodyHeader} </React.Fragment>}
      <Header repo={repo} />
      <DescriptionWrapper>
        {repo.desc}
        <HomepageLink>{repo.homepageUrl}</HomepageLink>
      </DescriptionWrapper>
      <StatesContainers repo={repo} />
      <ReadmeWrapper>
        <MarkDownRender body={repo.readme || ''} />
      </ReadmeWrapper>
    </BodyWrapper>
    <Footer show={showSearchBtn || showSyncBtn || showPublishBtn}>
      <Maybe test={showSearchBtn}>
        <SearchButton type="primary" ghost onClick={onSearch}>
          重新搜索
        </SearchButton>
      </Maybe>
      <Maybe test={showSyncBtn}>
        <SyncButton type="primary" ghost onClick={onSync}>
          同步仓库
        </SyncButton>
      </Maybe>
      <Maybe test={showPublishBtn}>
        {publishing ? (
          <PublishButton type="primary">发布中...</PublishButton>
        ) : (
          <PublishButton type="primary" onClick={onPublish}>
            发布
          </PublishButton>
        )}
      </Maybe>
    </Footer>
  </Wrapper>
)

GithubRepoPage.propTypes = {
  repo: T.object.isRequired,
  onPublish: T.func,
  onSearch: T.func,
  onSync: T.func,

  showPublishBtn: T.bool,
  showSearchBtn: T.bool,
  showSyncBtn: T.bool,

  viewerHeader: T.node,
  bodyHeader: T.node,

  publishing: T.bool,
  readOnly: T.bool,
}

GithubRepoPage.defaultProps = {
  onPublish: log,
  onSearch: log,
  onSync: log,

  showPublishBtn: false,
  showSearchBtn: false,
  showSyncBtn: false,
  viewerHeader: <div />,
  bodyHeader: <div />,

  publishing: false,
  readOnly: false,
}

export default GithubRepoPage
