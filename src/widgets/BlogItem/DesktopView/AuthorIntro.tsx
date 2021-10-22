import { FC, memo } from 'react'

import type { TUser } from '@/spec'

import { Wrapper, Hint, Name, Intro } from '../styles/desktop_view/author_intro'

type TProps = {
  author: TUser
}

const AuthorIntro: FC<TProps> = ({ author }) => {
  return (
    <Wrapper>
      <Hint>作者简介</Hint>
      <Name>{author.nickname}</Name>
      {/* <Intro>开源社区 CoderPlanets 作者，开源爱好者，等等</Intro> */}
    </Wrapper>
  )
}

export default memo(AuthorIntro)
