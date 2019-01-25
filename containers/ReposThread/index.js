/*
 *
 * ReposThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Waypoint from 'react-waypoint'
import { Affix } from 'antd'

import { ICON_CMD } from 'config'
import { makeDebugger, storePlug, THREAD } from 'utils'

import PagedContents from 'components/PagedContents'
import ContentFilter from 'components/ContentFilter'
import PublishLabel from 'components/PublishLabel'
import TagsBar from 'containers/TagsBar'
import Maybe from 'components/Maybe'

import {
  Wrapper,
  LeftPadding,
  RightPadding,
  LeftPart,
  RightPart,
  FilterWrapper,
  PublishBtn,
} from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:ReposThread')

class ReposThreadContainer extends React.Component {
  componentDidMount() {
    const { reposThread } = this.props
    logic.init(reposThread)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { reposThread } = this.props

    const {
      pagedReposData,
      curView,
      filtersData,
      activeTagData,
      activeRepo,
      curRoute,
      accountInfo,
      showFilterBar,
    } = reposThread

    const { mainPath } = curRoute
    const { totalCount } = pagedReposData

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
          <Maybe test={showFilterBar}>
            <FilterWrapper>
              <ContentFilter
                thread={THREAD.REPO}
                onSelect={logic.onFilterSelect}
                activeFilter={filtersData}
                accountInfo={accountInfo}
                totalCount={totalCount}
                onC11NChange={logic.onC11NChange}
              />
            </FilterWrapper>
          </Maybe>

          <PagedContents
            data={pagedReposData}
            community={mainPath}
            thread={THREAD.REPO}
            curView={curView}
            active={activeRepo}
            accountInfo={accountInfo}
            onPreview={logic.onPreview}
            onPageChange={logic.loadRepos}
          />
        </LeftPart>

        <RightPart>
          <PublishBtn type="primary" onClick={logic.onContentCreate}>
            <PublishLabel text="发布项目" iconSrc={`${ICON_CMD}/github.svg`} />
          </PublishBtn>

          <Affix offsetTop={50}>
            <TagsBar
              thread={THREAD.REPO}
              active={activeTagData}
              onSelect={logic.onTagSelect}
            />
          </Affix>
        </RightPart>
        <RightPadding />
      </Wrapper>
    )
  }
}

export default inject(storePlug('reposThread'))(observer(ReposThreadContainer))
