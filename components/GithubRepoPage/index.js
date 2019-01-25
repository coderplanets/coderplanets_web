/*
 *
 * GithubRepoPage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makeDebugger } from 'utils'
import Maybe from 'components/Maybe'
import MarkDownRender from 'components/MarkDownRender'

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
const debug = makeDebugger('c:GithubRepoPage:index')

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

  showPublishBtn: PropTypes.bool,
  showSearchBtn: PropTypes.bool,
  showSyncBtn: PropTypes.bool,

  viewerHeader: PropTypes.node,
  bodyHeader: PropTypes.node,

  readOnly: PropTypes.bool,
}

GithubRepoPage.defaultProps = {
  onPublish: debug,
  onSearch: debug,
  onSync: debug,

  showPublishBtn: false,
  showSearchBtn: false,
  showSyncBtn: false,
  viewerHeader: <div />,
  bodyHeader: <div />,

  readOnly: false,
}

export default GithubRepoPage
