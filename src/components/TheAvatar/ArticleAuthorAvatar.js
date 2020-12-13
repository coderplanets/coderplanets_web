import React from 'react'

import { ICON } from '@/config'
import ImgFallback from '@/components/ImgFallback'
import { Wrapper, Avatar, Tail } from './styles/article_author_avatar'

const ArticleAuthorAvatar = ({ user, onSelect }) => {
  return (
    <Wrapper onClick={() => onSelect(user)}>
      <Avatar
        src={user.avatar}
        fallback={<ImgFallback user={user} size={38} top={2} />}
      />
      <Tail src={`${ICON}/shape/tail.svg`} />
    </Wrapper>
  )
}

export default React.memo(ArticleAuthorAvatar)
