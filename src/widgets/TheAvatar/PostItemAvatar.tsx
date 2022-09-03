import { FC, memo } from 'react'

import { TUser, TAccount } from '@/spec'
import ImgFallback from '@/widgets/ImgFallback'

import { Wrapper, Avatar } from './styles/post_item_avatar'

type TProps = {
  user: TUser
  onSelect: (user: TUser | TAccount) => void
}

const PostItemAvatar: FC<TProps> = ({ user, onSelect }) => {
  // const quoteLogin = 'laury2'
  return (
    <Wrapper onClick={() => onSelect(user)}>
      <Avatar
        src={user.avatar}
        fallback={<ImgFallback user={user} size={30} top={-2} left={0} />}
      />
      {/* {user.login === quoteLogin ? (
        <QuoteAvatar
          src={user.avatar}
          fallback={
            <ImgFallback user={user} size={33} top={-2} left={-2} quote />
          }
        />
      ) : (
        <Avatar
          src={user.avatar}
          fallback={<ImgFallback user={user} size={30} top={-2} left={0} />}
        />
      )} */}
      {/* {user.login === quoteLogin ? <QuoteShadow /> : <InnerShadow />} */}
      {/* {user.login === quoteLogin && (
        <MaskIcon src={`${ICON}/user/mute-mask.svg`} />
      )} */}
    </Wrapper>
  )
}

export default memo(PostItemAvatar)
