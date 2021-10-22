import { FC, memo } from 'react'

import { TUser, TAccount } from '@/spec'
// import { ICON } from '@/config'
import ImgFallback from '@/widgets/ImgFallback'

import { Wrapper, Avatar } from './styles/article_author_avatar'

type TProps = {
  user: TUser
  onSelect: (user: TUser | TAccount) => void
}

const ArticleAuthorAvatar: FC<TProps> = ({ user, onSelect }) => {
  return (
    <Wrapper onClick={() => onSelect(user)}>
      <Avatar
        src={user.avatar}
        fallback={<ImgFallback user={user} size={38} top={2} />}
      />
      {/* <Tail src={`${ICON}/shape/tail.svg`} /> */}
    </Wrapper>
  )
}

export default memo(ArticleAuthorAvatar)
