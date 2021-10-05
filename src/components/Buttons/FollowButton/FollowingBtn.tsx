import { FC, memo } from 'react'

import { TSIZE_TSM } from '@/spec'

import { LavaLampLoading } from '@/components/dynamic'
import Tooltip from '@/components/Tooltip'

import {
  BtnWrapper,
  Popinfo,
  FollowingIcon,
  FollowingButton,
} from '../styles/follow_button'

type TProps = {
  size: TSIZE_TSM
  loading: boolean
  text: string
  onClick: () => void
}

const FollowingBtn: FC<TProps> = ({ size, loading, text, onClick }) => {
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
            type="primary"
            ghost
            onClick={onClick}
            noBorder
          >
            <BtnWrapper>
              <FollowingIcon />
              {text}
            </BtnWrapper>
          </FollowingButton>
        </Tooltip>
      )}
    </>
  )
}

export default memo(FollowingBtn)
