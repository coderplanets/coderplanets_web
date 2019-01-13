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
    } = reposThread

    const { mainPath } = curRoute
    const { totalCount } = pagedReposData

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
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
          <PublishBtn type="primary" onClick={logic.createContent}>
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
