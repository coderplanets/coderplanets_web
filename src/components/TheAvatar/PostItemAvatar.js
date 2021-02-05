import React from 'react'

// import { ICON } from '@/config'
import ImgFallback from '@/components/ImgFallback'
import { Wrapper, Avatar, QuoteAvatar } from './styles/post_item_avatar'

const PostItemAvatar = ({ user, onSelect }) => {
  return (
    <Wrapper onClick={() => onSelect(user)}>
      {user.login === 'mydearxym' ? (
        <QuoteAvatar
          src={user.avatar}
          fallback={<ImgFallback user={user} size={38} top={2} />}
        />
      ) : (
        <Avatar
          src={user.avatar}
          fallback={<ImgFallback user={user} size={38} top={2} />}
        />
      )}
      {/* <Tail src={`${ICON}/shape/tail.svg`} /> */}
    </Wrapper>
  )
}

export default React.memo(PostItemAvatar)
