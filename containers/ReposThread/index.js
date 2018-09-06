/*
 *
 * ReposThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Waypoint from 'react-waypoint'

import { uid, makeDebugger, storePlug, TYPE, THREAD } from '../../utils'

import {
  Affix,
  PostsLoading,
  Pagi,
  EmptyThread,
  ContentFilter,
  Space,
  Maybe,
} from '../../components'

import Item from './Item'
import { TagsBar } from '..'

import {
  Wrapper,
  LeftPadding,
  RightPadding,
  LeftPart,
  RightPart,
  FilterWrapper,
  FilterResultHint,
  TagDivider,
  PublishBtn,
} from './styles'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:ReposThread')
/* eslint-enable no-unused-vars */

const View = ({ community, thread, entries, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {entries.map((entry, index) => (
            <Item data={entry} key={uid.gen()} active={active} index={index} />
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
      return <PostsLoading num={5} />
  }
}

class ReposThreadContainer extends React.Component {
  componentWillMount() {
    const { reposThread } = this.props
    logic.init(reposThread)
  }

  render() {
    const {
      reposThread: {
        pagedReposData,
        tagsData,
        curView,
        filtersData,
        activeTagData,
        activeRepo,
        curRoute,
      },
    } = this.props

    const { mainPath, subPath } = curRoute
    const { entries, totalCount, pageNumber, pageSize } = pagedReposData

    return (
      <Wrapper>
        <React.Fragment>
          <LeftPadding />
          <LeftPart>
            <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
            {/* <FilterWrapper show={curView === TYPE.RESULT}> */}
            <FilterWrapper show>
              <ContentFilter
                onSelect={logic.onFilterSelect}
                activeFilter={filtersData}
              />
              <FilterResultHint>
                结果约 {pagedReposData.totalCount} 条
              </FilterResultHint>
            </FilterWrapper>

            <Maybe data={entries} loading={<PostsLoading num={5} />}>
              <React.Fragment>
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
              </React.Fragment>
            </Maybe>
          </LeftPart>

          <RightPart>
            <Maybe data={entries}>
              <React.Fragment>
                <PublishBtn type="primary" onClick={logic.createContent}>
                  发<Space right="20px" />布
                </PublishBtn>

                <Affix offsetTop={50}>
                  <TagDivider />
                  <TagsBar
                    thread={THREAD.REPO}
                    tags={tagsData}
                    active={activeTagData}
                    onSelect={logic.onTagSelect}
                  />
                </Affix>
              </React.Fragment>
            </Maybe>
          </RightPart>
          <RightPadding />
        </React.Fragment>
      </Wrapper>
    )
  }
}

export default inject(storePlug('reposThread'))(observer(ReposThreadContainer))
