import { FC, memo } from 'react'

import { TUser, TAccount } from '@/spec'
import { ICON } from '@/config'
import ImgFallback from '@/components/ImgFallback'

import {
  Wrapper,
  InnerShadow,
  QuoteShadow,
  Avatar,
  QuoteAvatar,
  MaskIcon,
} from './styles/post_item_avatar'

type TProps = {
  user: TUser
  onSelect: (user: TUser | TAccount) => void
}

const PostItemAvatar: FC<TProps> = ({ user, onSelect }) => {
  return (
    <Wrapper onClick={() => onSelect(user)}>
      {user.login === 'mydearxym' ? (
        <QuoteAvatar
          src={user.avatar}
          fallback={<ImgFallback user={user} size={32} top={2} quote />}
        />
      ) : (
        <Avatar
          src={user.avatar}
          fallback={<ImgFallback user={user} size={32} top={-1} left={-1} />}
        />
      )}
      {user.login === 'mydearxym' ? <QuoteShadow /> : <InnerShadow />}
      {user.login === 'mydearxym' && (
        <MaskIcon src={`${ICON}/user/mute-mask.svg`} />
      )}
    </Wrapper>
  )
}

export default memo(PostItemAvatar)
