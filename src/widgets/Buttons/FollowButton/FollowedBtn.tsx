import { FC, memo } from 'react'

import { TSizeTSM } from '@/spec'
import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'

import { BtnWrapper, FollowedButton } from '../styles/follow_button'

type TProps = {
  size: TSizeTSM
  loading: boolean
  text: string
  onClick: () => void
}

const FollowBtn: FC<TProps> = ({ size, loading, text, onClick }) => {
  return (
    <>
      {loading ? (
        <LavaLampLoading size="small" />
      ) : (
        <FollowedButton size={size} type="primary" onClick={onClick} ghost>
          <BtnWrapper>{text}</BtnWrapper>
        </FollowedButton>
      )}
    </>
  )
}

export default memo(FollowBtn)
