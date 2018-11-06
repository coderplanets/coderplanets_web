/*
 *
 * GithubRepoPage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import Maybe from '../Maybe'
import MarkDownRender from '../MarkDownRender'
import ArticleHeader from '../ArticleHeader'
import BodyHeader from './BodyHeader'
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
} from './styles'

import { makeDebugger, THREAD } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:GithubRepoPage:index')
/* eslint-enable no-unused-vars */

const GithubRepoPage = ({
  repo,
  onSearch,
  onPublish,
  onSync,
  onReaction,
  onListReactionUsers,
  showPublishBtn,
  showSearchBtn,
  showSyncBtn,
}) => (
  <Wrapper>
    <ArticleHeader
      data={repo}
      author={repo.author}
      thread={THREAD.REPO}
      showStar={false}
      showLastSync
      onReaction={onReaction}
      onListReactionUsers={onListReactionUsers}
    />
    <BodyWrapper>
      <BodyHeader />
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
        <PublishButton type="primary" onClick={onPublish}>
          发布
        </PublishButton>
      </Maybe>
    </Footer>
  </Wrapper>
)

GithubRepoPage.propTypes = {
  repo: PropTypes.object.isRequired,
  onPublish: PropTypes.func,
  onSearch: PropTypes.func,
  onSync: PropTypes.func,

  onReaction: PropTypes.func,
  onListReactionUsers: PropTypes.func,

  showPublishBtn: PropTypes.bool,
  showSearchBtn: PropTypes.bool,
  showSyncBtn: PropTypes.bool,
}

GithubRepoPage.defaultProps = {
  onPublish: debug,
  onSearch: debug,
  onSync: debug,

  onReaction: debug,
  onListReactionUsers: debug,

  showPublishBtn: false,
  showSearchBtn: false,
  showSyncBtn: false,
}

export default GithubRepoPage
