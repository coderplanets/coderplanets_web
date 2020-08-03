/*
 *
 * GithubRepoPage
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'
import Maybe from '@/components/Maybe'
import MarkDownRender from '@/components/MarkDownRender'

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
  PublishButton,
  ReadonlyHolder,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:GithubRepoPage:index')

const GithubRepoPage = ({
  repo,
  updating,
  onSearch,
  onPublish,
  showPublishBtn,
  showSearchBtn,
  viewerHeader,
  bodyHeader,
  publishing,
  readOnly,
}) => (
  <Wrapper updating={updating}>
    {!readOnly ? <>{viewerHeader}</> : <ReadonlyHolder />}
    <BodyWrapper>
      {!readOnly && <>{bodyHeader} </>}
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
    <Footer show={showSearchBtn || showPublishBtn}>
      <Maybe test={showSearchBtn}>
        <SearchButton type="primary" ghost onClick={onSearch}>
          重新搜索
        </SearchButton>
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
  updating: T.bool,
  onPublish: T.func,
  onSearch: T.func,

  showPublishBtn: T.bool,
  showSearchBtn: T.bool,

  viewerHeader: T.node,
  bodyHeader: T.node,

  publishing: T.bool,
  readOnly: T.bool,
}

GithubRepoPage.defaultProps = {
  updating: false,
  onPublish: log,
  onSearch: log,

  showPublishBtn: false,
  showSearchBtn: false,
  viewerHeader: <div />,
  bodyHeader: <div />,

  publishing: false,
  readOnly: false,
}

export default React.memo(GithubRepoPage)
