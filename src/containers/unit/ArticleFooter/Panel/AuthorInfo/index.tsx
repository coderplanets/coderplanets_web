/*
 *
 * AuthorInfo
 *
 */

import { FC, memo } from 'react'

import type { TAccount } from '@/spec'
import { buildLog } from '@/utils/logger'

import ImgFallback from '@/widgets/ImgFallback'
import SocialList from '@/widgets/SocialList'

// import SocialList from './SocialList'

import {
  Wrapper,
  ContentWrapper,
  TextIntro,
  FromHint,
  Name,
  Bio,
  AvatarIntro,
  Avatar,
} from '../../styles/panel/author_info'

// import { onFollow, undoFollow } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('w:AuthorInfo:index')

type TProps = {
  testid?: string
  author: TAccount
}

const AuthorInfo: FC<TProps> = ({ testid = 'author-info', author }) => {
  return (
    <Wrapper testid={testid}>
      <ContentWrapper>
        <TextIntro>
          <Name>
            {author.nickname}
            {/* {!isEmpty(socialItems) && <SocialList items={socialItems} />} */}
          </Name>
          <FromHint>来自 github / 成都</FromHint>
          <Bio>{author.bio}</Bio>
        </TextIntro>
        <AvatarIntro>
          <Avatar
            src={author.avatar}
            fallback={<ImgFallback user={author} size={38} bottom={16} />}
          />
          <SocialList />
        </AvatarIntro>
      </ContentWrapper>
    </Wrapper>
  )
}

export default memo(AuthorInfo)
