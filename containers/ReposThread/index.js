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
  RepoItemLoading,
  Pagi,
  EmptyThread,
  ContentFilter,
  Maybe,
  RepoItem,
  PublishLabel,
} from '../../components'

import {
  Wrapper,
  LeftPadding,
  RightPadding,
  LeftPart,
  RightPart,
  FilterWrapper,
  FilterResultHint,
  PublishBtn,
} from './styles'

import { uid, makeDebugger, storePlug, TYPE, THREAD } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:ReposThread')
/* eslint-enable no-unused-vars */

const View = ({ community, thread, entries, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          <RepoItemLoading num={1} />
          {entries.map(entry => (
            <RepoItem key={uid.gen()} entry={entry} active={active} />
          ))}
        </React.Fragment>
      )
    }
    case TYPE.RESULT_EMPTY: {
      return (
        <React.Fragment>
          <EmptyThread community={community} thread={thread} />
        </React.Fragment>
      )
    }
    default:
      return <RepoItemLoading num={5} />
  }
}

class ReposThreadContainer extends React.Component {
  componentWillMount() {
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
    } = reposThread

    const { mainPath, subPath } = curRoute
    const { entries, totalCount, pageNumber, pageSize } = pagedReposData

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
          <Maybe test={totalCount !== 0}>
            <FilterWrapper>
              <ContentFilter
                onSelect={logic.onFilterSelect}
                activeFilter={filtersData}
              />
              <FilterResultHint>
                结果约 {pagedReposData.totalCount} 条
              </FilterResultHint>
            </FilterWrapper>
          </Maybe>

          <View
            community={mainPath}
            thread={subPath}
            entries={entries}
            curView={curView}
            active={activeRepo}
          />

          <Pagi
            left="-10px"
            pageNumber={pageNumber}
            pageSize={pageSize}
            totalCount={totalCount}
            onChange={logic.loadRepos}
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
