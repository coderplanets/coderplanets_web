/*
 *
 * PostsThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import shortid from 'shortid'
import TimeAgo from 'timeago-react'
import Waypoint from 'react-waypoint'
// import Link from 'next/link'

import { ICON_ASSETS } from '../../config'

import { makeDebugger, storePlug, cutFrom, TYPE } from '../../utils'

import {
  Affix,
  TagList,
  PostsLoading,
  Pagi,
  EmptyThread,
  ContentFilter,
  BuyMeChuanChuan,
} from '../../components'

// import logic from './logic'
import * as logic from './logic'
import {
  Wrapper,
  LeftPadding,
  RightPadding,
  LeftPart,
  RightPart,
  PostWrapper,
  FilterWrapper,
  FilterResultHint,
  PostAvatar,
  PostTitleLink,
  LinkIcon,
  PostMain,
  PostTopHalf,
  PostBreif,
  PostTitle,
  PostTitleTag,
  PostSecondHalf,
  PostBodyBreif,
  PostExtra,
  PostTitleTagDot,
  TagDivider,
  WritePostBtn,
  RightInfo,
  SalaryWrapper,
  CompanyTitle,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:JobsThread')
/* eslint-enable no-unused-vars */

const PostItem = ({ post, active }) => (
  <PostWrapper current={post} active={active}>
    <div>
      <PostAvatar
        src="http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/me.jpg"
        alt="avatar"
      />
    </div>
    <PostMain>
      <PostTopHalf>
        <PostBreif onClick={logic.onTitleSelect.bind(this, post)}>
          <PostTitle>{post.title}</PostTitle>
          <PostTitleLink>
            <LinkIcon src={`${ICON_ASSETS}/cmd/link.svg`} />
            <span style={{ marginLeft: 9 }}>拉钩</span>
          </PostTitleLink>
          <PostTitleTag>
            <PostTitleTagDot />
            成都
          </PostTitleTag>
        </PostBreif>
      </PostTopHalf>

      <PostSecondHalf>
        <PostExtra>
          mydearxym 发布于:{' '}
          <TimeAgo datetime={post.insertedAt} locale="zh_CN" /> ⁝ 浏览:{' '}
          {post.views}
        </PostExtra>
        <PostBodyBreif>{cutFrom(post.digest, 90)}</PostBodyBreif>
      </PostSecondHalf>
    </PostMain>

    <RightInfo>
      <CompanyTitle>中央公园</CompanyTitle>
      <SalaryWrapper>15k - 30k</SalaryWrapper>
    </RightInfo>
  </PostWrapper>
)

const View = ({ community, thread, jobs, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {jobs.map(post => (
            <PostItem post={post} key={shortid.generate()} active={active} />
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
      return <PostsLoading num={3} />
  }
}

class JobsThreadContainer extends React.Component {
  componentWillMount() {
    const { jobsThread } = this.props
    logic.init(jobsThread)
  }

  componentDidMount() {}

  render() {
    const {
      jobsThread: {
        pagedJobsData,
        tagsData,
        curView,
        curFilter: { when, sort, wordLength },
        activeTagData,
        active,
        accountInfo,
        curRoute,
      },
    } = this.props

    // TODO: use curCommunity
    const { mainPath, subPath } = curRoute

    return (
      <React.Fragment>
        {pagedJobsData ? (
          <Wrapper>
            <LeftPadding />
            <BuyMeChuanChuan fromUser={accountInfo} />
            <LeftPart>
              <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
              <FilterWrapper show={curView === TYPE.RESULT}>
                <ContentFilter
                  onSelect={logic.onFilterSelect}
                  activeWhen={when}
                  activeSort={sort}
                  activeLength={wordLength}
                />
                <FilterResultHint>
                  结果约 {pagedJobsData.totalCount} 条
                </FilterResultHint>
              </FilterWrapper>

              <View
                community={mainPath}
                thread={subPath}
                jobs={pagedJobsData.entries}
                curView={curView}
                active={active}
              />

              <Pagi
                left="-10px"
                pageNumber={pagedJobsData.pageNumber}
                pageSize={pagedJobsData.pageSize}
                totalCount={pagedJobsData.totalCount}
                onChange={logic.loadJobs}
              />
            </LeftPart>

            <RightPart>
              <WritePostBtn type="primary" onClick={logic.createContent}>
                招贤纳士
              </WritePostBtn>

              <Affix offsetTop={50}>
                <TagDivider />
                <TagList
                  tags={tagsData}
                  active={activeTagData}
                  onSelect={logic.onTagSelect}
                />
              </Affix>
            </RightPart>
            <RightPadding />
          </Wrapper>
        ) : (
          <Wrapper>
            <LeftPadding />
            <LeftPart>
              <PostsLoading num={3} />
            </LeftPart>
            <RightPart />
            <RightPadding />
          </Wrapper>
        )}
      </React.Fragment>
    )
  }
}

export default inject(storePlug('jobsThread'))(observer(JobsThreadContainer))

/*
   <iframe
   id="ytplayer"
   type="text/html"
   width="640"
   height="360"
   allowfullscreen="allowfullscreen"
   mozallowfullscreen="mozallowfullscreen"
   msallowfullscreen="msallowfullscreen"
   oallowfullscreen="oallowfullscreen"
   webkitallowfullscreen="webkitallowfullscreen"
   src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
   frameborder="0"
   />
 */
