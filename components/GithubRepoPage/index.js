/*
 *
 * GithubRepoPage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import MarkDownRender from '../MarkDownRender'
import TopHeader from './TopHeader'
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

import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:GithubRepoPage:index')
/* eslint-enable no-unused-vars */

const GithubRepoPage = ({
  repo,
  onSearch,
  onPublish,
  onSync,
  showPublishBtn,
  showSearchBtn,
  showSyncBtn,
}) => (
  <Wrapper>
    <TopHeader />
    <BodyWrapper>
      <BodyHeader />
      <Header repo={repo} />
      <DescriptionWrapper>
        {repo.desc}
        <HomepageLink>{repo.homepageUrl}</HomepageLink>
      </DescriptionWrapper>
      <StatesContainers repo={repo} />
      <ReadmeWrapper>
        <MarkDownRender body={repo.readme} />
      </ReadmeWrapper>
    </BodyWrapper>
    <Footer>
      <SearchButton
        type="primary"
        ghost
        onClick={onSearch}
        show={showSearchBtn}
      >
        重新搜索
      </SearchButton>
      <SyncButton type="primary" ghost onClick={onSync} show={showSyncBtn}>
        同步仓库
      </SyncButton>
      <PublishButton type="primary" onClick={onPublish} show={showPublishBtn}>
        发布
      </PublishButton>
    </Footer>
  </Wrapper>
)

GithubRepoPage.propTypes = {
  repo: PropTypes.object.isRequired,
  onPublish: PropTypes.func,
  onSearch: PropTypes.func,
  onSync: PropTypes.func,

  showPublishBtn: PropTypes.bool,
  showSearchBtn: PropTypes.bool,
  showSyncBtn: PropTypes.bool,
}

GithubRepoPage.defaultProps = {
  onPublish: debug,
  onSearch: debug,
  onSync: debug,

  showPublishBtn: false,
  showSearchBtn: false,
  showSyncBtn: false,
}

export default GithubRepoPage
