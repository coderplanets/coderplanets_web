/*
 *
 * ReposThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Waypoint from 'react-waypoint'

import { ICON_CMD } from '../../config'
import TagsBar from '../TagsBar'

import {
  Affix,
  ContentFilter,
  Maybe,
  PublishLabel,
  PagedContents,
} from '../../components'

import {
  Wrapper,
  LeftPadding,
  RightPadding,
  LeftPart,
  RightPart,
  FilterWrapper,
  PublishBtn,
} from './styles'

import { makeDebugger, storePlug, THREAD } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:ReposThread')
/* eslint-enable no-unused-vars */

class ReposThreadContainer extends React.Component {
  componentDidMount() {
    const { reposThread } = this.props
    logic.init(reposThread)
  }

  render() {
    const { reposThread } = this.props

    const {
      pagedReposData,
      tagsData,
      curView,
      filtersData,
      activeTagData,
      activeRepo,
      curRoute,
      accountInfo,
    } = reposThread

    const { mainPath } = curRoute
    const { totalCount } = pagedReposData

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
          <Maybe test={totalCount !== 0}>
            <FilterWrapper>
              <ContentFilter
                thread={THREAD.REPO}
                onSelect={logic.onFilterSelect}
                activeFilter={filtersData}
                accountInfo={accountInfo}
                totalCount={totalCount}
                onCustomChange={logic.onCustomChange}
              />
            </FilterWrapper>
          </Maybe>

          <PagedContents
            data={pagedReposData}
            community={mainPath}
            thread={THREAD.REPO}
            curView={curView}
            active={activeRepo}
            onTitleSelect={logic.onTitleSelect}
            onPageChange={logic.loadRepos}
          />
        </LeftPart>

        <RightPart>
          <PublishBtn type="primary" onClick={logic.createContent}>
            <PublishLabel text="发布项目" iconSrc={`${ICON_CMD}/github.svg`} />
          </PublishBtn>

          <Affix offsetTop={50}>
            <TagsBar
              thread={THREAD.REPO}
              tags={tagsData}
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
