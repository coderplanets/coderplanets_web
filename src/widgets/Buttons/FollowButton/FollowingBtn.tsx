import { FC, memo } from 'react'

import type { TSizeTSM } from '@/spec'

import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'
import Tooltip from '@/widgets/Tooltip'

import {
  FollowingBtnWrapper,
  Popinfo,
  BtnText,
  FollowingIcon,
  FollowingButton,
} from '../styles/follow_button'

type TProps = {
  size: TSizeTSM
  loading: boolean
  followingOffset: number
  text: string
  onClick: () => void
}

const FollowingBtn: FC<TProps> = ({
  size,
  loading,
  followingOffset,
  text,
  onClick,
}) => {
  return (
    <>
      {loading ? (
        <LavaLampLoading size="small" />
      ) : (
        <Tooltip
          placement="bottom"
          delay={800}
          content={<Popinfo>点击取消关注</Popinfo>}
          noPadding
        >
          <FollowingButton
            size={size}
            followingOffset={followingOffset}
            type="primary"
            ghost
            onClick={onClick}
            noBorder
          >
            <FollowingBtnWrapper>
              <FollowingIcon />
              <BtnText>{text}</BtnText>
            </FollowingBtnWrapper>
          </FollowingButton>
        </Tooltip>
      )}
    </>
  )
}

export default memo(FollowingBtn)
