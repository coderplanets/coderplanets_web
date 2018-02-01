/*
*
* PostsPaper
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import shortid from 'shortid'
import { Pagination, Affix } from 'antd'
// import Link from 'next/link'

// import { Button } from '../../components'
import ContentFilter from '../../components/ContentFilter'
import {
  makeDebugger,
  storeSelector,
  getSVGIconPath,
  getRandomInt,
  Global,
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
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ssiskind/128.jpg',
    nickname: 'mydearxym',
  },
  {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/juamperro/128.jpg',
    nickname: 'messi',
  },
  {
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/noufalibrahim/128.jpg',
    nickname: 'iniesta',
  },
  {
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/artem_kostenko/128.jpg',
    nickname: 'montu',
  },
  {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dnirmal/128.jpg',
    nickname: 'fjiek',
  },
  {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/gaborenton/128.jpg',
    nickname: 'noone',
  },
  {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/malykhinv/128.jpg',
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
      <PostAvatar src={post.author.avatar} alt="avatar" />
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
        <PostExtra>mydearxym 发布于: 3天前 ⁝ 浏览: 8374</PostExtra>
        <PostBodyBreif>{post.body}</PostBodyBreif>
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
    Global.scrollTo(0, 1)
  }

  render() {
    const {
      postsData,
      curView,
      curFilter: { time, sort, wordLength },
      curTag,
    } = this.props.postsPaper

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <FilterWrapper>
            <ContentFilter
              onSelect={logic.filterOnSelect}
              activeTime={time}
              activeSort={sort}
              activeLength={wordLength}
            />
            <FilterResultHint>结果约 1000 条</FilterResultHint>
          </FilterWrapper>

          <View posts={postsData.entries} curView={curView} />

          <Pagi>
            <Pagination total={500} itemRender={itemRender} />
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

/*
<div>
<Button type="primary" onClick={logic.createPost}>
createPost (mutate)
</Button>
                              &nbsp;&nbsp;
<Button type="primary" onClick={logic.postList}>
postList (query)
</Button>
                              &nbsp;&nbsp;
<Button type="primary" onClick={logic.cheatsheet}>
cheatsheeti
</Button>
</div>
*/
