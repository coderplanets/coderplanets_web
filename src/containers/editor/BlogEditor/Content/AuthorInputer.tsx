import { FC, memo, Fragment } from 'react'

import type { TBlogRSS, TBlog, TEditMode, TRSSAuthor } from '@/spec'

import NoticeBar from '@/widgets/NoticeBar'
import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'

import RSSItem from './TheRSSItem'
import FeedItem from './FeedItem'

import {
  Wrapper,
  Hint,
  InputerWrapper,
  Inputer,
  InputMask,
} from '../styles/content/author_inputer'
import { inputOnChange } from '../logic'

type TProps = {
  rssInfo: TBlogRSS
  activeBlog: TBlog
  mode: TEditMode
  authorInfo: TRSSAuthor
  loading: boolean
}

const AuthorInputer: FC<TProps> = ({
  rssInfo,
  activeBlog,
  mode,
  authorInfo,
  loading,
}) => {
  const { name, github, intro, twitter } = authorInfo
  if (loading) {
    return (
      <Wrapper>
        <LavaLampLoading />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <RSSItem bottom={20} rssInfo={rssInfo} readonly={mode === 'update'} />
      {mode === 'publish' && (
        <FeedItem item={activeBlog} withSelector={false} withEdit />
      )}

      {mode === 'publish' ? (
        <Hint>作者信息</Hint>
      ) : (
        <Hint>
          作者信息，一般位于原博客「关于」链接内。 请勿填写作者非公开信息。
        </Hint>
      )}

      {mode === 'publish' && (
        <NoticeBar
          type="notice"
          content="作者信息会由志愿者稍后填写，所用资料均为原作者公开信息，如有补充或纠错，请在博客评论区留言，感谢提交。"
          bottom={20}
          right={35}
        />
      )}

      {mode === 'update' && (
        <Fragment>
          <InputerWrapper>
            <Inputer
              value={name}
              placeholder="// 作者名字"
              onChange={(e) => inputOnChange(e, 'authorName')}
            />
          </InputerWrapper>
          <InputerWrapper>
            <Inputer
              value={intro}
              placeholder="// 作者简介"
              behavior="textarea"
              onChange={(e) => inputOnChange(e, 'authorIntro')}
            />
          </InputerWrapper>
          <InputerWrapper>
            <InputMask>https://twitter.com/</InputMask>
            <Inputer
              value={twitter}
              placeholder="// 可选"
              onChange={(e) => inputOnChange(e, 'authorTwitter')}
            />
          </InputerWrapper>
          <InputerWrapper>
            <InputMask>https://github.com/</InputMask>
            <Inputer
              value={github}
              placeholder="// 可选"
              onChange={(e) => inputOnChange(e, 'authorGithub')}
            />
          </InputerWrapper>
        </Fragment>
      )}
    </Wrapper>
  )
}

export default memo(AuthorInputer)
