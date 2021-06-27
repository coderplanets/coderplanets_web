import { FC, Fragment, memo } from 'react'
import TimeAgo from 'timeago-react'

import type { TPost } from '@/spec'
import { ICON_CMD } from '@/config'
import { cutRest, parseDomain } from '@/utils'

import InlineTags from '@/components/InlineTags'

import {
  SmallAvatar,
  TitleLink,
  LinkIcon,
  Main,
  TopHalf,
  Brief,
  Title,
  SecondHalf,
  Extra,
  CommentWrapper,
  CommentIcon,
  CommentNum,
} from './styles/list_view'

type TProps = {
  entry: TPost
  onPreview?: (obj: TPost) => void
}

const ListView: FC<TProps> = ({ entry, onPreview }) => (
  <Fragment>
    <SmallAvatar src={entry.author.avatar} />
    <Main>
      <TopHalf>
        <Brief onClick={() => onPreview(entry)}>
          <Title>{cutRest(entry.title, 45)}</Title>
          {entry.linkAddr && (
            <TitleLink>
              <LinkIcon src={`${ICON_CMD}/link.svg`} />
              <span style={{ marginLeft: 9 }}>
                {parseDomain(entry.linkAddr)}
              </span>
            </TitleLink>
          )}
          <InlineTags data={entry.tags} />
        </Brief>
        <CommentWrapper>
          <CommentIcon src={`${ICON_CMD}/list_comments.svg`} />
          <CommentNum>
            {entry.commentsCount} / {entry.views}
          </CommentNum>
        </CommentWrapper>
      </TopHalf>

      <SecondHalf>
        <Extra>
          {entry.author.nickname} 发布于:{' '}
          <TimeAgo datetime={entry.insertedAt} locale="zh_CN" />
        </Extra>
      </SecondHalf>
    </Main>
  </Fragment>
)

export default memo(ListView)
