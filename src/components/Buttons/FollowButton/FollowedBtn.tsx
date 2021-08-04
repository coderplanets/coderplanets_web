import { FC, memo } from 'react'

import { TSIZE_TSM } from '@/spec'
import LavaLampLoading from '@/components/Loading/LavaLampLoading'

import { BtnWrapper, FollowedButton } from '../styles/follow_button'

type TProps = {
  size: TSIZE_TSM
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
