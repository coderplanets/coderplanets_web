/*
 *
 * AuthorInfo
 *
 */

import React from 'react'
import T from 'prop-types'
import { isEmpty, pickBy } from 'ramda'

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

const AuthorInfo = ({ testid, author }) => {
  const socialItems = pickBy((v) => !!v, author.social)

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
          fallback={<ImgFallback user={author} width={38} bottom={16} />}
        />
        <Button type="primary" size="tiny" ghost>
          &nbsp;关&nbsp;&nbsp;注&nbsp;
        </Button>
      </AvatarIntro>
    </Wrapper>
  )
}

AuthorInfo.propTypes = {
  testid: T.string,
  author: T.shape({
    avatar: T.string,
    nickname: T.string,
    bio: T.string,
    social: T.shape({
      douban: T.string,
      dribble: T.string,
      facebook: T.string,
      github: T.string,
      huaban: T.string,
      instagram: T.string,
      pinterest: T.string,
      qq: T.string,
      twitter: T.string,
      weibo: T.string,
      weichat: T.string,
      zhihu: T.string,
    }),
  }).isRequired,
}

AuthorInfo.defaultProps = {
  testid: 'author-info',
}

export default React.memo(AuthorInfo)
