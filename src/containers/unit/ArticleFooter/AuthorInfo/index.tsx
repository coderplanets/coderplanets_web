/*
 *
 * AuthorInfo
 *
 */

import { FC, memo } from 'react'
import { isEmpty, pickBy } from 'ramda'

import type { TAccount } from '@/spec'
import { buildLog } from '@/utils'

import { Button } from '@/components/Buttons'
import ImgFallback from '@/components/ImgFallback'

import SocialList from './SocialList'

import {
  Wrapper,
  TextIntro,
  IntroTitle,
  Name,
  Bio,
  //
  AvatarIntro,
  Avatar,
} from '../styles/author_info'

/* eslint-disable-next-line */
const log = buildLog('c:AuthorInfo:index')

type TProps = {
  testid?: string
  author: TAccount
}

const AuthorInfo: FC<TProps> = ({ testid = 'author-info', author }) => {
  const socialItems = pickBy((v) => !!v, author.social) as Record<
    string,
    string
  >

  return (
    <Wrapper testid={testid}>
      <TextIntro>
        <IntroTitle>关于作者</IntroTitle>
        <Name>
          {author.nickname}
          {!isEmpty(socialItems) && <SocialList items={socialItems} />}
        </Name>
        <Bio>{author.bio}</Bio>
      </TextIntro>
      <AvatarIntro>
        <Avatar
          src={author.avatar}
          fallback={<ImgFallback user={author} size={38} bottom={16} />}
        />
        <Button type="primary" size="tiny" ghost>
          &nbsp;关&nbsp;&nbsp;注&nbsp;
        </Button>
      </AvatarIntro>
    </Wrapper>
  )
}

export default memo(AuthorInfo)
