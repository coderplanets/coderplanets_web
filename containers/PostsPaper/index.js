/*
*
* PostsPaper
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import shortid from 'shortid'
import { Pagination, Affix } from 'antd'
import TimeAgo from 'timeago-react'
// import Link from 'next/link'

// import { Button } from '../../components'
import ContentFilter from '../../components/ContentFilter'
import {
  makeDebugger,
  storeSelector,
  getSVGIconPath,
  getRandomInt,
  cutFrom,
  // Global,
} from '../../utils'

import AvatarsRow from '../../components/AvatarsRow'
import TagList from '../../components/TagList'
import PostsLoading from '../../components/LoadingEffects/PostsLoading'

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
  PostTitle,
  PostTitleTag,
  PostSecondHalf,
  PostBodyBreif,
  PostExtra,
  PostTitleTagDot,
  TagDivider,
  WritePostBtn,
  Pagi,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostsPaper')
/* eslint-enable no-unused-vars */

const commentsUsers = [
  {
    avatar: 'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar10.png',
    nickname: 'mydearxym',
  },
  {
    avatar: 'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar11.png',
    nickname: 'messi',
  },
  {
    avatar: 'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar6.png',
    nickname: 'iniesta',
  },
  {
    avatar: 'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar13.png',
    nickname: 'montu',
  },
  {
    avatar: 'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar14.png',
    nickname: 'fjiek',
  },
  {
    avatar: 'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar15.png',
    nickname: 'noone',
  },
  {
    avatar: 'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar17.png',
    nickname: 'jacke',
  },
]

const tags = [
  {
    color: '#FC6360',
    title: 'react',
  },
  {
    color: '#FFA653',
    title: 'angular',
  },
  {
    color: '#F8CE5A',
    title: 'ask',
  },
  {
    color: '#60CC5A',
    title: 'test 相关',
  },
  {
    color: '#9fefe4',
    title: '问答',
  },

  {
    color: '#2CB8F0',
    title: 'mastani',
  },
  {
    color: '#D488DE',
    title: 'support',
  },
]

function itemRender(current, type, originalElement) {
  /* eslint-disable */
  if (type === 'prev') {
    return <a>上一页</a>
  } else if (type === 'next') {
    return <a>下一页</a>
  }
  /* eslint-enable */
  return originalElement
}

const PostItem = ({ post }) => (
  <PostWrapper>
    <div>
      <PostAvatar
        src="http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/me.jpg"
        alt="avatar"
      />
    </div>
    <PostMain>
      <PostTopHalf>
        <PostTitle onClick={logic.onContentSelect.bind(this, post)}>
          {post.title}
          <PostTitleLink>
            <LinkIcon path={getSVGIconPath('link')} />
            <span style={{ marginLeft: 9 }}>github</span>
          </PostTitleLink>
          <PostTitleTag>
            <PostTitleTagDot />
            react
          </PostTitleTag>
        </PostTitle>
        <div>
          <AvatarsRow
            users={commentsUsers.slice(
              1,
              getRandomInt(2, commentsUsers.length)
            )}
            total={3}
          />
        </div>
      </PostTopHalf>

      <PostSecondHalf>
        <PostExtra>
          mydearxym 发布于:{' '}
          <TimeAgo datetime={post.insertedAt} locale="zh_CN" /> ⁝ 浏览:{' '}
          {post.views}
        </PostExtra>
        <PostBodyBreif>{cutFrom(post.digest, 100)}</PostBodyBreif>
      </PostSecondHalf>
    </PostMain>
  </PostWrapper>
)

const View = ({ posts, curView }) => {
  switch (curView) {
    case 'RESULT': {
      return (
        <div>
          {posts.map(post => <PostItem post={post} key={shortid.generate()} />)}
        </div>
      )
    }
    default:
      return <PostsLoading num={5} />
  }
}

class PostsPaperContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.postsPaper)
  }

  componentDidMount() {
    // Affix hack
    // Global.scrollTo(0, 1)
  }

  render() {
    const {
      postsData,
      curView,
      curFilter: { when, sort, wordLength },
      curTag,
    } = this.props.postsPaper

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <FilterWrapper>
            <ContentFilter
              onSelect={logic.filterOnSelect}
              activeWhen={when}
              activeSort={sort}
              activeLength={wordLength}
            />
            <FilterResultHint>
              结果约 {postsData.totalEntries} 条
            </FilterResultHint>
          </FilterWrapper>

          <View posts={postsData.entries} curView={curView} />

          <Pagi>
            <Pagination
              current={postsData.pageNumber}
              pageSize={postsData.pageSize}
              total={postsData.totalEntries}
              itemRender={itemRender}
              onChange={logic.pageChange}
            />
          </Pagi>
        </LeftPart>

        <RightPart>
          <Affix offsetTop={100}>
            <WritePostBtn type="primary" onClick={logic.createContent}>
              发&nbsp;&nbsp;&nbsp;&nbsp;帖
            </WritePostBtn>

            <TagDivider />

            <TagList tags={tags} active={curTag} onSelect={logic.tagOnSelect} />
          </Affix>
        </RightPart>
        <RightPadding />
      </Wrapper>
    )
  }
}

export default inject(storeSelector('postsPaper'))(
  observer(PostsPaperContainer)
)
